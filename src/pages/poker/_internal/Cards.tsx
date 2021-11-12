import React from "react";
import { Box, Flex } from "rebass/styled-components";
import { theme } from "../../../theme";
import { Card } from "./Card";

export const Cards = (): JSX.Element => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box>
          <Card n={1} borderColor={'primary'} selected={false} marginX={3}></Card>
          <Card n={1} borderColor={'primary'} selected={false}></Card>
          <Card n={1} borderColor={'primary'} selected={true}></Card>
          <Card n={1} borderColor={'primary'} selected={false} ></Card>
        </Box>
      </Flex>
    </Box>
  );
};
