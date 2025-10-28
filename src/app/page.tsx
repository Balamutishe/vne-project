import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CollectionsSection } from "@/widgets/collections";
import { ProductsListView } from "@/widgets/productsList";

export const metadata: Metadata = {
  title: "Main",
  description: "main page",
};

export default function Home() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} variant={"main"} />
      <Main className={"container-padding"}>
        <ProductsListView />
        <CollectionsSection />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
