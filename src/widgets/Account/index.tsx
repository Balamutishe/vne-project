"use client";

import AccountDesktop from "@/widgets/Account/components/AccountDesktop";
import AccountMobile from "@/widgets/Account/components/AccountMobile";

export const AccountView = () => {
  return (
    <>
      <div className={"hidden sm:block"}>
        <AccountDesktop />
      </div>
      <div className={"sm:hidden"}>
        <AccountMobile />
      </div>
      ;
    </>
  );
};
