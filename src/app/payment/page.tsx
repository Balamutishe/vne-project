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
      <Header />
      <Main className={"px-13.5"}>
        <Payment />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
