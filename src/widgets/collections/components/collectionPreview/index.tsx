"use client";

import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export const CollectionPreview = () => {
  const { collectionMainType, categoryMainType } = useAppSelector(
    (state) => state.collectionsState,
  );

  return (
    <Image
      src={`/images/category/${collectionMainType}/${collectionMainType}-${categoryMainType}.jpg`}
      alt={"PreviewCategory"}
      width={431}
      height={628}
    />
  );
};
