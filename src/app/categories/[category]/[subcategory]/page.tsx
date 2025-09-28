import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { ProductsListView } from "@/widgets/productsList";

export const metadata: Metadata = {
  title: "Category",
  description: "category page",
};

export default function CategoriesPage() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <ProductsListView />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
