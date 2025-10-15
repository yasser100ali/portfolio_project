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
            <a href="/" className="no-underline">
              <div className="relative px-3 py-1 border border-gray-600 bg-black/50 font-mono font-bold text-gray-300 tracking-wider hover:border-gray-400 hover:bg-gray-800/50 transition-all cursor-pointer">
                [YA]
              </div>
            </a>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-6"
          >
            <a
              href="/resume"
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              Resume
            </a>
            <a 
              href="/why-hire-me" 
              className="text-sm font-mono font-medium text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
            >
              Why hire me
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
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
