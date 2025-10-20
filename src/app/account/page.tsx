import { Metadata } from "next";
import { AccountView } from "@/features/account";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Account",
  description: "account page",
};

export default function AccountPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-margin"}>
        <AccountView />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
