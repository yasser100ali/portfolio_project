import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface OverviewProps {
  onResume: () => void;
  onWhyHireMe: () => void;
}

export const Overview = ({ onResume, onWhyHireMe }: OverviewProps) => {
  return (
    <motion.div
      key="overview"
      className="flex items-center justify-center flex-1 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Retro grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        {/* Scan lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
        }} />
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/20 rotate-45" style={{ animation: 'spin 20s linear infinite' }} />
      </div>

      <div className="max-w-4xl text-center space-y-10 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="relative px-4 py-2 bg-black/50 border-2 border-cyan-500/50 text-sm font-mono text-cyan-400 uppercase tracking-wider clip-corner">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
              <span className="relative z-10">&gt; AVAILABLE_FOR_HIRE</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider font-mono">
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]" style={{ textShadow: '0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)' }}>
              YASSER
            </span>
            <span className="text-green-400 ml-4 drop-shadow-[0_0_30px_rgba(0,255,0,0.5)]" style={{ textShadow: '0 0 10px rgba(0,255,0,0.8), 0 0 20px rgba(0,255,0,0.6), 0 0 30px rgba(0,255,0,0.4)' }}>
              ALI
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
            <span className="text-xl md:text-2xl font-mono tracking-widest text-green-400 uppercase" style={{ textShadow: '0 0 10px rgba(0,255,0,0.8)' }}>
              [ AI ENGINEER ]
            </span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-mono"
        >
          <span className="text-cyan-400">&gt;_</span> Building intelligent AI systems that
          <span className="text-cyan-400 font-bold"> maximize efficiency</span> and
          <span className="text-green-400 font-bold"> drive innovation</span>
        </motion.p>

        {/* Stats or Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto py-8"
        >
          {[
            { number: "05", label: "YEARS_EXP", unit: "YRS" },
            { number: "50", label: "PROJECTS", unit: "+" },
            { number: "99", label: "SUCCESS", unit: "%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="relative border-2 border-cyan-500/30 bg-black/30 p-4 clip-corner group hover:border-green-400/50 transition-all"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:border-green-400 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 group-hover:border-green-400 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 group-hover:border-green-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 group-hover:border-green-400 transition-colors" />
              <div className="text-3xl md:text-4xl font-bold font-mono text-cyan-400 group-hover:text-green-400 transition-colors" style={{ textShadow: '0 0 10px currentColor' }}>
                {stat.number}<span className="text-lg">{stat.unit}</span>
              </div>
              <div className="text-xs text-gray-400 mt-2 font-mono tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <Button
            size="lg"
            onClick={onWhyHireMe}
            className="relative w-full sm:w-auto text-base font-mono font-bold h-14 px-8 bg-cyan-500/20 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all uppercase tracking-wider group overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
            <span className="relative z-10">&gt; WHY_HIRE_ME</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onResume}
            className="relative w-full sm:w-auto text-base font-mono font-bold h-14 px-8 bg-green-500/20 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all uppercase tracking-wider group overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400" />
            <span className="relative z-10 flex items-center">
              <span className="mr-2">↓</span>
              DOWNLOAD_RESUME
            </span>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-wider">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
