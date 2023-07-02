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
      active: false,
    },
    {
      title: "Bookmarks",
      active: false,
    },
  ];

  return (
    <div className="bg-blue flex h-20 items-center justify-between px-10">
      {/* logo */}
      <div className="flex h-full items-center">
        <Image alt="logo" src={logo} />
      </div>

      {/* links */}
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
      </div>

      {/* profile */}
      <div className="flex h-full items-center">Profile</div>
    </div>
  );
};

export default HeaderBar;
