import ArrowDownSvg from "@/widgets/Products/ProductDetails/icons/arrow-down.svg";
import { clsx } from "clsx";
import { FC, ReactNode, useState } from "react";

const AccountMobileItem: FC<{ item: string; children: ReactNode }> = ({
  item,
  children,
}) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

  return (
    <article>
      <div
        className={clsx(
          "hover:text-hover group container-padding flex cursor-pointer justify-between border-t-1 border-[#a7a7a7]" +
            " py-2.5",
          { "border-b-1": visibleAdditional },
        )}
        onClick={handleSetVisibleAdditional}
      >
        <span>{item}</span>
        <span className={"flex items-center"}>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-hover:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": visibleAdditional,
              },
            )}
          />
        </span>
      </div>
      {visibleAdditional && (
        <div className={"container-padding w-full py-5"}>{children}</div>
      )}
    </article>
  );
};

export default AccountMobileItem;
