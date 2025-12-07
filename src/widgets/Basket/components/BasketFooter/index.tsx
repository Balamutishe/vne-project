import { toggleBasketOpen } from "@/features/Basket/basketSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";

const BasketFooter = () => {
  const dispatch = useAppDispatch();
  const { totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <section className={"w-full"}>
      <div
        className={
          "flex-center-between mb-2 text-[0.65rem] sm:text-base lg:text-lg"
        }
      >
        <span>ВСЕГО</span>
        <span>{totalPrice} &#8381;</span>
      </div>
      <div className={"flex-center-between"}>
        {totalPrice !== 0 ? (
          <Link
            href={"/payment"}
            onClick={() => dispatch(toggleBasketOpen(false))}
            className={
              "bg-hover text-background active:bg-active w-full cursor-pointer p-2 text-center transition-colors lg:p-4"
            }
          >
            ОФОРМИТЬ ЗАКАЗ
          </Link>
        ) : (
          <button
            disabled={true}
            className={
              "bg-hover text-background active:bg-active w-full cursor-pointer p-2 text-center transition-colors lg:p-4"
            }
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
        )}
      </div>
    </section>
  );
};

export default BasketFooter;
