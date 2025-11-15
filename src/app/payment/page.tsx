import { Payment } from "@/features/payment";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Payment",
  description: "payment page",
};

export default function Home() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-padding container-margin"}>
        <Payment />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
