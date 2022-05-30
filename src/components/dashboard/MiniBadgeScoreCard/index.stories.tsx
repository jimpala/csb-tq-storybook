import React from "react";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import MiniBadgeScoreCard from "./index";
import { Circle } from "@chakra-ui/react";

export default {
  component: MiniBadgeScoreCard,
  title: "dashboard/MiniBadgeScoreCard",
  decorators: [(Story) => <Story />],
  // padded (default), centered, fullscreen
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
    },
  },
} as ComponentMeta<typeof MiniBadgeScoreCard>;

export const Default: ComponentStoryObj<typeof MiniBadgeScoreCard> = {
  args: {
    badgeColour: "black",
    title: "10A",
    score: 70,
    badgeIcon: <Circle bg={"white"} size={8} />,
  },
};

export const BadgeLeft: ComponentStoryObj<typeof MiniBadgeScoreCard> = {
  args: {
    badgeColour: "black",
    title: "10A",
    score: 70,
    badgeIcon: <Circle bg={"white"} size={8} />,
    badgeSide: "LEFT",
  },
};
