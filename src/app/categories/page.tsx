import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { ProductsListView } from "@/widgets/products/productsList";

export const metadata: Metadata = {
  title: "Category",
  description: "category page",
};

export default function ProductPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-padding"}>
        <ProductsListView />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
