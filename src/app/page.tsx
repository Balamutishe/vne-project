import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CategoriesSection } from "@/widgets/categories";
import { ProductsListView } from "@/widgets/products/productsList";

export const metadata: Metadata = {
  title: "Main",
  description: "main page",
};

export default function Home() {
  return (
    <ContainerPage>
      <Header className={"mb-20"} />
      <Main className={"px-13.5"}>
        <ProductsListView />
        <CategoriesSection />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
