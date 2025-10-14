"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { GitIcon } from "./icons";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b-2 border-cyan-500/30 bg-black/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center relative"
          >
            <div className="relative px-3 py-1 border-2 border-cyan-400 bg-black/50 font-mono font-bold text-cyan-400 tracking-wider" style={{ textShadow: '0 0 10px rgba(0,255,255,0.8)' }}>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-400" />
              [YA]
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-6"
          >
            <a 
              href="#home" 
              className="text-sm font-mono font-medium text-green-400 hover:text-cyan-400 transition-colors tracking-wider uppercase"
              style={{ textShadow: '0 0 5px currentColor' }}
            >
              [HOME]
            </a>
            <a 
              href="#about" 
              className="text-sm font-mono font-medium text-green-400 hover:text-cyan-400 transition-colors tracking-wider uppercase"
              style={{ textShadow: '0 0 5px currentColor' }}
            >
              [ABOUT]
            </a>
            <a 
              href="#skills" 
              className="text-sm font-mono font-medium text-green-400 hover:text-cyan-400 transition-colors tracking-wider uppercase"
              style={{ textShadow: '0 0 5px currentColor' }}
            >
              [SKILLS]
            </a>
            <a 
              href="#projects" 
              className="text-sm font-mono font-medium text-green-400 hover:text-cyan-400 transition-colors tracking-wider uppercase"
              style={{ textShadow: '0 0 5px currentColor' }}
            >
              [PROJECTS]
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <a 
              href="https://github.com/yasser100ali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button 
                variant="ghost" 
                size="icon"
                className="border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all text-cyan-400"
              >
                <GitIcon />
              </Button>
            </a>
            <a 
              href="/resume/yasser-ali-resume.pdf" 
              download="yasser-ali-resume.pdf"
              className="no-underline"
            >
              <Button
                size="sm"
                className="relative bg-green-500/20 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono font-bold uppercase tracking-wider transition-all"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-400" />
                <span className="flex items-center">
                  <span className="mr-1">↓</span>
                  CV
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
