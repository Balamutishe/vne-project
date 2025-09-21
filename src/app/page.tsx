import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { ProductList } from "@/widgets/product-list";

export default function Home() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <ProductList />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
