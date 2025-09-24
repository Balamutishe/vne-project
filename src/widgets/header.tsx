"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  AccessoriesListView,
  CategoriesListView,
} from "@/widgets/categories/categories";
import { setCategoryHeaderType } from "@/widgets/categories/categoriesSlice";
import Image from "next/image";
import { FC, useState } from "react";

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={"mb-20 h-212"}>
      <section
        className={`relative flex h-16 items-center justify-between px-13.5 py-2.5 ${className}`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderActions />
      </section>
      <section className={"h-196 overflow-hidden"}>
        <Image
          src={"/images/preview.jpg"}
          alt={"Preview"}
          height={800}
          width={1440}
        />
      </section>
      <HeaderDropdownMenu />
    </header>
  );
};

const HeaderNav = () => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className={"flex w-2/5 items-center gap-8"}>
        <li
          key={crypto.randomUUID()}
          onClick={() => dispatch(setCategoryHeaderType("women"))}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          ЖЕНЩИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => dispatch(setCategoryHeaderType("men"))}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          МУЖЧИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => dispatch(setCategoryHeaderType("accessories"))}
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

const HeaderDropdownMenu = () => {
  const categoriesHeaderType = useAppSelector(
    (state) => state.categoriesState.categoriesHeaderType,
  );

  return (
    <section
      className={
        "bg-background absolute top-16 flex min-h-80 w-[1440px] flex-col border-t-1 border-zinc-950"
      }
    >
      <div className={"flex min-h-11.5 items-center border-b-1"}>
        <span
          className={
            "flex h-full w-[23%] items-center border-zinc-950 px-13.5 py-4"
          }
        >
          {categoriesHeaderType !== "accessories" && "ОДЕЖДА"}
        </span>
        <span
          className={
            "flex h-full w-[23%] items-center border-r-1 border-l-1 border-zinc-950 px-4 py-4"
          }
        >
          АКСЕССУАРЫ
        </span>
        {/*<span className={"flex w-[54%] items-center justify-end px-13.5"}>*/}
        {/*  <button*/}
        {/*    className={"cursor-pointer"}*/}
        {/*    onClick={() => setCategoriesType(null)}*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className={"svg-icon"}*/}
        {/*      src={"/images/close.svg"}*/}
        {/*      alt={"Close"}*/}
        {/*      width={34}*/}
        {/*      height={34}*/}
        {/*    />*/}
        {/*  </button>*/}
        {/*</span>*/}
      </div>
      <div className={"flex min-h-80"}>
        <div className={"w-[23%] px-13.5 py-4"}>
          <CategoriesListView listType={"header"} />
        </div>
        <div
          className={"w-[23%] border-r-1 border-l-1 border-zinc-950 px-4 py-4"}
        >
          <AccessoriesListView />
        </div>
      </div>
      <div className={"w-[54%]"}></div>
    </section>
  );
};
