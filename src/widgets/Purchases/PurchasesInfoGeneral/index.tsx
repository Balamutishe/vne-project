import { useAppSelector } from "@/store/hooks";

const PurchasesInfoGeneral = () => {
  const { totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <section className={"flex flex-col items-start gap-5"}>
      <h3>НЕОПЛАЧЕННЫЕ ЗАКАЗЫ</h3>
      {totalPrice !== 0 ? (
        <div
          className={
            "border-tertiary flex w-full flex-col items-start gap-2.5 border-1 border-dashed p-2"
          }
        >
          <p>№ 7830–004747–8671: ORDER DATE</p>
          <div className={"flex w-full gap-2.5"}>
            <span>{totalPrice} &#8381;</span>
            <button className={"text-hover hover:text-active cursor-pointer"}>
              Ожидание оплаты
            </button>
          </div>
        </div>
      ) : (
        <p>У вас нет неоплаченных заказов</p>
      )}
    </section>
  );
};

export default PurchasesInfoGeneral;
