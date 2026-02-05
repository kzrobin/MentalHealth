import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const moods = [
  { key: "happy", label: "Happy", emoji: "😊" },
  { key: "stressed", label: "Stressed", emoji: "😟" },
  { key: "sad", label: "Sad", emoji: "😔" },
  { key: "burnout", label: "Burnout", emoji: "😵" },
];

export default function MoodSelector({ onMoodSelect }) {
  return (
    <Card className="bg-white/60 backdrop-blur-md shadow-md border-none rounded-b-[0px]">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          How are you feeling today?
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {moods.map((mood) => (
            <Button
              key={mood.key}
              variant="outline"
              onClick={() => onMoodSelect(mood.key)}
              className="
                rounded-full px-5 py-2
                text-base font-medium
                transition-all duration-300
                hover:scale-105 hover:shadow-md
                bg-white/70
              "
            >
              <span className="mr-2 text-lg">{mood.emoji}</span>
              {mood.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
