"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export const HeaderPreview = () => {
  const pathName = usePathname();

  if (pathName !== "/") return null;

  return (
    <Image
      src={"/images/preview-3.jpg"}
      alt={"Preview"}
      height={800}
      width={1440}
      className={"h-full w-full object-cover"}
    />
  );
};
