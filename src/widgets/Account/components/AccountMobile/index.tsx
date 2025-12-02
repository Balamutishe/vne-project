import ButtonLogout from "@/features/Logout";
import AccountMobileItem from "@/widgets/Account/components/AccountMobile/AccountMobileItem";
import FormFieldsDeliveryData from "@/widgets/FormFields/FormFieldsDeliveryData";
import FormFieldsUserData from "@/widgets/FormFields/FormFieldsUserData";
import PurchasesInfoGeneral from "@/widgets/Purchases/PurchasesInfoGeneral";
import PurchasesList from "@/widgets/Purchases/PurchasesList";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

const AccountMobile = () => {
  const accountItems = ["МОИ ПОКУПКИ", "АДРЕС ДОСТАВКИ", "МОИ ДАННЫЕ"];

  const handleSetItemContent = (
    item: "МОИ ПОКУПКИ" | "АДРЕС ДОСТАВКИ" | "МОИ ДАННЫЕ",
  ) => {
    switch (item) {
      case "АДРЕС ДОСТАВКИ":
        return <FormFieldsDeliveryData />;
      case "МОИ ДАННЫЕ":
        return <FormFieldsUserData />;
      case "МОИ ПОКУПКИ":
        return <PurchasesList variant={"mobile"} />;
    }
  };

  return (
    <section>
      <h1 className={`${damionFont.className} container-padding mb-5 text-3xl`}>
        ПРИВЕТ, &lt;USER NAME&gt;!
      </h1>
      <ul className={"mb-10"}>
        {accountItems.map((item) => (
          <li
            key={crypto.randomUUID()}
            className={"border-tertiary last:border-b-1"}
          >
            <AccountMobileItem
              item={item}
              children={handleSetItemContent(
                item as "МОИ ПОКУПКИ" | "АДРЕС ДОСТАВКИ" | "МОИ ДАННЫЕ",
              )}
            />
          </li>
        ))}
      </ul>
      <div className={"container-padding"}>
        <div className={"mb-10"}>
          <PurchasesInfoGeneral />
        </div>
        <ButtonLogout />
      </div>
    </section>
  );
};

export default AccountMobile;
