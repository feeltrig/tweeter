import React, { ReactElement, ReactNode } from "react";
import HeaderBar from "~/components/UI/Profile/HeaderBar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <>
      <HeaderBar />
      <div>{children}</div>
    </>
  );
}
