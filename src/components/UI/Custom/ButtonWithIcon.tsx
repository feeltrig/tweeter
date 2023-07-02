import { CssSyntaxError } from "postcss";
import React, { CSSProperties, ReactElement } from "react";

export interface ButtonWithIconINF {
  title: String;
  component: ReactElement;
  gap?: Number;
  color?: String;
}

const ButtonWithIcon = ({
  title,
  component,
  gap,
  color,
}: ButtonWithIconINF): JSX.Element => {
  return (
    <div
      className={`flex justify-center rounded-md gap-${gap} py-2 align-middle hover:cursor-pointer`}
    >
      <div className="flex items-center">{component}</div>
      <div className={`text-${color}`}>{title}</div>
    </div>
  );
};

export default ButtonWithIcon;
