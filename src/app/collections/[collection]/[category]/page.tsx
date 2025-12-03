import {
  categoryGet,
  TCategoriesNames,
  TCollectionsNames,
} from "@/lib/mongoRepository/actions";
import { ProductsList } from "@/widgets/Products/ProductsList";
import { Metadata } from "next";

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
  const { name, list } = await categoryGet(
    collection,
    category,
    productName || "",
  );

  return <ProductsList data={list} title={name} variant={"category"} />;
}
