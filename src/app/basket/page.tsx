import { Metadata } from "next";
import { BasketView } from "@/features/basket";

export const metadata: Metadata = {
  title: "Basket",
  description: "basket page",
};

export default function BasketPage() {
  return <BasketView />;
}
