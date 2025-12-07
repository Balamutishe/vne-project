import { Metadata } from "next";
import { BasketView } from "@/features/Basket";

export const metadata: Metadata = {
  title: "Basket",
  description: "basket page",
};

export default function BasketPage() {
  return <BasketView />;
}
