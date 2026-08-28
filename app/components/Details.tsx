import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion";
import { cn } from "~/lib/utils";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const isGood = score > 69;
  const isAverage = !isGood && score > 39;

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-1 px-2 py-1 rounded-full",
        isGood && "bg-green-100",
        isAverage && "bg-yellow-100",
        !isGood && !isAverage && "bg-red-100",
      )}
    >
      <img
        src={isGood ? "/icons/check.svg" : "/icons/warning.svg"}
        alt={isGood ? "Check" : "Warning"}
        className="w-4 h-4"
      />
      <p
        className={cn(
          "text-sm font-medium",
          isGood && "text-green-600",
          isAverage && "text-yellow-600",
          !isGood && !isAverage && "text-red-600",
        )}
      >
        {score}/100
      </p>
    </div>
  );
};

interface CategoryHeaderProps {
  title: string;
  categoryScore: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  categoryScore,
}) => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <p className="text-xl font-semibold">{title}</p>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation: string;
}

interface CategoryContentProps {
  tips: Tip[];
}

const CategoryContent: React.FC<CategoryContentProps> = ({ tips }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                tip.type === "good" ? "/icons/check.svg" : "/icons/cross.svg"
              }
              alt={tip.type === "good" ? "Check" : "Cross"}
              className="w-5 h-5"
            />
            <p className="text-lg text-gray-700">{tip.tip}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-2 rounded-2xl p-4 border",
              tip.type === "good"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-yellow-50 border-yellow-200 text-yellow-700",
            )}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src={
                  tip.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={tip.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5"
              />
              <p className="text-lg font-semibold">{tip.tip}</p>
            </div>
            <p>{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion allowMultiple>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
