import { Metadata } from "next";
import { ProductDetails } from "@/widgets/productDetails/productDetails";
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
