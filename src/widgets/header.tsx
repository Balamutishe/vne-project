"use client";

import Image from "next/image";
import { FC, useState } from "react";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const [categoriesType, setCategoriesType] = useState<
    "women" | "men" | "accessories" | null
  >(null);

  return (
    <header className={"relative h-16"}>
      <section
        className={`flex h-full items-center justify-between px-13.5 py-2.5 ${className}`}
      >
        <HeaderNav setCategoriesType={setCategoriesType} />
        <HeaderLogo />
        <HeaderActions />
      </section>
      {categoriesType !== null && (
        <HeaderCategories
          categoriesType={categoriesType}
          setCategoriesType={setCategoriesType}
        />
      )}
    </header>
  );
};

const HeaderNav: FC<{
  setCategoriesType: (type: "women" | "men" | "accessories" | null) => void;
}> = ({ setCategoriesType }) => {
  return (
    <nav>
      <ul className={"flex w-2/5 items-center gap-8"}>
        <li
          key={crypto.randomUUID()}
          onClick={() => setCategoriesType("women")}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          ЖЕНЩИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => setCategoriesType("men")}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          МУЖЧИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => setCategoriesType("accessories")}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          АКСЕССУАРЫ
        </li>
      </ul>
    </nav>
  );
};

const HeaderLogo = () => {
  return (
    <div className={"flex w-1/5 items-center justify-center"}>
      <Image
        src={"/images/logo.svg"}
        alt={"Logo"}
        width={115}
        height={31}
        priority={true}
      />
    </div>
  );
};

const HeaderActions = () => {
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);

  return (
    <div className={"flex w-2/5 items-center justify-end gap-8"}>
      {visibleSearch ? (
        <input type={"text"} className={"h-11 w-86 border-1 border-zinc-950"} />
      ) : (
        <button
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          О БРЕНДЕ
        </button>
      )}

      <Image
        src={"/images/search.svg"}
        alt={"Search"}
        width={24}
        height={24}
        priority={true}
        onClick={() => setVisibleSearch((visible) => !visible)}
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
  );
};

const categoriesMen = [
  {
    id: crypto.randomUUID(),
    name: "Брюки и джинсы",
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Рубашки",
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Майки и футболки",
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Худи и свитеры",
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Пиджаки",
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Верхняя одежда",
    count: 1,
  },
];
const categoriesWomen = [
  {
    id: crypto.randomUUID(),
    name: "Платья",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Брюки и джинсы",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Юбки",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Свитеры",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Жакеты",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Топы и футболки",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Рубашки",
    count: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Верхняя одежда",
    count: 2,
  },
];
const categoriesAccessories = [
  {
    id: crypto.randomUUID(),
    name: "Шапки",
    count: 3,
  },
  {
    id: crypto.randomUUID(),
    name: "Шарфы",
    count: 3,
  },
  {
    id: crypto.randomUUID(),
    name: "Капюшоны",
    count: 3,
  },
  {
    id: crypto.randomUUID(),
    name: "Балаклавы",
    count: 3,
  },
];

const HeaderCategories: FC<{
  categoriesType: "women" | "men" | "accessories";
  setCategoriesType: (type: "women" | "men" | "accessories" | null) => void;
}> = ({ categoriesType, setCategoriesType }) => {
  return (
    <section
      className={
        "bg-background absolute flex min-h-81 w-full flex-col border-t-1 border-zinc-950"
      }
    >
      <div className={"flex min-h-11.5 items-center border-b-1"}>
        <span
          className={
            "flex h-full w-[23%] items-center border-r-1 border-zinc-950 px-13.5 py-4"
          }
        >
          {categoriesType !== "accessories" && "ОДЕЖДА"}
        </span>
        <span
          className={
            "flex h-full w-[23%] items-center border-r-1 border-zinc-950 px-4 py-4"
          }
        >
          АКСЕССУАРЫ
        </span>
        <span className={"flex w-[54%] items-center justify-end px-13.5"}>
          <button
            className={"cursor-pointer"}
            onClick={() => setCategoriesType(null)}
          >
            <Image
              className={"svg-icon"}
              src={"/images/close.svg"}
              alt={"Close"}
              width={34}
              height={34}
            />
          </button>
        </span>
      </div>
      <div className={"flex min-h-68"}>
        <ul className={"w-[23%] border-r-1 border-zinc-950 px-13.5 py-4"}>
          {categoriesType === "men" &&
            categoriesMen.map((category) => (
              <li
                key={category.id}
                className={
                  "hover:text-hover active:text-active cursor-pointer transition-colors"
                }
              >
                {category.name} ({category.count})
              </li>
            ))}
          {categoriesType === "women" &&
            categoriesWomen.map((category) => (
              <li
                key={category.id}
                className={
                  "hover:text-hover active:text-active cursor-pointer transition-colors"
                }
              >
                {category.name} ({category.count})
              </li>
            ))}
        </ul>
        <ul className={"w-[23%] border-r-1 border-zinc-950 px-4 py-4"}>
          {categoriesAccessories.map((category) => (
            <li
              key={category.id}
              className={
                "hover:text-hover active:text-active cursor-pointer transition-colors"
              }
            >
              {category.name} ({category.count})
            </li>
          ))}
        </ul>
      </div>
      <div className={"w-2/4"}>
        <div className={"h-11.5"}></div>
      </div>
    </section>
  );
};
