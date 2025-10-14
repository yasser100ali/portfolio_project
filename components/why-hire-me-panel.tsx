"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export const WhyHireMePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col p-6 overflow-y-auto"
    >
      <h2 className="text-2xl font-bold mb-6">Why Hire Me?</h2>
      
      <div className="space-y-6">
        {/* About Me */}
        <section>
          <h3 className="text-xl font-semibold mb-3">About Me</h3>
          <p className="text-muted-foreground leading-relaxed">
            I craft intelligent AI solutions that empower teams to achieve unprecedented 
            productivity and innovation, turning complex challenges into seamless opportunities.
          </p>
        </section>

        {/* Key Skills */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Key Skills</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "AI/ML Engineering",
              "LLM Integration",
              "Python & FastAPI",
              "React & Next.js",
              "System Architecture",
              "Production AI Systems",
              "Multi-Agent Systems",
              "API Development"
            ].map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 bg-muted rounded-lg text-sm text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* What I Bring */}
        <section>
          <h3 className="text-xl font-semibold mb-3">What I Bring</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Production-grade AI systems that scale</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Full-stack development with modern technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Experience with multi-agent AI architectures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Strong focus on user experience and design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Ability to translate complex requirements into working solutions</span>
            </li>
          </ul>
        </section>

        {/* Connect */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://github.com/yasser100ali" target="_blank">
              <Button variant="outline" className="w-full justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yasser-ali" target="_blank">
              <Button variant="outline" className="w-full justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

