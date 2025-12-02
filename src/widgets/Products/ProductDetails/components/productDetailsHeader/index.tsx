import ColorSvg from "@/widgets/productDetails/icons/colorImage.svg";
import { clsx } from "clsx";
import { FC } from "react";

export const ProductDetailsHeader: FC<{
  name: string;
  price: number;
  colors: string[];
  currentSize: string;
  setSize: (size: string) => void;
  currentColor: string;
  setCurrentColor: (size: string) => void;
}> = ({
  name,
  price,
  colors,
  currentSize,
  setSize,
  setCurrentColor,
  currentColor,
}) => {
  const listSizes = ["XS", "S", "M", "L", "XL"];

  const handleSetSize = (size: string) => setSize(size);
  const handleSetColor = (color: string) => setCurrentColor(color);

  return (
    <div>
      <div
        className={
          "border-tertiary flex justify-between border-t-1 border-b-1 px-6 py-4 text-sm sm:px-30 sm:py-4 sm:text-xl"
        }
      >
        <span>{name}</span>
        <span>{price} &#8381;</span>
      </div>
      <div className={"container-margin px-6 py-4 sm:px-30 sm:py-4"}>
        <div className={"flex gap-2"}>
          {colors.map((color) => (
            <ColorSvg
              key={crypto.randomUUID()}
              width={49}
              height={49}
              className={clsx(`mb-4 cursor-pointer`, {
                "[&>*]:fill-hover": color === "blue",
                "[&>*]:fill-tertiary": color === "gray",
                "[&>*]:fill-violet": color === "violet",
                "[&>*]:fill-white [&>*]:stroke-[#a7a7a7]": color === "white",
                "[&>*]:fill-black": color === "black",
                "scale-110": color === currentColor,
              })}
              onClick={() => handleSetColor(color)}
            />
          ))}
        </div>
        <div className={"flex justify-start gap-2 text-sm"}>
          {listSizes.map((size) => (
            <button
              key={crypto.randomUUID()}
              className={clsx(
                "hover:text-background hover:bg-hover border-tertiary h-8.5 w-8.5 cursor-pointer border-1",
                { "text-background bg-hover": size === currentSize },
              )}
              onClick={() => handleSetSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
