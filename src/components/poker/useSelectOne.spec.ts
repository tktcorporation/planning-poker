import { useSelectOne } from "./useSelectOne";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useSelectOne", () => {
  it("should return the correct value", () => {
    const list = ["a", "b", "c"];
    const { result } = renderHook(() => useSelectOne(list));
    expect(result.current.cardList).toStrictEqual([
      {
        id: 0,
        value: "a",
        selected: false,
      },
      {
        id: 1,
        value: "b",
        selected: false,
      },
      {
        id: 2,
        value: "c",
        selected: false,
      },
    ]);
    act(() => {
      result.current.selectOne(1);
    });
    expect(result.current.cardList).toStrictEqual([
      {
        id: 0,
        value: "a",
        selected: false,
      },
      {
        id: 1,
        value: "b",
        selected: true,
      },
      {
        id: 2,
        value: "c",
        selected: false,
      },
    ]);
  });
  it("toggle should work", () => {
    const list = ["a", "b", "c"];
    const { result } = renderHook(() => useSelectOne(list));
    act(() => {
      result.current.toggleOne(1);
    });
    expect(result.current.cardList).toStrictEqual([
      {
        id: 0,
        value: "a",
        selected: false,
      },
      {
        id: 1,
        value: "b",
        selected: true,
      },
      {
        id: 2,
        value: "c",
        selected: false,
      },
    ]);
    act(() => {
      result.current.toggleOne(0);
    });
    expect(result.current.cardList).toStrictEqual([
      {
        id: 0,
        value: "a",
        selected: true,
      },
      {
        id: 1,
        value: "b",
        selected: false,
      },
      {
        id: 2,
        value: "c",
        selected: false,
      },
    ]);

    act(() => {
      result.current.toggleOne(0);
    });
    expect(result.current.cardList).toStrictEqual([
      {
        id: 0,
        value: "a",
        selected: false,
      },
      {
        id: 1,

        value: "b",
        selected: false,
      },
      {
        id: 2,
        value: "c",
        selected: false,
      },
    ]);
  });
});
