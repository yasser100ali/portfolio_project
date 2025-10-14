"use client";

import React from "react";
import { PreviewMessage, ThinkingMessage } from "@/components/message";
import { MultimodalInput } from "@/components/multimodal-input";
import { Overview } from "@/components/overview";
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import type { Message } from "ai";
// @ts-ignore - ai/react types issue with moduleResolution
import { useChat } from "ai/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ResumePanel } from "@/components/resume-panel";
import { WhyHireMePanel } from "@/components/why-hire-me-panel";

export function Chat() {
  const chatId = "001";

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
  } = useChat({
    maxSteps: 4,
    onError: (error: Error) => {
      if (error.message.includes("Too many requests")) {
        toast.error(
          "You are sending too many messages. Please try again later.",
        );
      }
    },
  });

  const [splitScreenMode, setSplitScreenMode] = React.useState<
    "none" | "resume" | "whyHireMe"
  >("none");
  const [panelVisible, setPanelVisible] = React.useState(false);
  const rightPanelRef = React.useRef<HTMLDivElement | null>(null);
  const hasMessages = messages.length > 0;

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  const openPanel = React.useCallback(
    (
      mode: "resume" | "whyHireMe",
      { ensureVisible = true }: { ensureVisible?: boolean } = {},
    ) => {
      setSplitScreenMode(mode);
      if (ensureVisible) {
        requestAnimationFrame(() => setPanelVisible(true));
      }
    },
    [],
  );

  const handleResume = () => {
    openPanel("resume");
  };

  const handleWhyHireMe = () => {
    openPanel("whyHireMe");
  };

  const handleBackToChat = () => {
    setPanelVisible(false);
    const node = rightPanelRef.current;
    if (node) {
      const onDone = () => {
        setSplitScreenMode("none");
        node.removeEventListener("transitionend", onDone);
      };
      node.addEventListener("transitionend", onDone);
    } else {
      setTimeout(() => setSplitScreenMode("none"), 320);
    }
  };

  return (
    <div className="flex h-full overflow-hidden bg-background">
      {/* Chat area */}
      <div
        className={cn("flex flex-col h-full transition-[width] duration-300 ease-out overflow-hidden")}
        style={{
          width: panelVisible ? "50%" : "100%",
        }}
      >
        <div className="flex flex-col h-full bg-background overflow-hidden">
          {/* Sticky header that appears after first message */}
          {hasMessages && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex-shrink-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            >
              <div className="px-4 py-4">
                <div className="flex flex-col gap-3 max-w-4xl mx-auto">
                  <motion.div 
                    className="flex flex-col gap-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <p className="text-white font-medium text-base sm:text-lg leading-tight tracking-tight">
                      Yasser Ali
                    </p>
                    <p className="text-muted-foreground font-normal text-xs sm:text-sm tracking-tight">
                      AI Engineer
                    </p>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-auto px-3 py-2.5 text-xs sm:text-sm font-semibold whitespace-normal leading-snug"
                      onClick={handleResume}
                    >
                      Resume
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-auto px-3 py-2.5 text-xs sm:text-sm font-semibold whitespace-normal leading-snug"
                      onClick={handleWhyHireMe}
                    >
                      Why hire me?
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          <div
            ref={messagesContainerRef}
            className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-auto pt-4 px-4"
          >
            {/* Show overview centered when no messages */}
            {!hasMessages && (
              <Overview
                onResume={handleResume}
                onWhyHireMe={handleWhyHireMe}
              />
            )}

            {messages.map((message: Message, index: number) => (
              <PreviewMessage
                key={message.id}
                chatId={chatId}
                message={message}
                isLoading={isLoading && messages.length - 1 === index}
              />
            ))}

            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && <ThinkingMessage />}

            <div
              ref={messagesEndRef}
              className="shrink-0 min-w-[24px] min-h-[24px]"
            />
          </div>

          <div className="flex-shrink-0 mx-auto px-4 bg-background pb-4 md:pb-6 w-full md:max-w-3xl">
            
            <MultimodalInput
              chatId={chatId}
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              stop={stop}
              messages={messages}
              setMessages={setMessages}
              append={append}
            />
          </div>
        </div>
      </div>

      {/* Right panel */}
      {(splitScreenMode !== "none" || panelVisible) && (
        <div
          ref={rightPanelRef}
          className="flex flex-col h-full border-l bg-background transition-[width] duration-300 ease-out overflow-hidden"
          style={{ width: panelVisible ? "50%" : "0%" }}
        >
          <div className="flex-shrink-0 p-2">
            <Button
              type="button"
              size="icon"
              variant="destructive"
              className="h-7 w-7 rounded-full bg-red-500 hover:bg-red-600 border-red-500 text-white shadow-sm transition-colors"
              onClick={handleBackToChat}
              title="Close split screen"
            >
              <span className="text-xs">×</span>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {splitScreenMode === "resume" && <ResumePanel />}
            {splitScreenMode === "whyHireMe" && <WhyHireMePanel />}
          </div>
        </div>
      )}
    </div>
  );
}
