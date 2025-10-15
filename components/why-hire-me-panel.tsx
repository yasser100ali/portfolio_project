"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export const WhyHireMePanel = () => {
  const skills = [
    { name: "AI_ML_ENGINEERING", icon: ">" },
    { name: "LLM_INTEGRATION", icon: ">" },
    { name: "PYTHON_FASTAPI", icon: ">" },
    { name: "REACT_NEXTJS", icon: ">" },
    { name: "SYSTEM_ARCHITECTURE", icon: ">" },
    { name: "PRODUCTION_AI", icon: ">" },
    { name: "MULTI_AGENT_SYS", icon: ">" },
    { name: "API_DEVELOPMENT", icon: ">" }
  ];

  const highlights = [
    {
      icon: "[01]",
      title: "PRODUCTION_GRADE_AI",
      description: "Scalable AI systems handling real-world complexity"
    },
    {
      icon: "[02]",
      title: "FULL_STACK_EXPERTISE",
      description: "Modern tech stack from frontend to backend"
    },
    {
      icon: "[03]",
      title: "MULTI_AGENT_AI",
      description: "Complex AI architectures and orchestration"
    },
    {
      icon: "[04]",
      title: "UX_OPTIMIZATION",
      description: "Emphasis on user experience and design"
    },
    {
      icon: "[05]",
      title: "SOLUTION_ARCHITECT",
      description: "Transform requirements into working solutions"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col p-8 overflow-y-auto bg-black relative"
    >
      {/* Scan lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128, 128, 128, 0.05) 2px, rgba(128, 128, 128, 0.05) 4px)',
      }} />
      
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 relative z-10"
      >
        <div className="border border-gray-700 bg-black/50 p-4 relative">
          <h2 className="text-2xl font-bold mb-2 font-mono text-gray-200 tracking-wide">
            Why Hire Me
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            Expertise and capabilities overview
          </p>
        </div>
      </motion.div>
      
      <div className="space-y-6 relative z-10">
        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-mono font-semibold text-gray-300 tracking-wide">
            About Me
          </h3>
          <div className="p-4 bg-black/50 border-l-2 border-gray-600 font-mono text-sm">
            <p className="text-gray-400 leading-relaxed">
              Crafting intelligent AI solutions that empower teams to achieve unprecedented 
              productivity and innovation. Turning complex challenges into seamless opportunities 
              with cutting-edge technology and elegant design.
            </p>
          </div>
        </motion.section>

        {/* Key Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-mono font-semibold text-gray-300 tracking-wide">
            Key Skills
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="relative border border-gray-700 bg-black/30 px-3 py-2 hover:border-gray-500 hover:bg-gray-900/50 transition-all group"
              >
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{skill.icon}</span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors tracking-wide">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I Bring */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-mono font-semibold text-gray-300 tracking-wide">
            What I Bring
          </h3>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative border border-gray-700 bg-black/30 p-3 hover:border-gray-500 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-gray-500 group-hover:text-gray-400 transition-colors font-bold">{highlight.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-gray-300 group-hover:text-gray-200 transition-colors text-sm mb-1">{highlight.title}</h4>
                    <p className="text-xs text-gray-500 font-mono">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Connect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-mono font-semibold text-gray-300 tracking-wide">
            Connect
          </h3>
          <div className="flex flex-col gap-2">
            <Link href="https://github.com/yasser100ali" target="_blank">
              <Button 
                variant="outline" 
                className="w-full justify-start border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 bg-black/30 transition-all group font-mono"
              >
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors text-sm tracking-wide">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yasser-a-a7146795/" target="_blank">
              <Button 
                variant="outline" 
                className="w-full justify-start border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 bg-black/30 transition-all group font-mono"
              >
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors text-sm tracking-wide">LinkedIn</span>
              </Button>
            </Link>
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 font-mono font-medium tracking-wide transition-all border border-gray-300"
            >
              Contact Me
            </Button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

