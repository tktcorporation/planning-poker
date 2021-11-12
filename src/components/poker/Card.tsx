import React from "react";
import { Button } from "rebass/styled-components";
import { ButtonProps } from "rebass";
import { theme } from "../../theme";

import {
  always,
  clamp,
  concat,
  curry,
  ifElse,
  multiply,
  pipe,
  equals,
} from "ramda";

const toFixed = (val: number) => Number(val.toFixed());
const toBase = (base: number) => (val: number) => Number(val).toString(base);
const padStart = (targetLength: number, padString: string) => (val: string) =>
  val.padStart(targetLength, padString);

const applyAlpha = curry((color: string, alpha: number) =>
  pipe(
    clamp(0, 1),
    ifElse(
      equals(1),
      always(color),
      pipe(multiply(255), toFixed, toBase(16), padStart(2, "0"), concat(color))
    )
  )(alpha)
);

const backGround = (selected: boolean, color: keyof typeof theme["colors"]) => {
  const themeColor = theme["colors"][color];
  if (selected) {
    return {
      color: "white",
      backgroundColor: themeColor,
    };
  }
  return {
    color: themeColor,
    backgroundColor: "initial",
    "&:hover": {
      backgroundColor: applyAlpha(themeColor, 0.1),
    },
  };
};

type CardProps = Omit<ButtonProps, "css"> & {
  n: number;
  borderColor: keyof typeof theme["colors"];
  selected: boolean;
};
export const Card = ({
  n,
  borderColor = "primary",
  selected,
  ...props
}: CardProps): JSX.Element => {
  return (
    <Button
      {...props}
      sx={{
        ...backGround(selected, borderColor),
        borderRadius: 3,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: theme.colors[borderColor],
        cursor: "pointer",
      }}
      alignContent="baseline"
      alignItems="center"
    >
      {n}
    </Button>
  );
};
