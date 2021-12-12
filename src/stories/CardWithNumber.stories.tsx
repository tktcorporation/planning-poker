import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardWithName } from "../components/poker/CardWithName";

export default {
  title: "Poker/CardWithName",
  component: CardWithName,
} as ComponentMeta<typeof CardWithName>;

const Template: ComponentStory<typeof CardWithName> = (args) => (
  <CardWithName {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Ace",
  selectedNumber: 1,
};
