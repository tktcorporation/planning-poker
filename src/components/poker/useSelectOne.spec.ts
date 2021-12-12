import { useSelectOne } from "./useSelectOne";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useSelectOne", () => {
  it("should return the correct value", () => {
    const selectList = ["a", "b", "c"];
    const { result } = renderHook(() => useSelectOne(selectList));
    expect(result.current.selectList).toStrictEqual([
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
    expect(result.current.selectList).toStrictEqual([
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
    const selectList = ["a", "b", "c"];
    const { result } = renderHook(() => useSelectOne(selectList));
    act(() => {
      result.current.toggleOne(1);
    });
    expect(result.current.selectList).toStrictEqual([
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
    expect(result.current.selectList).toStrictEqual([
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
    expect(result.current.selectList).toStrictEqual([
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
