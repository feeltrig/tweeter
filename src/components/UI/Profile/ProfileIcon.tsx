import Image from "next/image";
import React from "react";
import Stephan from "../../../assests/images/stephan.jpg";

export const ProfileIcon = ({
  width,
  objectFit,
  height,
  border,
  borderRadius,
}: React.CSSProperties) => {
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

const defaultProps = {
  width: 250,
  objectFit: "cover",
  height: 150,
  border: "5px inset solid white",
  borderRadius: "10px",
};

ProfileIcon.defaultProps = defaultProps;
