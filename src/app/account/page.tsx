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
      <Main className={"mb-20 px-13.5"}>
        <Account />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
