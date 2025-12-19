"use client";

import type { ChatRequestOptions, CreateMessage, Message } from "ai";
import { motion } from "framer-motion";
import type React from "react";
import {
  useRef,
  useEffect,
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import Vapi from "@vapi-ai/web";

import { cn, sanitizeUIMessages } from "@/lib/utils";

import { ArrowUpIcon, StopIcon, MicrophoneIcon } from "./icons";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { VoiceAssistantOverlay } from "./voice-assistant-overlay";

const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "";
const VAPI_ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";

const suggestedActions = [
  {
    title: "Why hire me?",
    label: "Learn about my expertise",
    action: "Why should I hire Yasser for my project?",
  },
  {
    title: "View projects",
    label: "See my completed work",
    action: "Tell me about your most impressive projects and achievements",
  },
];

export function MultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  stop,
  messages,
  setMessages,
  append,
  handleSubmit,
  className,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  messages: Array<Message>;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
  className?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();
  const [isListening, setIsListening] = useState(false);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && VAPI_PUBLIC_KEY) {
      vapiRef.current = new Vapi(VAPI_PUBLIC_KEY);

      vapiRef.current.on("call-start", () => setIsListening(true));
      vapiRef.current.on("call-end", () => setIsListening(false));

      // Note: We are NOT adding a listener for transcripts here 
      // as the user wants a pure audio-to-backend experience 
      // without text appearing on screen.

      vapiRef.current.on("error", (error: any) => {
        console.error("Vapi error:", error);
        toast.error("Voice AI error occurred");
        setIsListening(false);
      });
    }

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };

  const toggleListening = useCallback(() => {
    if (isListening) {
      vapiRef.current?.stop();
    } else {
      if (!VAPI_ASSISTANT_ID) {
        toast.error("Vapi Assistant ID is not configured");
        return;
      }
      vapiRef.current?.start(VAPI_ASSISTANT_ID);
    }
  }, [isListening]);

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    "input",
    "",
  );

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value;
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || "";
      setInput(finalValue);
      adjustHeight();
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const submitForm = useCallback(() => {
    handleSubmit(undefined, {});
    setLocalStorageInput("");

    if (width && width > 768) {
      textareaRef.current?.focus();
    }
  }, [handleSubmit, setLocalStorageInput, width]);

  return (
    <div className="relative w-full flex flex-col gap-4">
      <VoiceAssistantOverlay 
        isOpen={isListening} 
        onClose={() => vapiRef.current?.stop()} 
      />
      {messages.length === 0 && (
        <div className="grid sm:grid-cols-2 gap-2 w-full">
          {suggestedActions.map((suggestedAction, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * index }}
              key={`suggested-action-${suggestedAction.title}-${index}`}
              className={index > 1 ? "hidden sm:block" : "block"}
            >
              <Button
                variant="ghost"
                onClick={async () => {
                  append({
                    role: "user",
                    content: suggestedAction.action,
                  });
                }}
                className="text-left border border-gray-700 hover:border-gray-500 px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start bg-black/30 hover:bg-gray-900/50 transition-all font-mono relative group rounded-lg"
              >
                <span className="font-semibold text-gray-300 group-hover:text-gray-100 transition-colors tracking-wide">{suggestedAction.title}</span>
                <span className="text-gray-500 text-xs">
                  {suggestedAction.label}
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="What would you like to know about Yasser..."
        value={input}
        onChange={handleInput}
        className={cn(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none !text-base bg-black/50 border border-gray-700 focus:border-gray-500 transition-all font-mono text-gray-300",
          className,
        )}
        rows={3}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            if (isLoading) {
              toast.error("Please wait for the model to finish its response!");
            } else {
              submitForm();
            }
          }
        }}
      />

      <div className="absolute bottom-2 right-2 flex gap-2.5 m-0.5">
        <Button
          className={cn(
            "p-2 h-fit transition-all rounded-full border shadow-sm",
            isListening 
              ? "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/30 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
              : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          )}
          onClick={(event) => {
            event.preventDefault();
            toggleListening();
          }}
          type="button"
          title={isListening ? "Stop listening" : "Start listening"}
        >
          <MicrophoneIcon size={16} />
        </Button>

        {isLoading ? (
          <Button
            className="p-2 h-fit bg-gray-900 border border-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full shadow-sm"
            onClick={(event) => {
              event.preventDefault();
              stop();
              setMessages((messages) => sanitizeUIMessages(messages));
            }}
          >
            <StopIcon size={16} />
          </Button>
        ) : (
          <Button
            className="p-2 h-fit bg-white text-black hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            onClick={(event) => {
              event.preventDefault();
              submitForm();
            }}
            disabled={input.length === 0}
          >
            <ArrowUpIcon size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}
