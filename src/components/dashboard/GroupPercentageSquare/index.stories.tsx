import React from 'react';
import type {ComponentStoryObj, ComponentMeta} from '@storybook/react';
import GroupPercentageSquare from './index';
import {Square} from "@chakra-ui/react";

export default {
  component: GroupPercentageSquare,
  title: "dashboard/GroupPercentageSquare",
  decorators: [
    (Story) => (
      <Story/>
    )
  ],
  // padded (default), centered, fullscreen
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof GroupPercentageSquare>;

export const Default: ComponentStoryObj<typeof GroupPercentageSquare> = {
  args: {
    title: "10A",
    icon: <Square size={4} bg={"white"} />,
    percentage: 80,
  }
};
