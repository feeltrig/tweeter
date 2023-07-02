import React from "react";

export interface OptionBoxINF {
  title: String;
  active: Boolean;
}

const OptionBox = ({
  options,
  onclickHandler,
}: {
  options: OptionBoxINF[];
  onclickHandler: React.MouseEventHandler;
}) => {
  return (
    <div className="flex h-56 w-full flex-col gap-2 rounded-xl bg-white py-5 shadow-lg">
      {options.map((i, ind) => (
        <div
          className="relative px-5 py-2 hover:cursor-pointer"
          key={ind}
          onClick={onclickHandler}
        >
          {i.title}
          {i.active && (
            <div className="absolute bottom-0 left-0 top-0 h-full w-2 rounded-r-md bg-blue-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionBox;
