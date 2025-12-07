import { useAppSelector } from "@/store/hooks";
import BasketCard from "../BasketCard";

const BasketList = () => {
  const { products } = useAppSelector((state) => state.basketState);

  return (
    <ul
      className={
        "flex flex-col gap-2 overflow-auto sm:mb-5 sm:max-h-135 sm:gap-6"
      }
    >
      {products.length !== 0 ? (
        products.map((product) => (
          <li
            key={crypto.randomUUID()}
            className={"flex-center-between h-30 sm:h-35 lg:h-40"}
          >
            <BasketCard product={product} />
          </li>
        ))
      ) : (
        <li>Корзина пуста</li>
      )}
    </ul>
  );
};

export default BasketList;
