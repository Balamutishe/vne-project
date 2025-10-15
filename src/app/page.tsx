import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CollectionsSection } from "@/widgets/collections";
import { ProductsListView } from "@/widgets/products/productsList";

export const metadata: Metadata = {
  title: "Main",
  description: "main page",
};

export default function Home() {
  return (
    <ContainerPage>
      <Header className={"mb-20"} />
      <Main className={"container-padding"}>
        <ProductsListView />
        <CollectionsSection />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
