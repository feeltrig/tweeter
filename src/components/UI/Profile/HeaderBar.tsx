import React from "react";
import logo from "../../../assests/images/tweeter.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export interface headerLinksINF {
  title: String;
  active: Boolean;
}

const HeaderBar = ({ headerLinks }: { headerLinks: headerLinksINF[] }) => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <div className="bg-blue flex h-20 items-center justify-between px-10">
      {/* logo */}
      <div className="flex h-full items-center">
        <Image alt="logo" src={logo} />
      </div>

      {/* links */}
      <div className="flex h-full items-center gap-10">
        {headerLinks.map((i, index) => (
          <div
            key={index}
            className="relative flex h-full w-20 items-center justify-center"
          >
            <Link href={String(i.title)}>{i.title}</Link>

            {pathname === `/${i.title}` && (
              <div className="absolute bottom-0 h-2 w-full rounded-t-md bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>

      {/* profile */}
      <div className="flex h-full items-center">Profile</div>
    </div>
  );
};

export default HeaderBar;
