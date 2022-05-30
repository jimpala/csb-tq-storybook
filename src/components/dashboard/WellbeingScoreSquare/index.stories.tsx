import React from "react";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import WellbeingScoreSquare from "./index";
import { Circle } from "@chakra-ui/react";

export default {
  component: WellbeingScoreSquare,
  title: "dashboard/WellbeingScoreSquare",
  decorators: [(Story) => <Story />],
  // padded (default), centered, fullscreen
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof WellbeingScoreSquare>;

export const Default: ComponentStoryObj<typeof WellbeingScoreSquare> = {
  args: {
    title: "Eating well",
    subtitle: "Latest",
    icon: <Circle bg={"white"} size={8} />,
    score: 30,
    scoreChange: 5,
  },
};
