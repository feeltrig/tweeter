import Image from "next/image";
import React from "react";
import { ProfileIcon } from "../Profile/ProfileIcon";
import TweetOptions from "./TweetOptions";
import TweetReplyBox from "./TweetReplyBox";

const TweetComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5  rounded-xl bg-white p-5 shadow-md">
      <div className="profileBar flex gap-5">
        {/* icon */}
        <ProfileIcon
          settings={{
            width: 50,
            height: 50,
          }}
        />

        {/* profile info */}
        <div className="profileDetails flex flex-col justify-between">
          <div>Daniles</div>
          <div>Time zone</div>
        </div>
      </div>

      {/* tweet */}
      <div className="tweetContent">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odit
        odio dolores sunt aut deserunt quidem molestias consequuntur earum ea
        labore facilis enim, hic, fuga commodi! Ipsum natus autem assumenda
        alias repudiandae deserunt tempore temporibus possimus amet praesentium
        exercitationem, blanditiis tenetur voluptatibus dolorem sint fugiat
        sapiente harum non corrupti. Tenetur?
      </div>

      {/* tweet photo */}
      <ProfileIcon
        settings={{
          width: "100%",
          height: 250,
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* tweet info */}
      <div className="m-0 ms-auto flex gap-2 p-0 text-gray-400">
        <p>104 Comments</p>
        <p>256 Retweets</p>
        <p>12.2k Saved</p>
      </div>

      {/* tweet options */}
      <TweetOptions />

      {/* reply option */}
      <TweetReplyBox />
    </div>
  );
};

export default TweetComponent;
