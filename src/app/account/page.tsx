import { ContainerPage, Footer, Header, Main } from "@/widgets";
import { AccountView } from "@/widgets/Account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Account page",
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
