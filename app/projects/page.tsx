"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitIcon } from "@/components/icons";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Building agentic systems and production-grade AI solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Projects Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="text-blue-400">Featured Projects</span>
            </motion.h2>

            <div className="grid gap-8">
              {/* Data Analyst Agent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Data Analyst Agent</h3>
                  <span className="text-gray-500 text-sm">Dec 2024 - July 2025</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  CFO-endorsed <strong className="text-white">Data Analyst AI and RAG Agent</strong> built at Kaiser Permanente to upload data, query in natural language, and generate automated, evidence-based reports. Reduced time to analysis from <strong className="text-white">hours to &amp;lt;2 minutes&amp;gt;</strong>, scaled to analyze 10+ Excel pages in real-time.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Engineered evaluation pipeline reducing hallucination rates by <strong className="text-gray-300">60%+</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Full-stack delivery: Python/ML backend + UI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Random Forest models for hospital bottleneck prediction</span>
                  </li>
                </ul>

                {/* Open Source Version Divider */}
                <div className="relative py-4 mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-black/50 px-4 text-xs text-blue-400 font-mono uppercase tracking-wider border border-gray-800 rounded-full backdrop-blur-sm">Open Source Initiative</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-md font-bold text-white flex items-center gap-2">
                      Atlas Analyst Agent
                      <span className="text-xs font-normal text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">Late Nov 2025</span>
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Currently building an open-source, free version of the enterprise agent. Features file uploads (CSV/Excel/PDF), real-time streaming analysis, and advanced visualization capabilities.
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="https://dataanalyst-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="h-8 text-xs gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Demo
                      </Button>
                    </a>
                    <a href="https://github.com/yasser100ali/data_analyst" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="h-8 text-xs gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                        <GitIcon />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* AI Medical Assistant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">AI Medical Assistant</h3>
                  <span className="text-gray-500 text-sm">Oct 2025</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Engineered a <strong className="text-white">RAG-based patient portal</strong> (Next.js, Python) that analyzes user symptoms and allows providers to instantly query medical records, significantly reducing chart review time.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://www.aiscribe.cafe/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </Button>
                  </a>
                  <a href="https://github.com/yasser100ali/ai_medical_assistant" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <GitIcon />
                      GitHub
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Atlas Law */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Atlas Law</h3>
                  <span className="text-gray-500 text-sm">Sep 2025</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Engineered a <strong className="text-white">multi-agent legal platform</strong> (FastAPI, Next.js) that automates intake via <strong className="text-white">RAG-based case analysis</strong>, generating a weighted &quot;Case Strength Score&quot; (Based on Liability, Evidence and Damages) to prioritize high-value claims.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://www.atlasai.legal/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </Button>
                  </a>
                  <a href="https://github.com/yasser100ali/law-ai" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <GitIcon />
                      GitHub
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Reinforcement Learning Snake Game */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Reinforcement Learning Snake Game</h3>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Implemented a <strong className="text-white">Deep Q-Learning agent</strong> using PyTorch that learns to play Snake through reinforcement learning. The agent uses an 11-state input (danger detection, direction, food location) and a 256-node hidden layer neural network to predict optimal moves.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Experience replay with 100K memory buffer for stable learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Epsilon-greedy exploration strategy balancing exploration/exploitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Bellman equation implementation for Q-value updates (γ = 0.9)</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <a href="https://snake-game-ai-backend.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </Button>
                  </a>
                  <a href="https://github.com/yasser100ali/SnakeGameAI" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300">
                      <GitIcon />
                      GitHub
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center pb-12"
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

