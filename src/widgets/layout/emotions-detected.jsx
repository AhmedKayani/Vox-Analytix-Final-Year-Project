import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards/statistics-card";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

export function EmotionsDetected() {
  return (
    <StatisticsCard
      color="red"
      icon={React.createElement(FaceFrownIcon, {
        className: "w-6 h-6 text-white",
      })}
      title="Emotions Detected"
      value="Anger"
    />
  );
}

export default EmotionsDetected;
