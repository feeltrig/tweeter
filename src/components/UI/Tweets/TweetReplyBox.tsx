import React from "react";
import { ProfileIcon } from "../Profile/ProfileIcon";

const TweetReplyBox = () => {
  return (
    <div className="flex w-full items-center gap-5">
      {/* icon */}
      <ProfileIcon
        settings={{
          width: 50,
          height: 50,
          borderRadius: "5px",
        }}
      />

      {/* reply input */}
      <div className="h-full w-full">
        <input
          type="text"
          className="h-full w-full rounded-md bg-gray-200 px-5 focus:outline-none"
          placeholder="Tweet your reply"
        />
      </div>
    </div>
  );
};

export default TweetReplyBox;
