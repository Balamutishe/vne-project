import { Support } from "@/widgets/support";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Support",
  description: "support page",
};

export default function SupportPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main>
        <Support />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
