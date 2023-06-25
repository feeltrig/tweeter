import React from "react";
import {
  FaRegHeart,
  FaRegBookmark,
  FaRetweet,
  FaRegComment,
} from "react-icons/fa";

const TweetOptions = () => {
  const options = [
    {
      title: "Comment",
      component: <FaRegComment height={"100%"} />,
    },
    {
      title: "Retweet",
      component: <FaRetweet />,
    },
    {
      title: "Likes",
      component: <FaRegHeart />,
    },
    {
      title: "Saved",
      component: <FaRegBookmark />,
    },
  ];
  return (
    <div className="flex justify-around border-y-2 py-1">
      {options.map((i, index) => {
        return (
          <div className="flex w-full justify-center gap-5 rounded-md py-2 align-middle hover:cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">{i.component}</div>
            <div>{i.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetOptions;
