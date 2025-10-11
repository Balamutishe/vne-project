import localFont from "next/font/local";
import Image from "next/image";
import { JSX } from "react";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

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
          "mb-10 flex h-50 items-center justify-center border-b-1 border-zinc-950"
        }
      >
        <div
          className={
            "flex h-full w-[52%] items-center border-l-1 border-zinc-950"
          }
        >
          <h1 className={`${damionFont.className} px-20 text-7xl`}>О БРЕНДЕ</h1>
        </div>
      </div>
      <div
        className={"mb-10 flex justify-between gap-10 px-30 py-5 [&>*]:w-1/2"}
      >
        <p>
          VNE — это минимализм, за которым стоит смысл. Мы создаём удобную,
          лаконичную и продуманную одежду, которая подчёркивает личность,
          а не заменяет её.
          <br />
          <br />
          Наши вещи вне времени — потому что мимолётные тренды устают, а стиль
          остаётся.
        </p>
        <p className={"mt-5"}>
          Мы верим, что современному человеку достаточно простого и понятного
          гардероба, чтобы выглядеть привлекательно в любой повседневной
          ситуации. Одежда VNE создана, чтобы служить дольше, сочетаться легко
          и ощущаться как вторая кожа.
          <br />
          Интеллект. Качество. Забота. Универсальность. Это не просто слова —
          это основа всего, что мы делаем.
        </p>
      </div>
      <div className={"mb-15 max-h-110"}>
        <ul
          className={
            "flex h-full justify-between gap-10 [&>*:nth-child(even)]:mt-10"
          }
        >
          {imagesSrc.map(
            (src: string, index: number): JSX.Element => (
              <li key={index} className={"max-h-97 w-1/4"}>
                <Image
                  src={src}
                  alt={"Brand image"}
                  width={318}
                  height={389}
                  priority={true}
                  className={"h-full w-full"}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
