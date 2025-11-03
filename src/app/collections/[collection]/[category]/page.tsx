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
  searchParams,
}: {
  params: Promise<{
    collection: TCollectionsNames;
    category: TCategoriesNames;
  }>;
  searchParams: Promise<{
    productName: string;
  }>;
}) {
  const { collection, category } = await params;
  const { productName } = await searchParams;
  const { name, list } = await categoryGet(collection, category).then(
    (data) => {
      if (productName)
        return {
          ...data,
          list: data.list.filter((item) => item.name === productName),
        };

      return data;
    },
  );

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
