import React from "react";
import { Section } from "../molecules/Section";
import { Triangle } from "../molecules/Triangle";
import { Flex } from "rebass/styled-components";
import { PokerTable } from "./PokerTable";
import { Cards } from "./Cards";

export const Poker = (): JSX.Element => {
  return (
    <Section.Container Background={Background}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height="100%" // 効かない
      >
        <PokerTable></PokerTable>
      </Flex>
      <Cards></Cards>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);
