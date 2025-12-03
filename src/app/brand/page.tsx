import { Metadata } from "next";
import { Brand } from "@/widgets/Brand";

export const metadata: Metadata = {
  title: "Brand",
  description: "brand about page",
};

export default function BrandPage() {
  return <Brand />;
}
