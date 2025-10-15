import { motion } from "framer-motion";

interface OverviewProps {
  onResume: () => void;
}

export const Overview = ({ onResume }: OverviewProps) => {
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
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        {/* Scan lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128, 128, 128, 0.05) 2px, rgba(128, 128, 128, 0.05) 4px)',
        }} />
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800/10 rotate-45" style={{ animation: 'spin 20s linear infinite' }} />
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
            <div className="relative px-4 py-2 bg-black/30 border border-gray-500/50 text-sm font-mono text-gray-400 uppercase tracking-wider">
              <span className="relative z-10">&gt; Available for hire</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider font-mono">
            <span className="text-gray-200">
              YASSER
            </span>
            <span className="text-gray-300 ml-4">
              ALI
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
            <span className="text-xl md:text-2xl font-mono tracking-widest text-gray-400 uppercase">
              [ AI Engineer ]
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          </div>

        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-mono pt-8"
        >
          <span className="text-gray-500">&gt;_</span> Building intelligent AI systems that
          <span className="text-gray-300 font-semibold"> maximize efficiency</span> and
          <span className="text-gray-300 font-semibold"> drive innovation</span>
        </motion.p>

      </div>
    </motion.div>
  );
};
