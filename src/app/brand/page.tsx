import { Metadata } from "next";
import { ContainerPage, Footer, Main, Header, Brand } from "@/widgets";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Brand",
  description: "brand about page",
};

export default function BrandPage() {
  return (
    <Suspense fallback={<div>ЗАГРУЗКА...</div>}>
      <ContainerPage>
        <Header />
        <Main className={"px-13.5"}>
          <Brand />
        </Main>
        <Footer />
      </ContainerPage>
    </Suspense>
  );
}
