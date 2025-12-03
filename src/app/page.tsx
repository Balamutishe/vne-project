import {
  productGetByFilter,
  productGetByTop,
} from "@/lib/mongoRepository/actions";
import { ContainerPage, Footer, Header, Main } from "@/widgets";
import { CollectionsSection } from "@/widgets/Collections";
import { ProductsList } from "@/widgets/Products/ProductsList";
import { Preview } from "@/widgets/Preview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "main page",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    productName: string;
  }>;
}) {
  const { productName } = await searchParams;
  const data = !productName
    ? await productGetByTop()
    : await productGetByFilter(productName);

  return (
    <>
      {!productName && <Preview />}
      <ProductsList
        data={data.list}
        title={!productName ? data.name : `ПОИСК ПО ИМЕНИ: ${productName}`}
        variant={!productName ? "main" : "category"}
      />
      {!productName && <CollectionsSection />}
    </>
  );
}
