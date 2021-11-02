import React from "react";
import Link from "next/link";
import { Box, Flex } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import markdownRenderer from "../components/MarkdownRenderer";
import Triangle from "../components/Triangle";

const vision = `## Simple Planning`;

const purpose = `Plan simply`;

const About: React.FC = () => {
  return (
    <Section.Container Background={Background}>
      <Link href="/poker">
        <a>
          <Section.Header name={"Planning Poker"} icon="" label="title" />
        </a>
      </Link>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={vision} renderers={markdownRenderer} />
          </Fade>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={purpose} renderers={markdownRenderer} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default About;

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />
  </>
);
