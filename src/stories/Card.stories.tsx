import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "../components/poker/Card";

export default {
  title: "Poker/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 1,
  borderColor: "primary",
  selected: false,
};
