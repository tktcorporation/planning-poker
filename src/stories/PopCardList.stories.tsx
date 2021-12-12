import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cards } from "../components/poker/Cards";

export default {
  title: "Poker/PopCardList",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  list: [1, 2, 3, 4],
};
