import { SupportView } from "@/widgets/Support";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Support",
  description: "support page",
};

export default function SupportPage() {
  return <SupportView />;
}
