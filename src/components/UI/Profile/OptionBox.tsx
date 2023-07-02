import React from "react";

const OptionBox = () => {
  const options = [
    {
      title: "Tweets",
      active: true,
    },
    {
      title: "Tweets & Replies",
      active: false,
    },
    {
      title: "Media",
      active: false,
    },
    {
      title: "Likes",
      active: false,
    },
  ];

  return (
    <div className="flex h-56 w-full flex-col gap-2 rounded-xl bg-white py-5 shadow-lg">
      {options.map((i, ind) => (
        <div className="relative px-5 py-2" key={ind}>
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
