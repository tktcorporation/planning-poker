import React from "react";
import { Box, Flex, Heading } from "rebass/styled-components";
import { PlanList } from "../../domain/point";
import { CardWithName } from "./CardWithName";

interface Props {
  selectedNumber: number | null;
  planList: PlanList;
}
export const PokerTable = ({
  selectedNumber,
  planList,
}: Props): JSX.Element => {
  const cards = planList.getPlans().map((plan, index) => (
    <li key={index + 1} style={{ display: "inline-block", margin: 0 }}>
      <CardWithName
        key={index}
        name={plan.planner.name}
        selectedNumber={plan.points.value}
      />
    </li>
  ));
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <ul style={{ margin: 0 }}>
          <li key={0} style={{ display: "inline-block", margin: 0 }}>
            <CardWithName name={"Smith"} selectedNumber={selectedNumber} />
          </li>
          {cards}
        </ul>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box
          sx={{
            px: 4,
            py: 4,
            borderRadius: 8,
            color: "white",
            bg: "gray",
          }}
        >
          <Heading textAlign="center" fontSize={[2, 3]}>
            {selectedNumber === null ? "Pick your card!" : "Open!"}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};
