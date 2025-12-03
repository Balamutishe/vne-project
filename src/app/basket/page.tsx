import { Metadata } from "next";
import { BasketView } from "@/features/basket";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Basket",
  description: "basket page",
};

export default function BasketPage() {
  return <BasketView />;
}
