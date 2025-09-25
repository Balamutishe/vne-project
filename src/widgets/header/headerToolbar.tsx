import Image from "next/image";
import { useState } from "react";

export const HeaderToolbar = () => {
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);

  return (
    <div className={"flex w-2/5 items-center justify-end gap-8"}>
      {visibleSearch ? (
        <input type={"text"} className={"h-11 w-86 border-1 border-zinc-950"} />
      ) : (
        <button
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          О БРЕНДЕ
        </button>
      )}

      <Image
        src={"/images/search.svg"}
        alt={"Search"}
        width={24}
        height={24}
        priority={true}
        onClick={() => setVisibleSearch((visible) => !visible)}
      />
      <Image
        src={"/images/user.svg"}
        alt={"Search"}
        width={24}
        height={24}
        priority={true}
      />
      <Image
        src={"/images/bag.svg"}
        alt={"Search"}
        width={24}
        height={24}
        priority={true}
      />
    </div>
  );
};
