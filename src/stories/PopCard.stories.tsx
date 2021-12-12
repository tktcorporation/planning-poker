import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PopCard } from "../components/poker/Card";

export default {
  title: "Poker/PopCard",
  component: PopCard,
} as ComponentMeta<typeof PopCard>;

const Template: ComponentStory<typeof PopCard> = (args) => (
  <PopCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "1",
  borderColor: "primary",
  selected: false,
};
