import React from "react";
import { Box, Button, Flex, Heading } from "rebass/styled-components";
import { Cards } from "./Cards";

export const PokerTable = (): JSX.Element => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
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
            Pick your card!
          </Heading>
        </Box>
      </Flex>
      <Cards></Cards>
    </Box>
  );
};
