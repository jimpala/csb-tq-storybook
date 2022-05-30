import React from 'react';
import type {ComponentStoryObj, ComponentMeta} from '@storybook/react';
import ResourceCard from './index';

export default {
  component: ResourceCard,
  title: "dashboard/ResourceCard",
  decorators: [
    (Story) => (
      <Story/>
    )
  ],
  // padded (default), centered, fullscreen
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof ResourceCard>;

export const Default: ComponentStoryObj<typeof ResourceCard> = {
  args: {
    maxW: "sm",
    badgeColour: "black",
    badgeText: "Badge",
    badgeTextColour: "white",
    title: "Resource Card",
    body: "Hello there everyone. This is a resource card. It's a really sick component actually.",
    breadcrumbText: "Section / Subsection",
    imageSrc: "https://bit.ly/naruto-sage",
  }
};

export const WithoutBadge: ComponentStoryObj<typeof ResourceCard> = {
  args: {
    maxW: "sm",
    title: "Resource Card",
    body: "Hello there everyone. This is a resource card. It's a really sick component actually.",
    breadcrumbText: "Section / Subsection",
    imageSrc: "https://bit.ly/naruto-sage",
  }
};
