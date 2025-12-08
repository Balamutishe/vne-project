import { clsx } from "clsx";
import { SetStateAction } from "react";

const AccountSwitchInfo = ({
  varAccountInfo,
  setVarAccountInfo,
}: {
  varAccountInfo: "purchases" | "info";
  setVarAccountInfo: (value: SetStateAction<"purchases" | "info">) => void;
}) => {
  return (
    <section className={"mb-10 flex flex-col items-start lg:gap-5 xl:gap-10"}>
      <button
        className={clsx("hover:text-hover cursor-pointer", {
          "text-active": varAccountInfo === "purchases",
        })}
        onClick={() => setVarAccountInfo("purchases")}
      >
        МОИ ПОКУПКИ
      </button>
      <button
        className={clsx("hover:text-hover cursor-pointer", {
          "text-active": varAccountInfo === "info",
        })}
        onClick={() => setVarAccountInfo("info")}
      >
        МОИ ДАННЫЕ
      </button>
    </section>
  );
};

export default AccountSwitchInfo;
