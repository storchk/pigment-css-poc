import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Pigment/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "The size of the button",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The color variant of the button",
    },
    hasBorderRadius: {
      control: { type: "boolean" },
      description: "Whether the button should have a border radius",
    },
  },
  args: {
    onClick: fn(),
    children: "Click me",
    variant: "primary",
    size: "small",
    hasBorderRadius: true,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};
