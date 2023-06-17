import Image from "next/image";
import React from "react";
import { ProfileIcon } from "../Profile/ProfileIcon";

const TweetComponent = () => {
  return (
    <div className="w-full border-8 p-5">
      <div className="profileBar">
        <ProfileIcon width={50} height={50} />
      </div>
    </div>
  );
};

export default TweetComponent;
