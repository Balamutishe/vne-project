import ArrowDownSvg from "@/widgets/productDetails/icons/arrow-down.svg";
import { clsx } from "clsx";
import { FC, useState } from "react";

export const ProductDetailsDescription: FC<{
  description: string;
  care: string;
  sizeChart: {
    sizeShared: string;
    sizeRussian: number;
    sizeBreast: number;
    sizeWaist: number;
    sizeHips: number;
  }[];
}> = ({ description, care, sizeChart }) => {
  const listDescriptionProduct: {
    abbreviation: string;
    title: string;
    data:
      | string
      | {
          sizeShared: string;
          sizeRussian: number;
          sizeBreast: number;
          sizeWaist: number;
          sizeHips: number;
        }[];
  }[] = [
    {
      abbreviation: "description",
      title: "ОПИСАНИЕ",
      data: description,
    },
    {
      abbreviation: "care",
      title: "УХОД",
      data: care,
    },
    {
      abbreviation: "sizeChart",
      title: "ТАБЛИЦА РАЗМЕРОВ",
      data: sizeChart,
    },
  ];

  return (
    <ul className={"border-tertiary last:border-b-1"}>
      {listDescriptionProduct.map((item, index) => (
        <li key={index}>
          <ProductDetailsDescriptionItem item={item} index={index} />
        </li>
      ))}
    </ul>
  );
};

const ProductDetailsDescriptionItem: FC<{
  item: {
    abbreviation: string;
    title: string;
    data:
      | string
      | {
          sizeShared: string;
          sizeRussian: number;
          sizeBreast: number;
          sizeWaist: number;
          sizeHips: number;
        }[];
  };
  index: number;
}> = ({ item, index }) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

  const listSizeChartHeader = ["РАЗМЕР", "РОССИЯ", "ГРУДЬ", "ТАЛИЯ", "БЕДРА"];

  return (
    <article>
      <div
        className={clsx(
          "hover:text-hover group flex cursor-pointer justify-between border-t-1 border-[#a7a7a7] px-2 py-2.5",
          { "border-b-1": visibleAdditional },
        )}
        onClick={handleSetVisibleAdditional}
      >
        <span>
          <span className={"pr-14"}>(0{index + 1})</span>
          <span>{item.title}</span>
        </span>
        <span className={"flex items-center"}>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-hover:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": visibleAdditional,
              },
            )}
          />
        </span>
      </div>
      {visibleAdditional && (
        <div className={"px-2 py-2 sm:pt-4 sm:pb-4 sm:pl-50"}>
          {!Array.isArray(item.data) && <p>{item.data}</p>}
          {Array.isArray(item.data) && (
            <ul className={"flex flex-col justify-between"}>
              <li className={"flex justify-between"} key={crypto.randomUUID()}>
                {listSizeChartHeader.map((item) => (
                  <span
                    key={crypto.randomUUID()}
                    className={"flex w-1/5 items-center justify-center"}
                  >
                    {item}
                  </span>
                ))}
              </li>
              {item.data.map((deepItem) => (
                <li
                  key={crypto.randomUUID()}
                  className={"flex justify-between"}
                >
                  {Object.entries(deepItem).map(([_, value]) => (
                    <span
                      className={"flex w-1/5 items-center justify-center"}
                      key={crypto.randomUUID()}
                    >
                      {value}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
};
