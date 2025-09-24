import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CategoriesMain } from "@/widgets/categories";
import { ProductsList } from "@/widgets/products-list";

export default function Home() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <ProductsList />
        <CategoriesMain />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
