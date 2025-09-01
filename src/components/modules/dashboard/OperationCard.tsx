import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ActionItem = {
  title: string;
  description: string;
  icon: React.ElementType; 
  onClick: () => void;
};

export default function OperationCard({
  title,
  description,
  icon: Icon,
  onClick,
}: ActionItem) {
  return (
    <Card className="w-full md:w-64 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-md">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <Button
          onClick={onClick}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Proceed
          <ArrowRight size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}
