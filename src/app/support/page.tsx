import SupportView from "@/widgets/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "support page",
};

export default function SupportPage() {
  return <SupportView />;
}
