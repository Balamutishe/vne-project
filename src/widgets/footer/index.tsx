"use client";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import ArrowDownSvg from "@/widgets/products/icons/arrow-down.svg";
import { FC, useState } from "react";
import InstagramSvg from "./icons/instagram.svg";
import VkSvg from "./icons/vk.svg";
import TelegramSvg from "./icons/telegram.svg";

export const Footer = () => {
  return (
    <footer className={"sm:max-h-77"}>
      <div className={"hidden sm:block"}>
        <FooterHeader />
        <FooterSocials />
      </div>
      <div className={"sm:hidden"}>
        <FooterMobile />
      </div>
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

const FooterMobile = () => {
  return (
    <section
      className={
        "flex-center-between border-tertiary container-padding flex-col gap-10 border-t-1 border-b-1 py-8"
      }
    >
      <section className={"flex-center-between flex-col gap-4"}>
        <div>
          <Image
            src={"/images/logo.svg"}
            alt={"Logo"}
            width={115}
            height={31}
          />
        </div>
        <p>
          Мы создаём простую и качественную базовую одежду вне времени и моды —
          комфортную, универсальную и отражающую индивидуальность.
        </p>
      </section>
      <SupportList />
      <section className={"flex-center-between flex-col gap-4"}>
        <h3>СОЦСЕТИ</h3>
        <ul className={"flex items-center justify-center gap-8"}>
          <li>
            <TelegramSvg />
          </li>
          <li>
            <VkSvg />
          </li>
          <li>
            <InstagramSvg />
          </li>
        </ul>
      </section>
    </section>
  );
};

const SupportList = () => {
  const supportList = [
    {
      title: "КОМПАНИЯ",
      list: [
        {
          name: "О нас",
          href: "/brand",
        },
        {
          name: "Документы",
          href: "/support/documents",
        },
        {
          name: "Контакты",
          href: "/support/contacts",
        },
      ],
    },
    {
      title: "ПОМОЩЬ",
      list: [
        {
          name: "Доставка",
          href: "/support/delivery",
        },
        {
          name: "Возврат",
          href: "/support/recovery",
        },
      ],
    },
  ];

  return (
    <ul className={"flex w-full flex-col justify-between gap-4"}>
      {supportList.map((item) => (
        <li key={crypto.randomUUID()} className={"border-tertiary border-b-1"}>
          <SupportListItem title={item.title} list={item.list} />
        </li>
      ))}
    </ul>
  );
};

const SupportListItem: FC<{
  title: string;
  list: {
    name: string;
    href: string;
  }[];
}> = ({ title, list }) => {
  const [visible, setVisibility] = useState<boolean>(false);

  return (
    <article className={"flex-center-between flex-col"}>
      <div
        className={"group flex-center-between w-full gap-2 py-2"}
        onClick={() => setVisibility((prev) => !prev)}
      >
        <h3 className={"group-active:text-hover"}>{title}</h3>
        <span>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-active:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": visible,
              },
            )}
          />
        </span>
      </div>
      <ul
        className={clsx("flex w-full flex-col items-start gap-6 py-4", {
          hidden: !visible,
        })}
      >
        {list.map((deepItem) => (
          <li
            key={crypto.randomUUID()}
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={deepItem.href}>{deepItem.name}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
