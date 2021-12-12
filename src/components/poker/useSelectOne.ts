import { useState } from "react";
export interface ListItem {
  id: number;
  value: number;
  selected: boolean;
}
class SelectList {
  private list: ListItem[];
  constructor(list: number[]) {
    this.list = list.map((item, i) => {
      return {
        id: i,
        value: item,
        selected: false,
      };
    });
  }
  static createFrom(list: ListItem[]) {
    const instance = new SelectList([]);
    instance.list = list;
    return instance;
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
  getSelected(): ListItem | null {
    const selected = this.list.find((item) => item.selected);
    return selected ? selected : null;
  }
}

export const useSelectOne = (
  list: number[]
): {
  selectList: ListItem[];
  selectOne: (id: number) => void;
  toggleOne: (id: number) => void;
} => {
  const initialList = new SelectList(list).getList();
  const [selectList, setSelectList] = useState(initialList);
  const selectOne = (id: number) => {
    setSelectList((selectList) => {
      const newSelectList = SelectList.createFrom(selectList);
      newSelectList.selectOne(id);
      selectList = [...newSelectList.getList()];
      return selectList;
    });
  };
  const toggleOne = (id: number) => {
    setSelectList((slectList) => {
      const newCardList = SelectList.createFrom(slectList);
      newCardList.toggleOne(id);
      slectList = [...newCardList.getList()];
      return slectList;
    });
  };
  return {
    selectOne,
    toggleOne,
    selectList,
  };
};
