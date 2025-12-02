"use client";

import ArrowDownSvg from "@/widgets/Products/ProductDetails/icons/arrow-down.svg";
import { clsx } from "clsx";
import Link from "next/link";
import { FC, useState } from "react";

const ListItem: FC<{
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

export default ListItem;
