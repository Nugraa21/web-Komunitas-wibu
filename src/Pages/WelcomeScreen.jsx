import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

// =====================
// TYPEWRITER EFFECT
// =====================
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono text-teal-700 tracking-wider">
      {displayText}
      <span className="animate-pulse text-cyan-500">|</span>
    </span>
  );
};

// =====================
// AURORA BACKGROUND
// =====================
const AuroraBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50 to-cyan-100" />

    {/* Blue Glow */}
    <div className="absolute w-[600px] h-[600px] bg-cyan-300 rounded-full blur-[150px] opacity-40 top-[-100px] left-[-80px]" />

    {/* Aqua Glow */}
    <div className="absolute w-[550px] h-[550px] bg-teal-300 rounded-full blur-[160px] opacity-30 bottom-[-50px] right-[-60px]" />

    {/* Floating white shine */}
    <div className="absolute w-[350px] h-[350px] bg-white rounded-full blur-[120px] opacity-40 top-1/3 left-1/2 -translate-x-1/2 animate-pulse" />
  </div>
);

// =====================
// MAIN WELCOME SCREEN
// =====================
const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progress Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Close screen when done
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => onLoadingComplete?.(), 800);
      }, 300);
    }
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white/80 backdrop-blur-xl text-gray-900 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
            transition: { duration: 0.7 },
          }}
        >
          <AuroraBackground />

          <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-10 max-w-3xl mx-auto"
            >
              {/* PROGRESS BAR */}
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="text-lg text-teal-700 font-medium">
                  Loading... {progress}%
                </div>

                <div className="w-full h-3 bg-white/60 backdrop-blur-lg rounded-full overflow-hidden shadow-inner border border-teal-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut", duration: 0.4 }}
                  />
                </div>
              </div>

              {/* WEBSITE BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="" // Ganti dengan link website kamu
                  className="inline-flex items-center gap-3 px-7 py-3 bg-white/70 backdrop-blur-lg border-2 border-teal-200 rounded-full shadow-lg hover:scale-105 transition"
                >
                  <Globe className="text-cyan-600 w-6 h-6" />
                  <TypewriterEffect text="Komunitas wibu utdi" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
