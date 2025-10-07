import { Account } from "@/features/account";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Account",
  description: "account page",
};

export default function AccountPage() {
  return (
    <ContainerPage>
      <Header className={"mb-20"} />
      <Main>
        <Account />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
