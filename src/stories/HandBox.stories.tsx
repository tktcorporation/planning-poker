import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HandBox } from "../components/poker/HandBox";

export default {
  title: "Poker/HandBox",
  component: HandBox,
} as ComponentMeta<typeof HandBox>;

const Template: ComponentStory<typeof HandBox> = (args) => (
  <HandBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  list: [1, 2, 3, 4],
  backgroundColor: "gray",
};
