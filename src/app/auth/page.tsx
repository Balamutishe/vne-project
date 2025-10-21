import { Auth } from "@/features/auth";
import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Auth",
  description: "auth page",
};

export default function AuthPage() {
  return (
    <ContainerPage>
      <Header className={"container-margin"} />
      <Main className={"container-margin"}>
        <Auth />
      </Main>
      <Footer />
    </ContainerPage>
  );
}
