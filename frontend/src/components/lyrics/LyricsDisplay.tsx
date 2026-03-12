import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LyricsContent } from "./LyricsContent";

export const LyricsDisplay = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">歌詞</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <LyricsContent />
      </CardContent>
    </Card>
  );
};
