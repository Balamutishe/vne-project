import ArrowDownSvg from "@/shared/icons/arrow-down.svg";
import PurchaseCardDetails from "@/widgets/Purchases/PurchaseCard/components/PurchaseCardDetails";
import { clsx } from "clsx";
import { FC, useState } from "react";

const PurchaseCard: FC<{
  item: {
    _id: string;
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    imageUrl: string;
  };
  index: number;
}> = ({ item, index }) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

  return (
    <article>
      <div
        className={clsx(
          "hover:text-hover group flex cursor-pointer justify-between border-t-1 border-[#a7a7a7] px-2 py-2.5",
          { "border-b-1": visibleAdditional },
        )}
        onClick={handleSetVisibleAdditional}
      >
        <span>
          <span className={"pr-14"}>(0{index + 1})</span>
          <span>{item.name}</span>
        </span>
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
      {visibleAdditional && <PurchaseCardDetails item={item} />}
    </article>
  );
};

export default PurchaseCard;
