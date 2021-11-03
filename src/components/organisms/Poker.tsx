import React from "react";
import { Section } from "../components/Section";
import { Triangle } from "../components/Triangle";
import { Box, Button, Flex } from "rebass/styled-components";

export const Poker = (): JSX.Element => {
  return (
    <Section.Container Background={Background}>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box
          justifyContent="center"
          alignItems="center"
          p={3}
          width={1 / 2}
          color="white"
          bg="primary"
        >
          Pick your cards!
        </Box>
      </Flex>
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
