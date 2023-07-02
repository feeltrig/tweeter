import Image from "next/image";
import React from "react";
import Stephan from "../../../assests/images/stephan.jpg";

export interface PF {
  settings: React.CSSProperties;
  src?: String;
}

export const ProfileIcon = ({ settings, src }: PF) => {
  const { width, objectFit, height, border, borderRadius } = settings;
  return (
    <Image
      alt="logo"
      className="aspect-square"
      src={Stephan}
      style={{
        width,
        objectFit,
        height,
        border,
        borderRadius,
      }}
    />
  );
};

// const defaultProps = {
//   width: 250,
//   objectFit: "cover",
//   height: 150,
//   border: "5px inset solid white",
//   borderRadius: "10px",
// };

const settings = {
  width: 250,
  objectFit: "cover",
  height: 150,
  border: "5px inset solid white",
  borderRadius: "10px",
};

const defaultProps = {
settings
}

ProfileIcon.defaultProps = defaultProps;
