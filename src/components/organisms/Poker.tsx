import React from "react";
import TextLoop from "react-text-loop";
import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import Triangle from "../components/Triangle";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import Link from "next/link";
import { Box, Heading, Button, Flex } from "rebass/styled-components";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

export const Poker = (): JSX.Element => {
  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <Flex alignItems="center" verticalAlign="center" px={3} py={4} bg="muted">
        <Heading>Hello</Heading>
        <Box mx="auto" />
        <Box p={3} width={1 / 2} backgroundColor="primary">
          Flex
        </Box>
        <Button>Beep</Button>
        <Button ml={2} variant="secondary">
          Boop
        </Button>
      </Flex>
      <Flex alignItems="center" px={3} py={4} bg="muted">
        <Link href="/">Home</Link>
      </Flex>
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
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
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
