import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cards } from "../components/poker/Cards";
import { ListItem } from "../components/poker/useSelectOne";

export default {
  title: "Poker/PopCardList",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

const eventHamdler = (select: null | ListItem) => {
  console.log(select);
};

export const Primary = Template.bind({});
Primary.args = {
  list: [1, 2, 3, 4],
  onChangeSelected: eventHamdler,
};
