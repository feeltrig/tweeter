import React from "react";
import logo from "../../../assests/images/tweeter.svg";
import Image from "next/image";

const HeaderBar = () => {
  const headerLinks = [
    {
      title: "Home",
      active: true,
    },
    {
      title: "Explore",
      active: true,
    },
    {
      title: "Bookmarks",
      active: true,
    },
  ];

  return (
    <div className="bg-blue flex h-20 items-center justify-between px-10">
      <div className="flex h-full items-center">
        <Image alt="logo" src={logo} />
      </div>
      <div className="flex h-full items-center gap-10">
        {headerLinks.map((i, index) => (
          <div
            key={index}
            className="relative flex h-full w-20 items-center justify-center"
          >
            {i.title}
            {i.active && (
              <div className="absolute bottom-0 h-2 w-full rounded-t-md bg-blue-500"></div>
            )}
          </div>
        ))}
        {/* <div className="relative flex h-full items-center">
          Home
          <div className="absolute bottom-0 h-2 w-full rounded-t-md bg-blue-500"></div>
        </div>
        <div>Explore</div>
        <div></div> */}
      </div>
      <div className="flex h-full items-center">Profile</div>
    </div>
  );
};

export default HeaderBar;
