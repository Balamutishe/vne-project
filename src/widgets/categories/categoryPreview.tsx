import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export const CategoryPreview = () => {
  const { categoryCurrent, categoriesType } = useAppSelector(
    (state) => state.categoriesState,
  );

  return (
    <Image
      src={`/images/category/${categoriesType}-${categoryCurrent}.jpg`}
      alt={"PreviewCategory"}
      width={431}
      height={628}
    />
  );
};
