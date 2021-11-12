import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "../pages/poker/_internal/Card";

export default {
  title: "Poker/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  n: 1,
  borderColor: "primary",
  selected: false,
};
