import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ButtonWithIcon from "../Custom/ButtonWithIcon";
import { ProfileIcon } from "../Profile/ProfileIcon";

const TweetComments = () => {
  return (
    <div className="flex gap-5">
      <ProfileIcon
        settings={{
          width: 50,
          height: 50,
          borderRadius: "5px",
        }}
      />
      <div className="">
        <div className="tweetcommentInfo rounded-md bg-gray-200 p-2 px-5">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <p>James brown</p>
              <p className="text-gray-400">20 auguest</p>
            </div>
            <div className="pb-5 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nam et ullam autem veniam unde molestiae, eum consectetur nihil!
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 p-2 px-5">
          <ButtonWithIcon
            title={"Like"}
            gap={2}
            color={"gray-500"}
            component={<FaRegHeart color="gray" />}
          />
          <p className="text-gray-500">12 Likes</p>
        </div>
      </div>
    </div>
  );
};

export default TweetComments;
