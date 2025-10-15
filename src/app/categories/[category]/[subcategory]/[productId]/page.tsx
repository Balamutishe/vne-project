import { ProductDetails } from "@/widgets/products/productDetails";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Product",
  description: "product details page",
};

export default function CategoriesPage() {
  return (
    <ContainerPage>
      <Header />
      <Main className={"container-padding"}>
        <ProductDetails />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
