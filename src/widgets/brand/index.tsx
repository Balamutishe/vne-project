import { SectionTitle } from "@/shared/ui/sectionTitle";
import Image from "next/image";
import { JSX } from "react";

export const Brand = () => {
  const imagesSrc = [
    "/images/brandPageImages/brandPage-1.jpg",
    "/images/brandPageImages/brandPage-2.jpg",
    "/images/brandPageImages/brandPage-3.jpg",
    "/images/brandPageImages/brandPage-4.jpg",
  ];

  return (
    <section>
      <div
        className={
          "border-tertiary sm:container-margin flex h-20 items-center justify-center sm:h-30 sm:border-b-1 lg:h-40" +
          " xl:h-50"
        }
      >
        <div
          className={
            "border-tertiary flex items-center sm:h-full sm:w-[52%] sm:border-l-1"
          }
        >
          <div className={"sm:p-10 xl:p-20"}>
            <SectionTitle title={"О БРЕНДЕ"} />
          </div>
        </div>
      </div>
      <div
        className={
          "container-margin py-2.5 sm:flex sm:justify-between sm:gap-10 sm:px-20 lg:px-30 lg:py-5 sm:[&>*]:w-1/2"
        }
      >
        <p className={"mb-10 sm:mb-0"}>
          VNE — это минимализм, за которым стоит смысл. Мы создаём удобную,
          лаконичную и продуманную одежду, которая подчёркивает личность,
          а не заменяет её.
          <br />
          <br />
          Наши вещи вне времени — потому что мимолётные тренды устают, а стиль
          остаётся.
        </p>
        <p className={"sm:mt-2.5 lg:mt-5"}>
          Мы верим, что современному человеку достаточно простого и понятного
          гардероба, чтобы выглядеть привлекательно в любой повседневной
          ситуации. Одежда VNE создана, чтобы служить дольше, сочетаться легко
          и ощущаться как вторая кожа.
          <br />
          Интеллект. Качество. Забота. Универсальность. Это не просто слова —
          это основа всего, что мы делаем.
        </p>
      </div>
      <div className={"container-margin sm:h-80 lg:h-110"}>
        <ul
          className={
            "flex max-h-120 flex-col flex-wrap justify-between gap-[0.5rem] sm:flex-row sm:gap-5" +
            " [&>*:nth-child(2)]:mb-10 [&>*:nth-child(3)]:mt-10 sm:[&>*:nth-child(3)]:mt-0" +
            " sm:[&>*:nth-child(2)]:mb-0 sm:[&>*:nth-child(even)]:mt-10"
          }
        >
          {imagesSrc.map(
            (src: string, index: number): JSX.Element => (
              <li
                key={index}
                className={"h-52 w-[49%] sm:h-70 sm:w-[23%] xl:h-97"}
              >
                <Image
                  src={src}
                  alt={"Brand image"}
                  width={318}
                  height={389}
                  priority={true}
                  className={"size-full object-cover"}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
