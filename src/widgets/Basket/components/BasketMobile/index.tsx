import BasketFooter from "../BasketFooter";
import BasketHeader from "../BasketHeader";
import BasketList from "../BasketList";

const BasketMobile = () => {
  return (
    <section className={"container-margin flex flex-col gap-4 text-xs"}>
      <BasketHeader />
      <BasketList />
      <BasketFooter />
    </section>
  );
};

export default BasketMobile;
