"use client";

import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowSvg from "@/shared/icons/arrow-small.svg";

export const SupportNav = () => {
  const { content } = useParams<{
    content: "delivery" | "recovery" | "documents" | "contacts";
  }>();

  const baseUrl = "/support";
  const navList = [
    { url: `${baseUrl}/delivery`, name: "ДОСТАВКА" },
    { url: `${baseUrl}/recovery`, name: "ВОЗВРАТ" },
    { url: `${baseUrl}/documents`, name: "ДОКУМЕНТЫ" },
    { url: `${baseUrl}/contacts`, name: "КОНТАКТЫ" },
  ];
  const activeLink = navList.find(
    (link) => link.url === `${baseUrl}/${content}`,
  );

  return (
    <nav>
      <ul
        className={clsx("flex flex-col gap-8 sm:pt-0", {
          "pt-6": !content,
        })}
      >
        {navList.map((link) => (
          <li
            key={link.name}
            className={clsx("hover:text-hover flex items-center gap-2", {
              "sm:text-hover sm:hover:text-active border-tertiary container-padding border-b-1 py-2 sm:border-none sm:p-0":
                link === activeLink,
              "hidden sm:flex": link !== activeLink && content,
            })}
          >
            <Link href={baseUrl}>
              <ArrowSvg
                width={16}
                height={16}
                className={clsx("sm:hidden", {
                  hidden: link !== activeLink,
                })}
              />
            </Link>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
