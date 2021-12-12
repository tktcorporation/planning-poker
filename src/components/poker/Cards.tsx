import React from "react";
import { PopCard } from "./Card";
import styled from "styled-components";

interface Props {
  list: number[];
}
export const Cards = ({ list }: Props): JSX.Element => {
  const StyledPopCard = styled(PopCard).attrs(
    ({ text, borderColor, selected }: Parameters<typeof PopCard>[0]) => ({
      text,
      borderColor,
      selected,
    })
  )`
    margin-right: 10px;
  `;
  const cardItems = list.map((text) => (
    <li key={text} style={{ display: "inline-block", margin: 0 }}>
      <StyledPopCard text={text} borderColor={"primary"} selected={false} />
    </li>
  ));

  return <ul style={{ margin: 0 }}>{cardItems}</ul>;
};
