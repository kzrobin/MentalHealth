import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function PreviewPanel({ mood, moodData }) {
  return (
    <Card className="bg-white/60 backdrop-blur-md shadow-md border-none rounded-t-[0px]">
      <CardContent className="p-6 flex items-center justify-center min-h-[140px]">
        <AnimatePresence mode="wait">
          {!mood ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-muted-foreground text-sm text-center"
            >
              Select a mood to see a gentle insight.
            </motion.p>
          ) : (
            <motion.p
              key={mood} // key important for AnimatePresence to detect change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center text-base font-medium"
            >
              {moodData[mood].text}
            </motion.p>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
