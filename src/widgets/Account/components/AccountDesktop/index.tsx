import AccountInfoSwitch from "@/features/Account/components/AccountSwitchInfo";
import ButtonLogout from "@/features/Logout";
import AccountInfo from "@/widgets/Account/components/AccountInfo";
import PurchasesInfoGeneral from "@/widgets/Purchases/PurchasesInfoGeneral";
import PurchasesList from "@/widgets/Purchases/PurchasesList";
import localFont from "next/font/local";
import { useState } from "react";

const damionFont = localFont({
  src: "../../../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

const AccountDesktop = () => {
  const [varAccountInfo, setVarAccountInfo] = useState<"purchases" | "info">(
    "info",
  );

  return (
    <section className={"container-padding"}>
      <div className={"mb-5 sm:mb-10 xl:mb-20"}>
        <h1 className={`${damionFont.className} text-3xl xl:text-5xl`}>
          ПРИВЕТ, &lt;USER NAME&gt;!
        </h1>
      </div>
      <div className={"flex justify-between sm:gap-5 xl:gap-10"}>
        <aside className={"flex w-1/4 flex-col"}>
          <AccountInfoSwitch
            varAccountInfo={varAccountInfo}
            setVarAccountInfo={setVarAccountInfo}
          />
          {varAccountInfo === "purchases" && (
            <div className={"mb-5"}>
              <PurchasesInfoGeneral />
            </div>
          )}
          <ButtonLogout />
        </aside>
        <div className={"flex w-3/4 flex-col justify-between"}>
          {varAccountInfo === "purchases" && (
            <PurchasesList variant={"desktop"} />
          )}
          {varAccountInfo === "info" && <AccountInfo />}
        </div>
      </div>
    </section>
  );
};

export default AccountDesktop;
