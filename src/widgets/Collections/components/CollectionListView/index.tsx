"use client";

import { FC } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  CollectionListMain,
  CollectionListHeader,
} from "@/widgets/collections/components/collectionListView/components";

const collectionsDataWithList = {
  men: [
    {
      group: "clothing",
      slug: "trousers",
      name: "Брюки и джинсы",
    },
    {
      group: "clothing",
      slug: "shirts",
      name: "Рубашки",
    },
    {
      group: "clothing",
      slug: "t-shirts",
      name: "Майки и футболки",
    },
    {
      group: "clothing",
      slug: "sweaters",
      name: "Худи и свитеры",
    },
    {
      group: "clothing",
      slug: "jackets",
      name: "Пиджаки",
    },
    {
      group: "clothing",
      slug: "outerwear",
      name: "Верхняя одежда",
    },
    {
      group: "accessories",
      slug: "bags",
      name: "Сумки",
    },
    {
      group: "accessories",
      slug: "hoods",
      name: "Капюшоны",
    },
    {
      group: "accessories",
      slug: "scarfs",
      name: "Шарфы",
    },
    {
      group: "accessories",
      slug: "caps",
      name: "Шапки",
    },
    {
      group: "accessories",
      slug: "balaclavas",
      name: "Балаклавы",
    },
  ],

  women: [
    {
      group: "clothing",
      slug: "dresses",
      name: "Платья",
    },
    {
      group: "clothing",
      slug: "trousers",
      name: "Брюки и джинсы",
    },
    {
      group: "clothing",
      slug: "skirts",
      name: "Юбки",
    },
    {
      group: "clothing",
      slug: "sweaters",
      name: "Свитеры",
    },
    {
      group: "clothing",
      slug: "jackets",
      name: "Жакеты",
    },
    {
      group: "clothing",
      slug: "t-shirts",
      name: "Топы и футболки",
    },
    {
      group: "clothing",
      slug: "shirts",
      name: "Рубашки",
    },
    {
      group: "clothing",
      slug: "outerwear",
      name: "Верхняя одежда",
    },
    {
      group: "accessories",
      slug: "bags",
      name: "Сумки",
    },
    {
      group: "accessories",
      slug: "hoods",
      name: "Капюшоны",
    },
    {
      group: "accessories",
      slug: "scarfs",
      name: "Шарфы",
    },
    {
      group: "accessories",
      slug: "caps",
      name: "Шапки",
    },
    {
      group: "accessories",
      slug: "balaclavas",
      name: "Балаклавы",
    },
  ],

  unisex: [
    {
      group: "accessories",
      slug: "bags",
      name: "Сумки",
    },
    {
      group: "accessories",
      slug: "hoods",
      name: "Капюшоны",
    },
    {
      group: "accessories",
      slug: "scarfs",
      name: "Шарфы",
    },
    {
      group: "accessories",
      slug: "caps",
      name: "Шапки",
    },
    {
      group: "accessories",
      slug: "balaclavas",
      name: "Балаклавы",
    },
  ],
};

export const CollectionListView: FC<{
  variant: "main" | "header";
}> = ({ variant }) => {
  const { collectionHeaderType, collectionMainType } = useAppSelector(
    (state) => state.collectionsState,
  );

  const currentDataWithList =
    variant === "header"
      ? collectionsDataWithList[collectionHeaderType]
      : collectionsDataWithList[collectionMainType];

  switch (variant) {
    case "header":
      return <CollectionListHeader collectionData={currentDataWithList} />;
    case "main":
      return <CollectionListMain collectionData={currentDataWithList} />;
  }
};
