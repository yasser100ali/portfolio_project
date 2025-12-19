"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface VoiceAssistantOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Point {
  x: number;
  y: number;
  z: number;
}

export function VoiceAssistantOverlay({ isOpen, onClose }: VoiceAssistantOverlayProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const pointCount = 200;

  useEffect(() => {
    // Generate points on a sphere using Fibonacci lattice for even distribution
    const newPoints: Point[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < pointCount; i++) {
      const y = 1 - (i / (pointCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = (2 * Math.PI * i) / goldenRatio; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      newPoints.push({ x, y, z });
    }
    setPoints(newPoints);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
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

          {/* Atomic Sphere Container */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-64 h-64 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d", perspective: "800px" }}
            >
              {points.map((point, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full"
                  style={{
                    transform: `translate3d(${point.x * 120}px, ${point.y * 120}px, ${point.z * 120}px)`,
                    opacity: 0.4 + (point.z + 1) / 2 * 0.6, // Higher opacity for points in front
                  }}
                />
              ))}
            </motion.div>
            
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="mt-16 text-center space-y-3 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-light text-white tracking-[0.2em] uppercase"
            >
              Tap to start speaking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/40 font-mono text-sm tracking-widest"
            >
              Speak naturally
            </motion.p>
          </div>

          {/* Bottom End Button */}
          <div className="absolute bottom-20 z-10">
             <motion.div
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
               whileTap={{ scale: 0.95 }}
               onClick={onClose}
               className="bg-white/5 border border-white/10 px-12 py-4 rounded-full cursor-pointer transition-all shadow-2xl flex items-center gap-3 group"
             >
               <div className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:shadow-[0_0_8px_rgba(239,68,68,1)] transition-all" />
               <span className="text-white/60 font-mono tracking-[0.3em] uppercase text-[10px]">End Session</span>
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
