import { Queries } from "@rebass/preset";
import styled from "styled-components";

type Props = {
  query: keyof Queries;
};

export const Hide = styled.div<Props>`
  ${({ query, theme }) => ({
    [theme.queries[query]]: {
      display: "none",
    },
  })}
`;
