import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CategoriesSection } from "@/widgets/categories";
import { ProductsList } from "@/widgets/productsList";

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
