import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  ButtonProps,
} from "rebass/styled-components";

export const Cards = (): JSX.Element => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box>
          <Card n={1} marginX={3}></Card>
          <Card n={1}></Card>
          <Card n={1}></Card>
          <Card n={1}></Card>
        </Box>
      </Flex>
    </Box>
  );
};

type CardProps = ButtonProps & {
  n: number;
};

const Card = ({ n, ...props }: CardProps): JSX.Element => {
  return (
    <Button
      {...props}
      sx={{
        px: 3,
        py: 4,
        borderRadius: 3,
        color: "white",
        bg: "gray",
      }}
      alignContent="baseline"
      alignItems="center"
    >
      <Heading textAlign="center" fontSize={[2, 3]}>
        {n}
      </Heading>
    </Button>
  );
};
