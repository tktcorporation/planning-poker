import React from "react";
import { Box, Flex, Heading } from "rebass/styled-components";
import { CardWithName } from "./CardWithName";

interface Props {
  selectedNumber: number | null;
}
export const PokerTable = ({ selectedNumber }: Props): JSX.Element => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <CardWithName name={"Smith"} selectedNumber={selectedNumber} />
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
