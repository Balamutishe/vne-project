import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { Categories } from "@/features/categories";
import { ProductsList } from "@/widgets/products-list";

export default function Home() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <ProductsList />
        <Categories />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
