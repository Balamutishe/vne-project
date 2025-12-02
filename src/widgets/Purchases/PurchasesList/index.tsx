import { useAppSelector } from "@/store/hooks";
import PurchaseCard from "@/widgets/Purchases/PurchaseCard";
import PurchaseCardDetails from "@/widgets/Purchases/PurchaseCard/components/PurchaseCardDetails";
import { clsx } from "clsx";
import { FC } from "react";

const PurchasesList: FC<{ variant: "desktop" | "mobile" }> = ({ variant }) => {
  const { products } = useAppSelector((state) => state.basketState);

  return (
    <ul
      className={clsx("border-tertiary", {
        "sm:last:border-b-1": products.length !== 0,
      })}
    >
      {products.length !== 0 ? (
        products.map((item, index) => (
          <li key={index}>
            {variant === "desktop" && (
              <PurchaseCard item={item} index={index} />
            )}
            {variant === "mobile" && <PurchaseCardDetails item={item} />}
          </li>
        ))
      ) : (
        <li>СПИСОК ПОКУПОК ПУСТ</li>
      )}
    </ul>
  );
};

export default PurchasesList;
