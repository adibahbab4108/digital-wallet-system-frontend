"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: Date;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-primary" />,
  title = "Featured",
  description = "Discover amazing content",
  date = new Date(),
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative max-w-2xl flex flex-col justify-between select-none rounded-xl border-2 bg-muted/50 backdrop-blur-sm px-4 py-3 transition-all duration-700 ",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-lg">{description}</p>
      <p className="text-muted-foreground">{date.toLocaleDateString()}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayAboutCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "hover:-translate-y-10 ",
      title: "Safer",
      description:
        "Your security is our priority—protected by encryption, biometrics, and real-time fraud detection",
        titleClassName:"text-primary"
      },
      {
        className:
        " hover:-translate-y-1 ",
        title: "Faster",
        description:
        "Experience lightning-fast transactions, from transfers to bill payments, all completed in seconds",
        titleClassName:"text-indigo-500"
    },
    {
      className:
        "hover:translate-y-10",
      title: "Easier",
      description:
        "Manage your money effortlessly with an intuitive interface and seamless navigation, designed for everyone",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid place-items-center opacity-100 animate-in fade-in-0 duration-700 gap-4">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
