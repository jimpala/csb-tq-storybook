import React from 'react';
import type {ComponentStoryObj, ComponentMeta} from '@storybook/react';
import ScoreTag from './index';

export default {
  component: ScoreTag,
  title: "dashboard/ScoreTag",
  decorators: [
    (Story) => (
      <Story/>
    )
  ],
  // padded (default), centered, fullscreen
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof ScoreTag>;

export const Default: ComponentStoryObj<typeof ScoreTag> = {
  args: {
    score: 65
  }
};

export const PositiveChange: ComponentStoryObj<typeof ScoreTag> = {
  args: {
    score: 65,
    positiveChange: true
  }
};

export const NegativeChange: ComponentStoryObj<typeof ScoreTag> = {
  args: {
    score: 65,
    positiveChange: false
  }
};
