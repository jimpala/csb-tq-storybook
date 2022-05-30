import React from "react";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import QuestionScoreCard from "./index";
import { Circle } from "@chakra-ui/react";

export default {
  component: QuestionScoreCard,
  title: "dashboard/QuestionScoreCard",
  decorators: [(Story) => <Story />],
  // padded (default), centered, fullscreen
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof QuestionScoreCard>;

export const Default: ComponentStoryObj<typeof QuestionScoreCard> = {
  args: {
    question: "How are you feeling?",
    date: "01/01/2000",
    score: 75,
    badgeColour: "black",
    badgeIcon: <Circle bg={"white"} size={6} />,
  },
};
