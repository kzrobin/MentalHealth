import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PreviewPanel from "./components/PreviewPanel";
import BreathingExercise from "./components/BreathingExercise";
import { moodData } from "./data/moodData";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const moodBackgrounds = {
  happy: "bg-gradient-to-br from-yellow-50 to-orange-100",
  stressed: "bg-gradient-to-br from-orange-50 to-rose-100",
  sad: "bg-gradient-to-br from-blue-50 to-indigo-100",
  burnout: "bg-gradient-to-br from-rose-50 to-pink-200",
};

export default function HomePage() {
  const [mood, setMood] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-500
        flex flex-col items-center justify-start
        ${mood ? moodBackgrounds[mood] : "bg-gradient-to-br from-slate-50 to-slate-100"}
      `}
    >
      <Navbar />
      <div className="max-w-xl w-full">
        <header className="text-center mb-8">
          <p className="text-muted-foreground text-lg">
            Visualizing mental health through calm, interactive design
          </p>
        </header>

        <div className="max-w-xl w-full mb-6">
          <MoodSelector onMoodSelect={setMood} />
        </div>

        <div className="max-w-xl w-full grid md:grid-cols-2 gap-6 items-start">
          <PreviewPanel mood={mood} moodData={moodData} />

          <div className="my-auto">
            <Button
              onClick={() => setSheetOpen(true)}
              className="px-6 my-auto text-accent-foreground text-xl bg-blue-500 text-white"
              variant={"outline"}
            >
              Breathing Exercise
            </Button>
          </div>
        </div>

        {/* Breathing Exercise Sidebar */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild></SheetTrigger>
          <SheetContent
            side="right"
            className="w-96 bg-white/90 backdrop-blur-md shadow-xl p-6"
          >
            <SheetHeader>
              <SheetTitle>Breathing Exercise</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <BreathingExercise />
            </div>
            <SheetClose asChild>
              <Button className="mt-auto mb-2 w-full">Close</Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
