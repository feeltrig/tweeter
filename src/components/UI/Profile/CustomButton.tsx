import React from "react";

const CustomButton = ({ title }: { title: String }) => {
  return (
    <div className="h-min rounded bg-blue-500 px-10 py-1 text-white">
      {title}
    </div>
  );
};

export default CustomButton;
