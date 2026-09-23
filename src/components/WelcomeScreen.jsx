import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoShs from "../assets/logo-shs.png";

const WelcomeScreen = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 40, 0],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, -35, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="relative z-10 w-[min(88vw,30rem)] border border-cyan-300/20 bg-slate-950/70 px-6 py-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-md md:px-10"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <span className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-cyan-300" />
            <span className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-violet-400" />
            <span className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-violet-400" />
            <span className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-cyan-300" />

            <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
              <span>SHS / 2026</span>
              <span className="flex items-center gap-2 text-cyan-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                System online
              </span>
            </div>

            <div className="flex flex-col items-center">
              {/* Orbiting boot mark */}
              <motion.div
                className="relative mb-8 h-24 w-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border border-cyan-300/40" />
                <div className="absolute inset-3 rounded-full border border-violet-400/50 border-dashed" />
                <motion.span
                  className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]"
                  animate={{ scale: [1, 1.7, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <div className="absolute inset-7 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-violet-500 shadow-[0_0_28px_rgba(34,211,238,0.4)]">
                  <img
                    src={logoShs}
                    alt="SHS logo"
                    className="h-full w-full rounded-full object-cover p-1"
                  />
                </div>
              </motion.div>

              <motion.p
                className="mb-3 text-xs uppercase tracking-[0.4em] text-cyan-300/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                Initializing experience
              </motion.p>
              <motion.h1
                className="text-center text-4xl font-black tracking-tight text-white md:text-5xl"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                Sabbir&apos;s <span className="text-cyan-300">Portfolio</span>
              </motion.h1>

              <div className="mt-8 w-full">
                <div className="mb-2 flex justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  <span>Loading modules</span>
                  <span>100%</span>
                </div>
                <div className="h-1 overflow-hidden bg-slate-800">
                  <motion.div
                    className="h-full bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
