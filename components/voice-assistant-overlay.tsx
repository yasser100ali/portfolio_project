"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";

interface VoiceAssistantOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAssistantOverlay({ isOpen, onClose }: VoiceAssistantOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full h-12 w-12"
            >
              <XIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* Animated 3D-like Sphere */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Outer pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border border-white/10 rounded-full"
            />
            
            {/* Middle pulsing ring */}
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4 border border-white/20 rounded-full"
            />

            {/* Core "Dots" Sphere */}
            <div className="relative w-40 h-40">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: 80,
                    y: 80,
                  }}
                  animate={{
                    x: 80 + Math.cos((i * 9 * Math.PI) / 180) * (60 + Math.sin(i + Math.PI) * 20),
                    y: 80 + Math.sin((i * 9 * Math.PI) / 180) * (60 + Math.cos(i + Math.PI) * 20),
                    scale: [1, 1.5, 0.8, 1.2, 1],
                    opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
              
              {/* Inner floating dots */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`inner-${i}`}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  initial={{
                    x: 80,
                    y: 80,
                  }}
                  animate={{
                    x: 80 + Math.cos((i * 18 * Math.PI) / 180) * (30 + Math.sin(i) * 15),
                    y: 80 + Math.sin((i * 18 * Math.PI) / 180) * (30 + Math.cos(i) * 15),
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}

              {/* Central glowing core */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-14 bg-white/20 blur-xl rounded-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-12 text-center space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-medium text-white tracking-tight"
            >
              Tap to start speaking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500"
            >
              Speak naturally
            </motion.p>
          </div>

          {/* Bottom Stop Button (Tap to start speaking area) */}
          <div className="absolute bottom-20">
             <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={onClose}
               className="bg-white/5 border border-white/10 px-10 py-4 rounded-full cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center gap-2 group"
             >
               <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse" />
               <span className="text-white/70 font-medium tracking-wide uppercase text-xs">End Session</span>
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

