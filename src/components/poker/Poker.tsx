import React from "react";
import { Section } from "../molecules/Section";
import { Triangle } from "../molecules/Triangle";
import { Flex } from "rebass/styled-components";
import { PokerTable } from "./PokerTable";
import { HandBox } from "./HandBox";
import { PlanList } from "../../domain/point";

interface Props {
  planList: PlanList;
}
export const Poker = ({ planList }: Props): JSX.Element => {
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>(
    null
  );
  return (
    <Section.Container Background={Background}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height="100%"
      >
        <PokerTable selectedNumber={selectedNumber} planList={planList} />
      </Flex>
      <HandBox
        list={[0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100]}
        backgroundColor={"white"}
        onChangeSelected={(selected) =>
          setSelectedNumber(selected?.value ?? null)
        }
      />
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
