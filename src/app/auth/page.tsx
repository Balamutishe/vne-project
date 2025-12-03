import { Auth } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "auth page",
};

export default function AuthPage() {
  return <Auth />;
}
