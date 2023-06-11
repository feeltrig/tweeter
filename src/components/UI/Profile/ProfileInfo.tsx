import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Stephan from "../../../assests/images/stephan.jpg";

const ProfileInfo = () => {
  return (
    <div className="pt-60">
      <div className="relative z-40 mx-auto flex w-2/3 justify-between gap-2 rounded-xl bg-white p-5 shadow-md">
        {/* image container */}
        <div className="relative w-40">
          <div className="absolute bottom-24 aspect-square ">
            <Image
              alt="logo"
              className="aspect-square"
              src={Stephan}
              style={{
                // width: 250,
                objectFit: "cover",
                // height: 150,
                border: "5px inset solid white",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* profile details */}
        <div className="mx-5">
          <div className="flex gap-5">
            <p className="font-semibold">Daniel Jackson</p>
            <>1125.222</>
            <p className="font-semibold">Following</p>
          </div>
          <div className="my-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            debitis optio hic tenetur molerspiciatis eligendi laborum nihil
            ipsam saepe, et porro culpa labore.
          </div>
        </div>

        <CustomButton title={"Follow"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
