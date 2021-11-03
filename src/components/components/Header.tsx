import React from "react";
import Headroom from "react-headroom";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import { BottomBoarderLink } from "./BottomBoarderLink";
import { TITLE } from "../utils/constants";

const Header = (): JSX.Element => {
  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <BottomBoarderLink href="/">{TITLE}</BottomBoarderLink>
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
