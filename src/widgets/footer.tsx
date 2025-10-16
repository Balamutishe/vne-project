import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"max-h-77"}>
      <FooterHeader />
      <FooterSocials />
    </footer>
  );
};

const FooterHeader = () => {
  return (
    <div
      className={
        "border-tertiary flex h-10 items-center justify-between border-t-1 border-b-1 sm:h-12 lg:h-14 xl:h-16" +
        " [&>*]:border-tertiary [&>*]:flex [&>*]:h-full [&>*]:w-1/4 [&>*]:items-center [&>*]:justify-start"
      }
    >
      <div className={"container-padding border-r-1"}>
        <Image src={"/images/logo.svg"} alt={"Logo"} width={115} height={31} />
      </div>
      <div className={"border-r-1 px-4"}>КОМПАНИЯ</div>
      <div className={"border-r-1 px-4"}>ПОМОЩЬ</div>
      <div className={"container-padding pl-4"}>СОЦСЕТИ</div>
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div
      className={
        "[&>*]:border-tertiary flex justify-between xl:text-base [&>*]:w-1/4 [&>*]:border-b-1 [&>*]:py-4" +
        " xl:[&>*]:py-8"
      }
    >
      <div className={"container-padding border-r-1"}>
        Мы создаём простую и качественную базовую одежду вне времени и моды —
        комфортную, универсальную и отражающую индивидуальность.
      </div>
      <div className={"container-padding border-r-1 px-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/brand"}>О нас</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/documents"}>Документы</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/contacts"}>Контакты</Link>
          </li>
        </ul>
      </div>
      <div className={"container-padding border-r-1 px-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/delivery"}>Доставка</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/recovery"}>Возврат</Link>
          </li>
        </ul>
      </div>
      <div className={"container-padding pl-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Вконтакте
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Инстаграм
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Телеграм
          </li>
        </ul>
      </div>
    </div>
  );
};
