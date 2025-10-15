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
        "border-tertiary flex items-center justify-between border-t-1 border-b-1 lg:h-14 xl:h-16"
      }
    >
      <div
        className={
          "border-tertiary container-padding flex w-1/4 items-center justify-start border-r-1"
        }
      >
        <Image src={"/images/logo.svg"} alt={"Logo"} width={115} height={31} />
      </div>
      <div
        className={
          "border-tertiary flex w-1/4 items-center justify-start border-r-1 px-4 py-4"
        }
      >
        КОМПАНИЯ
      </div>
      <div
        className={
          "border-tertiary flex w-1/4 items-center justify-start border-r-1 px-4 py-4"
        }
      >
        ПОМОЩЬ
      </div>
      <div
        className={"flex w-1/4 items-center justify-start py-4 pr-13.5 pl-4"}
      >
        СОЦСЕТИ
      </div>
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div
      className={
        "[&>*]:border-tertiary flex justify-between xl:text-base [&>*]:w-1/4 [&>*]:border-b-1 [&>*]:py-8"
      }
    >
      <div className={"border-tertiary border-r-1 pr-4 pl-13.5"}>
        Мы создаём простую и качественную базовую одежду вне времени и моды —
        комфортную, универсальную и отражающую индивидуальность.
      </div>
      <div className={"border-tertiary border-r-1 lg:px-2 xl:px-4"}>
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
      <div className={"border-tertiary border-r-1 lg:px-2 xl:px-4"}>
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
      <div className={"pr-13.5 lg:pl-2 xl:pl-4"}>
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
