import { ContainerPage, Footer, Main, Header } from "@/widgets";
import Image from "next/image";

export default function Home() {
  return (
    <ContainerPage>
      <Header className={"flex items-center justify-between"}>
        <nav>
          <ul className={"flex w-109.5 items-center justify-between"}>
            <li key={crypto.randomUUID()}>ЖЕНЩИНАМ</li>
            <li key={crypto.randomUUID()}>МУЖЧИНАМ</li>
            <li key={crypto.randomUUID()}>АКСЕССУАРЫ</li>
          </ul>
        </nav>
        <div>
          <Image
            src={"/images/logo.svg"}
            alt={"Logo"}
            width={115}
            height={31}
            priority={true}
          />
        </div>
        <div className={"flex w-74 items-center justify-between"}>
          <button>О БРЕНДЕ</button>
          <Image
            src={"/images/search.svg"}
            alt={"Search"}
            width={24}
            height={24}
            priority={true}
          />
          <Image
            src={"/images/user.svg"}
            alt={"Search"}
            width={24}
            height={24}
            priority={true}
          />
          <Image
            src={"/images/bag.svg"}
            alt={"Search"}
            width={24}
            height={24}
            priority={true}
          />
        </div>
      </Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </ContainerPage>
  );
}
