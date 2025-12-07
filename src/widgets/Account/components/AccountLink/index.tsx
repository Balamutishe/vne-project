"use client";

import Link from "next/link";
import UserSvg from "@/shared/icons/user.svg";
import { useAppSelector } from "@/store/hooks";

const AccountLink = () => {
  const { isAuth } = useAppSelector((state) => state.authState);

  return (
    <Link href={isAuth ? "/account" : "/auth"} className={"hidden sm:block"}>
      <UserSvg
        className={"hover:[&>path]:stroke-hover cursor-pointer"}
        width={24}
        height={24}
      />
    </Link>
  );
};

export default AccountLink;
