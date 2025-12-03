import { Payment } from "@/features/payment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
  description: "payment page",
};

export default function Home() {
  return <Payment />;
}
