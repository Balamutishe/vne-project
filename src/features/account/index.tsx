"use client";

import UserDataForm from "@/widgets/userDataForm";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import localFont from "next/font/local";
import { useAppSelector } from "@/store/hooks";
import { FormField } from "@/shared/ui/formField";
import ArrowDownSvg from "@/widgets/productDetails/icons/arrow-down.svg";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const AccountView = () => {
  return (
    <>
      <div className={"hidden sm:block"}>
        <Account />
      </div>
      <div className={"sm:hidden"}>
        <AccountMobile />
      </div>
      ;
    </>
  );
};

const Account = () => {
  const [varUserData, serVarUserData] = useState<"purchases" | "info">("info");

  return (
    <section className={"container-padding"}>
      <div className={"mb-5 sm:mb-10 xl:mb-20"}>
        <h1 className={`${damionFont.className} text-3xl xl:text-5xl`}>
          ПРИВЕТ, &lt;USER NAME&gt;!
        </h1>
      </div>
      <div className={"flex justify-between sm:gap-5 xl:gap-10"}>
        <aside className={"flex w-1/4 flex-col"}>
          <nav className={"mb-10 flex flex-col items-start lg:gap-5 xl:gap-10"}>
            <button
              className={clsx("hover:text-hover cursor-pointer", {
                "text-active": varUserData === "purchases",
              })}
              onClick={() => serVarUserData("purchases")}
            >
              МОИ ПОКУПКИ
            </button>
            <button
              className={clsx("hover:text-hover cursor-pointer", {
                "text-active": varUserData === "info",
              })}
              onClick={() => serVarUserData("info")}
            >
              МОИ ДАННЫЕ
            </button>
          </nav>
          {varUserData === "purchases" && (
            <div className={"mb-5"}>
              <PurchaseGeneralInfo />
            </div>
          )}
          <ButtonLogout />
        </aside>
        <div className={"flex w-3/4 flex-col justify-between"}>
          {varUserData === "purchases" && <PurchasesList variant={"desktop"} />}
          {varUserData === "info" && <AccountInfo />}
        </div>
      </div>
    </section>
  );
};

const AccountMobile = () => {
  const accountItems = ["МОИ ПОКУПКИ", "АДРЕС ДОСТАВКИ", "МОИ ДАННЫЕ"];

  const handleSetItemContent = (
    item: "МОИ ПОКУПКИ" | "АДРЕС ДОСТАВКИ" | "МОИ ДАННЫЕ",
  ) => {
    switch (item) {
      case "АДРЕС ДОСТАВКИ":
        return <FormDeliveryData />;
      case "МОИ ДАННЫЕ":
        return <UserDataForm />;
      case "МОИ ПОКУПКИ":
        return <PurchasesList variant={"mobile"} />;
    }
  };

  return (
    <section>
      <h1 className={`${damionFont.className} container-padding mb-5 text-3xl`}>
        ПРИВЕТ, &lt;USER NAME&gt;!
      </h1>
      <ul className={"mb-10"}>
        {accountItems.map((item) => (
          <li
            key={crypto.randomUUID()}
            className={"border-tertiary last:border-b-1"}
          >
            <AccountMobileItem
              item={item}
              children={handleSetItemContent(
                item as "МОИ ПОКУПКИ" | "АДРЕС ДОСТАВКИ" | "МОИ ДАННЫЕ",
              )}
            />
          </li>
        ))}
      </ul>
      <div className={"container-padding"}>
        <div className={"mb-10"}>
          <PurchaseGeneralInfo />
        </div>
        <ButtonLogout />
      </div>
    </section>
  );
};

const AccountMobileItem: FC<{ item: string; children: ReactNode }> = ({
  item,
  children,
}) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

  return (
    <article>
      <div
        className={clsx(
          "hover:text-hover group container-padding flex cursor-pointer justify-between border-t-1 border-[#a7a7a7]" +
            " py-2.5",
          { "border-b-1": visibleAdditional },
        )}
        onClick={handleSetVisibleAdditional}
      >
        <span>{item}</span>
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
        <div className={"container-padding w-full py-5"}>{children}</div>
      )}
    </article>
  );
};

const AccountInfo = () => {
  return (
    <section>
      <div className={"mb-2.5 flex w-full justify-between sm:mb-5"}>
        <div className={"w-[48%]"}>
          <UserDataForm />
        </div>
        <div className={"w-[48%]"}>
          <FormDeliveryData />
        </div>
      </div>

      <div className={"flex w-full flex-col justify-between gap-2.5 sm:gap-5"}>
        <FormField
          id={crypto.randomUUID()}
          labelText={"Пароль"}
          name={"password"}
          type="password"
          placeholder={"Сменить пароль"}
        />
        <button
          className={
            "bg-hover text-background hover:bg-hover/80 active:bg-active cursor-pointer p-2"
          }
        >
          СОХРАНИТЬ
        </button>
      </div>
    </section>
  );
};

