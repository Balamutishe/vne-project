import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header, Brand } from "@/widgets";

export const metadata: Metadata = {
  title: "Brand",
  description: "brand about page",
};

export default function BrandPage() {
  return (
    <ContainerPage>
      <Header />
      <Main className={"px-13.5"}>
        <Brand />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
