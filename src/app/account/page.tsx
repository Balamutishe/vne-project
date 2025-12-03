import AccountView from "@/widgets/Account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Account page",
};

export default function AccountPage() {
  return <AccountView />;
}
