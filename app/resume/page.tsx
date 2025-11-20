"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header with download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-gray-200">
            Resume
          </h1>
          <a 
            href="/resume/yasser-ali-resume.pdf" 
            download="yasser-ali-resume.pdf"
            className="no-underline"
          >
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-100 font-mono font-medium tracking-wide transition-all border border-gray-300"
            >
              <svg 
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </Button>
          </a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="relative w-full aspect-[8.5/11]">
            <iframe
              src="/resume/yasser-ali-resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-full"
              style={{ border: 'none' }}
              title="Yasser Ali Resume"
            />
          </div>
        </motion.div>

        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a 
            href="/"
            className="text-sm font-mono text-gray-400 hover:text-gray-200 transition-colors"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}

