import { useState } from "react";
interface ListItem {
  id: number;
  value: string | number;
  selected: boolean;
}
class CardList {
  private list: ListItem[];
  constructor(list: (number | string)[]) {
    this.list = list.map((item, i) => {
      return {
        id: i,
        value: item,
        selected: false,
      };
    });
  }
  static createFrom(list: ListItem[]) {
    const cardList = new CardList([]);
    cardList.list = list;
    return cardList;
  }
  selectOne(id: number) {
    this.list.forEach((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
  toggleOne(id: number) {
    this.list.forEach((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
  }
  getList() {
    return this.list;
  }
}

export const useSelectOne = (
  list: (number | string)[]
): ((list: (number | string)[]) => {
  selectOne: (id: number) => void;
  toggleOne: (id: number) => void;
  cardList: ListItem[];
}) => {
  const initialCardList = new CardList(list).getList();
  const [cardList, setCardList] = useState(initialCardList);
  const selectOne = (id: number) => {
    setCardList((cardList) => {
      const newCardList = CardList.createFrom(cardList);
      newCardList.selectOne(id);
      cardList = [...newCardList.getList()];
      return cardList;
    });
  };
  const toggleOne = (id: number) => {
    setCardList((cardList) => {
      const newCardList = CardList.createFrom(cardList);
      newCardList.toggleOne(id);
      cardList = [...newCardList.getList()];
      return cardList;
    });
  };
  return {
    selectOne,
    toggleOne,
    cardList,
  };
};
