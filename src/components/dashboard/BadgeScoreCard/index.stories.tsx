import React from "react";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import BadgeScoreCard from "./index";
import { Circle } from "@chakra-ui/react";

export default {
  component: BadgeScoreCard,
  title: "dashboard/BadgeScoreCard",
  decorators: [(Story) => <Story />],
  // padded (default), centered, fullscreen
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
    },
  },
} as ComponentMeta<typeof BadgeScoreCard>;

export const Default: ComponentStoryObj<typeof BadgeScoreCard> = {
  args: {
    badgeColour: "black",
    info: {
      title: "Mental wellbeing",
      score: 70,
      scoreChange: 5,
    },
    badgeIcon: <Circle bg={"white"} size={16} />,
  },
};

export const BadgeLeft: ComponentStoryObj<typeof BadgeScoreCard> = {
  args: {
    badgeColour: "black",
    info: {
      title: "Mental wellbeing",
      score: 70,
      scoreChange: 5,
    },
    badgeIcon: <Circle bg={"white"} size={16} />,
    badgeSide: "LEFT",
  },
};

export const MultipleScores: ComponentStoryObj<typeof BadgeScoreCard> = {
  args: {
    badgeColour: "black",
    info: [{
      title: "Mental wellbeing",
      score: 70,
      scoreChange: 5,
    }, {
      title: "Something else",
      score: 50,
      scoreChange: 10,
    }],
    badgeIcon: <Circle bg={"white"} size={16} />,
    badgeSide: "LEFT",
  },
};
