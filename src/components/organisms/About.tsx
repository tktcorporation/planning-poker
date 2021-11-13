import React from "react";
import { Box, Flex, Link as RebassLink } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import { Section } from "../molecules/Section";
import { MarkdownRenderer } from "../molecules/MarkdownRenderer";
import { Triangle } from "../molecules/Triangle";

const vision = `## Simple Planning`;

const purpose = `Plan simply`;

export const About: React.FC = () => {
  return (
    <Section.Container Background={Background}>
      <Section.Header name={"Planning Poker"} icon="" label="title" href="/poker"/>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={vision} renderers={MarkdownRenderer} />
          </Fade>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={purpose} renderers={MarkdownRenderer} />
          </Fade>
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
  </>
);
