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
      className="flex items-center justify-center flex-1 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl text-center space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            Yasser Ali
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm">by</span>
            <span className="text-base font-medium">Yasser Ali</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="h-px bg-border/40 max-w-xs mx-auto"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-muted-foreground text-base md:text-lg"
        >
          Production-grade multi-agent AI systems for legal tech
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={onResume}
            className="w-full text-base font-semibold h-12"
          >
            Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onWhyHireMe}
            className="w-full text-base font-semibold h-12"
          >
            Why hire me?
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
