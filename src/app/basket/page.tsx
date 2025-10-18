import { Metadata } from "next";
import { Basket } from "@/features/basket";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Basket",
  description: "basket page",
};

export default function BasketPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} variant={"main"} />
      <Main className={"container-padding"}>
        <Basket />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
