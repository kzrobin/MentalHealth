import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  { name: "Inhale", duration: 4000, scale: 1.7 },
  { name: "Hold", duration: 4000, scale: 1.7 },
  { name: "Exhale", duration: 6000, scale: 0.8 },
];

export default function BreathingExercise({ sheetOpen = false }) {
  const [phase, setPhase] = useState("Ready");
  const [running, setRunning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const stopRef = useRef(false);
  const circleRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let timeout;
    async function runBreathing() {
      setRunning(true);
      stopRef.current = false;

      while (!stopRef.current) {
        for (const p of phases) {
          if (stopRef.current) break;

          setPhase(p.name);

          if (circleRef.current) {
            circleRef.current.style.transform = `scale(${p.scale})`;
            circleRef.current.style.transition = `transform ${p.duration}ms cubic-bezier(.2,.9,.3,1)`;
          }

          await new Promise(
            (res) => (timeoutRef.current = setTimeout(res, p.duration)),
          );
        }
      }

      // Reset
      setPhase("Ready");
      if (circleRef.current) circleRef.current.style.transform = "scale(1)";
      setRunning(false);
    }

    if (running) runBreathing();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [running]);

  const start = () => {
    if (!running) setRunning(true);
  };
  const stop = () => {
    stopRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPhase("Ready");
    if (circleRef.current) {
      circleRef.current.style.transform = "scale(1)";
      circleRef.current.style.transition = "transform 300ms ease-out";
    }
    setRunning(!running);
  };

  return (
    <div className="relative flex flex-col md:flex-col gap-6 items-center justify-center mt-6">
      {/* Breathing Circle */}
      <div className="breath-stage w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-200 shadow-lg relative z-10">
        <div
          ref={circleRef}
          className="breath-circle w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-indigo-300 to-cyan-400 flex items-center justify-center font-bold text-white text-lg"
        >
          {phase}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 z-10">
        {/* <div className="font-medium text-center md:text-left">{phase}</div> */}
        <div className="flex gap-3 justify-center md:justify-start">
          {!running ? (
            <Button
              onClick={start}
              disabled={running}
              variant="outline"
              className="bg-green-500 text-white hover:bg-green-600 border-green-500"
            >
              Start
            </Button>
          ) : (
            <Button
              onClick={stop}
              disabled={!running}
              variant="outline"
              className="bg-red-500 text-white hover:bg-red-600 border-red-500"
            >
              Stop
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-1.5 items-center">
        <p className="text-xs text-muted-foreground my-2">
          <span className="font-bold">Pattern:</span> Inhale 4s • Hold 4s • Exhale 6s
        </p>
        <Button onClick={() => setSidebarOpen(true)} variant="secondary">
          Info
        </Button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white/90 backdrop-blur-md shadow-xl p-6 flex flex-col z-20"
          >
            <h2 className="text-lg font-bold mb-4">Breathing Tips</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Sit comfortably and relax your shoulders.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Focus on slow, deep breaths.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              3. Repeat the inhale-hold-exhale cycle for calmness.
            </p>
            <Button
              onClick={() => setSidebarOpen(false)}
              className="mt-auto mb-2 w-full bg-red-500 text-white hover:bg-red-600"
            >
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