const FormDeliveryData = () => {
  return (
    <form className={"flex flex-col justify-between gap-2.5 sm:gap-5"}>
      <FormField
        id={crypto.randomUUID()}
        labelText={"Регион"}
        name={"region"}
        type="text"
        placeholder={"Введите регион"}
      />
      <FormField
        id={crypto.randomUUID()}
        labelText={"Город"}
        name={"city"}
        type="text"
        placeholder={"Введите город"}
      />
      <FormField
        id={crypto.randomUUID()}
        labelText={"Улица"}
        name={"street"}
        type="text"
        placeholder={"Введите улицу"}
      />
      <div className={"flex flex-1 flex-wrap justify-between gap-2.5 sm:gap-5"}>
        <FormField
          id={crypto.randomUUID()}
          labelText={"Дом"}
          name={"house"}
          type="number"
          placeholder={"Номер дома"}
          containerStyle={"w-[47%]"}
        />
        <FormField
          id={crypto.randomUUID()}
          labelText={"Подъезд"}
          name={"entrance"}
          type="number"
          placeholder={"Номер подъезда"}
          containerStyle={"w-[47%]"}
        />
        <FormField
          id={crypto.randomUUID()}
          labelText={"Квартира"}
          name={"apartment"}
          type="number"
          placeholder={"Номер квартиры"}
          containerStyle={"w-[47%]"}
        />
        <FormField
          id={crypto.randomUUID()}
          labelText={"Этаж"}
          name={"floor"}
          type="number"
          placeholder={"Номер этажа"}
          containerStyle={"w-[47%]"}
        />
      </div>
    </form>
  );
};

const PurchasesList: FC<{ variant: "desktop" | "mobile" }> = ({ variant }) => {
  const { products } = useAppSelector((state) => state.basketState);

  return (
    <ul
      className={clsx("border-tertiary", {
        "sm:last:border-b-1": products.length !== 0,
      })}
    >
      {products.length !== 0 ? (
        products.map((item, index) => (
          <li key={index}>
            {variant === "desktop" && (
              <PurchaseCard item={item} index={index} />
            )}
            {variant === "mobile" && <PurchaseProductDetails item={item} />}
          </li>
        ))
      ) : (
        <li>СПИСОК ПОКУПОК ПУСТ</li>
      )}
    </ul>
  );
};

const PurchaseCard: FC<{
  item: {
    _id: string;
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    imageUrl: string;
  };
  index: number;
}> = ({ item, index }) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

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
          <span>{item.name}</span>
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
      {visibleAdditional && <PurchaseProductDetails item={item} />}
    </article>
  );
};

const PurchaseProductDetails: FC<{
  item: {
    _id: string;
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    imageUrl: string;
  };
}> = ({ item }) => {
  return (
    <div
      className={
        "flex h-14 w-full items-center justify-between gap-2.5 text-[0.62rem] sm:justify-end sm:gap-10 sm:pr-20" +
        " sm:text-xs lg:text-base"
      }
    >
      <div className={"border-tertiary border-1 p-1 sm:border-0 sm:p-0"}>
        <Image
          src={item.imageUrl}
          alt={"Product preview"}
          width={33}
          height={41}
        />
      </div>
      <div>Цвет/{item.color}</div>
      <div>Размер/{item.size}</div>
      <div>Количество/{item.quantity} шт.</div>
      <div>Цена/{item.price * item.quantity} &#8381;</div>
    </div>
  );
};

const PurchaseGeneralInfo = () => {
  const { totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <section className={"flex flex-col items-start gap-5"}>
      <h3>НЕОПЛАЧЕННЫЕ ЗАКАЗЫ</h3>
      {totalPrice !== 0 ? (
        <div
          className={
            "border-tertiary flex w-full flex-col items-start gap-2.5 border-1 border-dashed p-2"
          }
        >
          <p>№ 7830–004747–8671: ORDER DATE</p>
          <div className={"flex w-full gap-2.5"}>
            <span>{totalPrice} &#8381;</span>
            <button className={"text-hover hover:text-active cursor-pointer"}>
              Ожидание оплаты
            </button>
          </div>
        </div>
      ) : (
        <p>У вас нет неоплаченных заказов</p>
      )}
    </section>
  );
};

const ButtonLogout = () => {
  return (
    <button
      className={
        "border-hover hover:bg-hover hover:text-background active:text-background active:bg-active w-full" +
        " cursor-pointer" +
        " border-1 p-2"
      }
    >
      ВЫЙТИ
    </button>
  );
};
