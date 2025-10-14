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
      className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-lg"
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
            <div className="relative px-3 py-1 border border-gray-600 bg-black/50 font-mono font-bold text-gray-300 tracking-wider">
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
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              Projects
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
                className="border border-gray-600 hover:border-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-all text-gray-400"
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
                className="bg-white text-black hover:bg-gray-100 font-mono font-medium tracking-wide transition-all border border-gray-300"
              >
                <span className="flex items-center">
                  <span className="mr-1">↓</span>
                  Resume
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
