import React from "react";
import CustomButton from "./CustomButton";

const ProfileInfo = () => {
  return (
    <div className="mx-auto mt-40 flex w-1/2 justify-between gap-5 rounded-xl p-5 shadow-md">
      <div>image</div>
      <div>
        <div className="flex gap-5">
          <p className="font-semibold">Daniel Jackson</p>
          <>1125.222</>
          <p className="font-semibold">Following</p>
        </div>
        <div className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          debitis optio hic tenetur molerspiciatis eligendi laborum nihil ipsam
          saepe, et porro culpa labore.
        </div>
      </div>
      <CustomButton title={"Follow"} />
    </div>
  );
};

export default ProfileInfo;
