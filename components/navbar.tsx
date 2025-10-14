"use client";

import { Button } from "./ui/button";
import { GitIcon } from "./icons";

export const Navbar = () => {
  return (
    <div className="p-2 flex flex-col gap-2 items-start">
      <a href="https://github.com/yasser100ali" target="_blank" rel="noopener noreferrer" className="no-underline">
        <Button variant="outline">
          <span className="mr-2">
            <GitIcon />
          </span>
          github
        </Button>
      </a>
      <a href="/resume/yasser-ali-resume.pdf" download="yasser-ali-resume.pdf" className="no-underline">
        <Button variant="outline">
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
          Resume
        </Button>
      </a>
    </div>
  );
};
