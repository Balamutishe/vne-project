import {
  productGetById,
  TCategoriesNames,
  TCollectionsNames,
} from "@/lib/mongoRepository/actions";
import { Metadata } from "next";
import { Index } from "@/widgets/productDetails";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Product",
  description: "product details page",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    collection: TCollectionsNames;
    category: TCategoriesNames;
    productId: string;
  }>;
}) {
  const { productId } = await params;
  const product = await productGetById(productId);

  return (
    <ContainerPage>
      <Header />
      <Main className={"container-padding"}>
        <Index product={product} />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
