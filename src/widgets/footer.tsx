import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={"h-77"}>
      <section className={"h-full"}>
        <FooterHeader />
        <FooterSocials />
      </section>
    </footer>
  );
};

const FooterHeader = () => {
  return (
    <div
      className={
        "flex h-16 items-center justify-between border-t-1 border-b-1 border-zinc-950"
      }
    >
      <div
        className={
          "flex w-1/4 items-center justify-start border-r-1 border-zinc-950 px-13.5 py-4"
        }
      >
        <Image src={"/images/logo.svg"} alt={"Logo"} width={115} height={31} />
      </div>
      <div
        className={
          "flex w-1/4 items-center justify-start border-r-1 border-zinc-950 px-4 py-4"
        }
      >
        КОМПАНИЯ
      </div>
      <div
        className={
          "flex w-1/4 items-center justify-start border-r-1 border-zinc-950 px-4 py-4"
        }
      >
        ПОМОЩЬ
      </div>
      <div
        className={"flex w-1/4 items-center justify-start py-4 pr-13.5 pl-4"}
      >
        СОЦСЕТИ
      </div>
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div className={"flex justify-between text-base"}>
      <div className={"w-1/4 border-r-1 border-zinc-950 py-8 pr-4 pl-13.5"}>
        Мы создаём простую и качественную базовую одежду вне времени и моды —
        комфортную, универсальную и отражающую индивидуальность.
      </div>
      <div className={"w-1/4 border-r-1 border-zinc-950 px-4 py-8"}>
        <ul className={"flex flex-col gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            О нас
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Документы
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Контакты
          </li>
        </ul>
      </div>
      <div className={"w-1/4 border-r-1 border-zinc-950 px-4 py-8"}>
        <ul className={"flex flex-col gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Доставка
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Возврат
          </li>
        </ul>
      </div>
      <div className={"w-1/4 py-8 pr-13.5 pl-4"}>
        <ul className={"flex flex-col gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Вконтакте
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Инстаграм
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Телеграм
          </li>
        </ul>
      </div>
    </div>
  );
};
