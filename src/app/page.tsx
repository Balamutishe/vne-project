import { Metadata } from "next";
import {
  productGetByFilter,
  productGetByTop,
} from "@/lib/mongoRepository/actions";
import { ContainerPage, Footer, Main, Header } from "@/widgets";
import { CollectionsSection } from "@/widgets/collections";
import { ProductsList } from "@/widgets/productsList";
import { Suspense } from "react";

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
    <ContainerPage>
      <Header
        className={"container-margin"}
        variant={!productName ? "main" : "second"}
      />
      <Main className={"container-padding"}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <ProductsList
            data={data.list}
            title={!productName ? data.name : `ПОИСК ПО ИМЕНИ: ${productName}`}
            variant={!productName ? "main" : "category"}
          />
        </Suspense>
        {!productName && <CollectionsSection />}
      </Main>
      <Footer />
    </ContainerPage>
  );
}
