import { BasketClear } from "@/features/Basket/BasketClear";

const BasketHeader = () => {
  return (
    <div className={"flex-center-between w-full"}>
      <h3>КОРЗИНА</h3>
      <BasketClear />
    </div>
  );
};

export default BasketHeader;
