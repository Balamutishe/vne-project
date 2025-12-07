import { SearchField } from "@/features/Search";
import AccountLink from "@/widgets/Account/components/AccountLink";
import BasketView from "@/widgets/Basket";
import BasketLink from "@/widgets/Basket/components/BasketLink";
import BrandLink from "@/widgets/Brand/components/BrandLink";

export const HeaderToolbar = () => {
  return (
    <section className={"flex min-w-[25%] items-center justify-end gap-7"}>
      <BrandLink />
      <SearchField />
      <AccountLink />
      <BasketLink />
      <BasketView />
    </section>
  );
};
