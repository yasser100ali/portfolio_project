"use client";

import { motion } from "framer-motion";

export const ResumePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="flex-1 rounded-lg border border-border overflow-hidden bg-muted">
        <iframe
          src="/resume/yasser-ali-resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </motion.div>
  );
};

