import Image from "next/image";
import { FC } from "react";

export const ProductDetailsImagesList: FC<{ imagesUrlList: string[] }> = ({
  imagesUrlList,
}) => {
  return (
    <ul>
      {imagesUrlList.map((imageUrl) => (
        <li key={imageUrl}>
          <Image src={imageUrl} alt={imageUrl} width={710} height={952} />
        </li>
      ))}
    </ul>
  );
};
