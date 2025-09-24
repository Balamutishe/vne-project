import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CategoriesSection } from "@/widgets/categories/categories";
import { ProductsList } from "@/widgets/products-list";

export default function Home() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <ProductsList />
        <CategoriesSection />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
