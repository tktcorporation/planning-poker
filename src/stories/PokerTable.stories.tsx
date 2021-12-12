import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokerTable } from "../components/poker/PokerTable";

export default {
  title: "Poker/PokerTable",
  component: PokerTable,
} as ComponentMeta<typeof PokerTable>;

const Template: ComponentStory<typeof PokerTable> = (args) => (
  <PokerTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  selectedNumber: 1,
};
