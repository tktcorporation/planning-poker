import React from "react";
import { PopCard } from "./Card";
import styled from "styled-components";
import { useSelectOne, ListItem } from "./useSelectOne";

interface Props {
  list: number[];
  onChangeSelected?: (selected: ListItem | null) => void;
}

export const Cards = ({ list, onChangeSelected }: Props): JSX.Element => {
  const StyledPopCard = styled(PopCard).attrs(
    ({ text, borderColor, selected }: Parameters<typeof PopCard>[0]) => ({
      text,
      borderColor,
      selected,
    })
  )`
    margin-right: 10px;
  `;
  const { selectList, toggleOne } = useSelectOne(list);
  React.useEffect(() => {
    onChangeSelected &&
      onChangeSelected(selectList.find((item) => item.selected) ?? null);
  }, [selectList]);
  const cardItems = selectList.map((card) => (
    <li key={card.id} style={{ display: "inline-block", margin: 0 }}>
      <StyledPopCard
        onClick={() => toggleOne(card.id)}
        text={card.value}
        borderColor={"primary"}
        selected={card.selected}
      />
    </li>
  ));

  return <ul style={{ margin: 0 }}>{cardItems}</ul>;
};
