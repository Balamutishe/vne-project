import { Metadata } from "next";
import { BasketView } from "@/features/basket";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Basket",
  description: "basket page",
};

export default function BasketPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-padding"}>
        <BasketView />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
