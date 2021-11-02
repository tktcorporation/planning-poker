import React from "react";
import Headroom from "react-headroom";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import Link from "./Link";
import { capitalize } from "../utils/string";
import { SECTION, TITLE } from "../utils/constants";

const Header = (): JSX.Element => {
  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <Link href="/poker">{TITLE}</Link>
        <Flex mr={[0, 3, 5]}>
          {Object.keys(SECTION)
            .filter((id) => id !== "home")
            .map((id) => (
              <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                <Link href={`#${id}`} tabIndex={0}>
                  {capitalize(id)}
                </Link>
              </Box>
            ))}
        </Flex>
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
