import Image from "next/image";
import React from "react";
import ProfileInfo from "~/components/UI/Profile/ProfileInfo";
import bg from "../assests/images/bg.jpg";

const Home = () => {
  return (
    <div className="relative h-screen">
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
    </div>
  );
};

export default Home;
