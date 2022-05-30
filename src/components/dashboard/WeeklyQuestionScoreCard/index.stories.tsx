import React from "react";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import WeeklyQuestionScoreCard from "./index";
import { Circle } from "@chakra-ui/react";

export default {
  component: WeeklyQuestionScoreCard,
  title: "dashboard/WeeklyQuestionScoreCard",
  decorators: [(Story) => <Story />],
  // padded (default), centered, fullscreen
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof WeeklyQuestionScoreCard>;

export const Default: ComponentStoryObj<typeof WeeklyQuestionScoreCard> = {
  args: {
    minW: "lg",
    badgeColour: "black",
    badgeIcon: <Circle size={8} bg={"white"} />,
    title: "Mental Wellbeing",
    question: "How has your mental wellbeing been?",
    responses: [
      {
        percentage: 40,
        answer: "Very good",
      },
      {
        percentage: 30,
        answer: "Good",
      },
      {
        percentage: 20,
        answer: "Neutral",
      },
      {
        percentage: 5,
        answer: "Bad",
      },
      {
        percentage: 5,
        answer: "Very bad",
      },
    ],
  },
};
