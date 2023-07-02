import Image from "next/image";
import React from "react";
import OptionBox from "~/components/UI/Profile/OptionBox";
import ProfileInfo from "~/components/UI/Profile/ProfileInfo";
import TweetComponent from "~/components/UI/Tweets/TweetComponent";
import bg from "../assests/images/bg.jpg";

const Home = () => {
  return (
    <div className="relative  bg-gray-100">
      <Image
        src={bg}
        alt="bg"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <ProfileInfo />
      <div className="restOfContent mx-auto my-10 flex w-2/3 justify-between gap-5">
        <div className="w-1/4 flex-grow">
          <OptionBox
            options={[
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
            ]}
          />
        </div>
        <div className="flex w-3/4 flex-col gap-5">
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
