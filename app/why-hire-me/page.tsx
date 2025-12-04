"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WhyHireMePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yasser100ali@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const skills = [
    { 
      name: "AI & ML Engineering", 
      icon: ">",
      description: "Building production-grade AI systems with LLMs, RAG, and machine learning models"
    },
    { 
      name: "Full-Stack Development", 
      icon: ">",
      description: "React, Next.js, TypeScript on frontend; Python, FastAPI on backend"
    },
    { 
      name: "Multi-Agent Systems", 
      icon: ">",
      description: "Designing and implementing complex AI agent orchestration and workflows"
    },
    { 
      name: "System Architecture", 
      icon: ">",
      description: "Scalable, maintainable systems with clean code and best practices"
    },
    { 
      name: "API Development", 
      icon: ">",
      description: "RESTful APIs, real-time systems, and integration expertise"
    },
    { 
      name: "UX/UI Design", 
      icon: ">",
      description: "Creating beautiful, intuitive interfaces with modern design principles"
    }
  ];

  const valueProps = [
    {
      emoji: "🚀",
      title: "Immediate Impact",
      points: [
        "Hit the ground running with minimal onboarding",
        "Self-sufficient problem solver who unblocks themselves",
        "Ship features from day one"
      ]
    },
    {
      emoji: "🎯",
      title: "Business-Focused",
      points: [
        "Understand and prioritize what moves the business forward",
        "Balance technical excellence with practical delivery",
        "Communicate clearly with technical and non-technical stakeholders"
      ]
    },
    {
      emoji: "⚡",
      title: "Modern Stack Expert",
      points: [
        "Deep expertise in the latest AI and web technologies",
        "Follow best practices and industry standards",
        "Always learning and staying current"
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative px-4 py-2 bg-black/30 border border-gray-500/50 text-sm font-mono text-gray-400 uppercase tracking-wider">
              <span className="relative z-10">&gt; Why Choose Me</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wider font-mono">
            <span className="text-gray-200">AI Engineer</span>
            <br />
            <span className="text-gray-300">Who Delivers</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-gray-500">&gt;_</span> I build intelligent systems that solve real problems. 
            From concept to production, I deliver{" "}
            <span className="text-gray-200 font-semibold">scalable AI solutions</span> with{" "}
            <span className="text-gray-200 font-semibold">beautiful interfaces</span>.
          </p>
        </motion.div>

        {/* Core Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-200 mb-3 tracking-wide">
              [ Core Expertise ]
            </h2>
            <p className="text-gray-500 font-mono text-sm">
              Technologies and capabilities I bring to your team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="border border-gray-700 bg-black/50 p-5 hover:border-gray-500 hover:bg-gray-900/50 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors font-mono text-lg mt-1">
                    {skill.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-gray-200 group-hover:text-white transition-colors text-lg mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Value Propositions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-200 mb-3 tracking-wide">
              [ Why This Matters ]
            </h2>
            <p className="text-gray-500 font-mono text-sm">
              The value I bring to your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="border border-gray-700 bg-black/50 p-6 hover:border-gray-500 transition-all"
              >
                <div className="text-4xl mb-4">{prop.emoji}</div>
                <h3 className="font-mono font-bold text-gray-200 text-lg mb-4">
                  {prop.title}
                </h3>
                <ul className="space-y-2">
                  {prop.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm font-mono">
                      <span className="text-gray-500 mt-1">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center border-t border-gray-800 pt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-200 mb-6">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-gray-400 font-mono mb-8 max-w-2xl mx-auto">
              Ready to add an AI engineer who can turn your vision into reality?
              Let&apos;s talk about how I can help your team succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://github.com/yasser100ali" target="_blank">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 bg-black/30 transition-all font-mono px-8"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/yasser-a-a7146795/" target="_blank">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 bg-black/30 transition-all font-mono px-8"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </Button>
              </Link>
              <Button
                onClick={copyEmail}
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-mono font-medium px-8 tracking-wide transition-all border border-gray-300"
              >
                {copied ? "Copied!" : "yasser100ali@gmail.com"}
              </Button>
            </div>
          </motion.section>
      </div>
    </div>
  );
}

