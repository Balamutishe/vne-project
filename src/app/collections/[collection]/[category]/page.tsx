import {
  categoryGet,
  TCategoriesNames,
  TCollectionsNames,
} from "@/lib/mongoRepository/actions";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { ProductsList } from "@/widgets/productsList";

export const metadata: Metadata = {
  title: "Category",
  description: "category page",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    collection: TCollectionsNames;
    category: TCategoriesNames;
  }>;
}) {
  const { collection, category } = await params;
  const { name, list } = await categoryGet(collection, category);

  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-padding"}>
        <ProductsList data={list} title={name} variant={"category"} />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
