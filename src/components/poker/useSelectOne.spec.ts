import { useSelectOne } from "./useSelectOne";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useSelectOne", () => {
  it("should return the correct value", () => {
    const selectList = [1, 2, 3];
    const { result } = renderHook(() => useSelectOne(selectList));
    expect(result.current.selectList).toStrictEqual([
      {
        id: 0,
        value: 1,
        selected: false,
      },
      {
        id: 1,
        value: 2,
        selected: false,
      },
      {
        id: 2,
        value: 3,
        selected: false,
      },
    ]);
    act(() => {
      result.current.selectOne(1);
    });
    expect(result.current.selectList).toStrictEqual([
      {
        id: 0,
        value: 1,
        selected: false,
      },
      {
        id: 1,
        value: 2,
        selected: true,
      },
      {
        id: 2,
        value: 3,
        selected: false,
      },
    ]);
  });
  it("toggle should work", () => {
    const selectList = [1, 2, 3];
    const { result } = renderHook(() => useSelectOne(selectList));
    act(() => {
      result.current.toggleOne(1);
    });
    expect(result.current.selectList).toStrictEqual([
      {
        id: 0,
        value: 1,
        selected: false,
      },
      {
        id: 1,
        value: 2,
        selected: true,
      },
      {
        id: 2,
        value: 3,
        selected: false,
      },
    ]);
    act(() => {
      result.current.toggleOne(0);
    });
    expect(result.current.selectList).toStrictEqual([
      {
        id: 0,
        value: 1,
        selected: true,
      },
      {
        id: 1,
        value: 2,
        selected: false,
      },
      {
        id: 2,
        value: 3,
        selected: false,
      },
    ]);

    act(() => {
      result.current.toggleOne(0);
    });
    expect(result.current.selectList).toStrictEqual([
      {
        id: 0,
        value: 1,
        selected: false,
      },
      {
        id: 1,

        value: 2,
        selected: false,
      },
      {
        id: 2,
        value: 3,
        selected: false,
      },
    ]);
  });
});
