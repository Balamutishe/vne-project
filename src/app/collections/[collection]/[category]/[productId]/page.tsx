import {
  productGetById,
  TCategoriesNames,
  TCollectionsNames,
} from "@/lib/mongoRepository/actions";
import { ContainerPage, Footer, Header, Main } from "@/widgets";
import { ProductDetails } from "@/widgets/Products/ProductDetails";
import { Metadata } from "next";

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

  return <ProductDetails product={product} />;
}
