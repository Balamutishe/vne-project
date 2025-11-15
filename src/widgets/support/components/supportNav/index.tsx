"use client";

import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowSvg from "../../icons/arrow-small.svg";

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

  return (
    <nav>
      <ul
        className={clsx("flex flex-col gap-8", {
          "pt-6": window.screen.width <= 640 && !content,
        })}
      >
        {navList.map((link) => (
          <li
            key={link.name}
            className={clsx("hover:text-hover flex items-center gap-2", {
              "text-hover hover:text-active":
                link.url === `${baseUrl}/${content}` &&
                window.screen.width > 640,
              hidden:
                link.url !== `${baseUrl}/${content}` &&
                window.screen.width <= 640 &&
                content,
              "border-tertiary container-padding border-b-1 py-2":
                link.url === `${baseUrl}/${content}` &&
                window.screen.width <= 640,
            })}
          >
            <Link href={baseUrl}>
              <ArrowSvg
                width={16}
                height={16}
                className={clsx("sm:hidden", {
                  hidden: link.url !== `${baseUrl}/${content}`,
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
