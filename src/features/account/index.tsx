"use client";

import { FormField } from "@/shared/ui/formField";
import { useAppSelector } from "@/store/hooks";
import ArrowDownSvg from "@/widgets/products/icons/arrow-down.svg";
import { clsx } from "clsx";
import localFont from "next/font/local";
import Image from "next/image";
import { FC, useState } from "react";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const Account = () => {
  const [varUserData, serVarUserData] = useState<"purchases" | "info">("info");

  return (
    <section>
      <div className={"lg:mb-10 xl:mb-20"}>
        <h1 className={`${damionFont.className} lg:text-3xl xl:text-5xl`}>
          ПРИВЕТ, &lt;USER NAME&gt;!
        </h1>
      </div>
      <div className={"flex justify-between lg:gap-5 xl:gap-10"}>
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
          {varUserData === "purchases" ? (
            <article className={"flex h-50 flex-col gap-10"}>
              <div className={"flex flex-col items-start gap-4"}>
                <div>№ 7830–004747–8671:</div>
                <div>
                  <span className={"mr-4"}>ORDER DATE</span>
                  <span>ORDER PRICE</span>
                </div>
                <button
                  className={"text-hover hover:text-active cursor-pointer"}
                >
                  Ожидание оплаты
                </button>
              </div>
              <button
                className={
                  "border-hover hover:bg-hover hover:text-background active:text-background active:bg-active w-full" +
                  " cursor-pointer" +
                  " border-1 p-2"
                }
              >
                ВЫЙТИ
              </button>
            </article>
          ) : (
            <button
              className={
                "border-hover hover:bg-hover hover:text-background active:text-background active:bg-active w-full" +
                " cursor-pointer" +
                " border-1 p-2"
              }
            >
              ВЫЙТИ
            </button>
          )}
        </aside>
        <div className={"flex w-3/4 flex-col justify-between"}>
          {varUserData === "purchases" && <PurchasesList />}
          {varUserData === "info" && <AccountInfo />}
        </div>
      </div>
    </section>
  );
};

const AccountInfo = () => {
  return (
    <form>
      <div className={"mb-5 flex w-full justify-between"}>
        <div
          className={
            "flex w-[48%] flex-col justify-between lg:gap-2.5 xl:gap-5"
          }
        >
          <FormField
            id={crypto.randomUUID()}
            labelText={"Фамилия"}
            name={"surname"}
            type="text"
            placeholder={"Иванов"}
          />
          <FormField
            id={crypto.randomUUID()}
            labelText={"Имя"}
            name={"firstname"}
            type="text"
            placeholder={"Иван"}
          />
          <FormField
            id={crypto.randomUUID()}
            labelText={"Отчество"}
            name={"lastname"}
            type="text"
            placeholder={"Иванович"}
          />
          <FormField
            id={crypto.randomUUID()}
            labelText={"Телефон"}
            name={"phone"}
            type="tel"
            placeholder={"+7 ("}
          />
          <FormField
            id={crypto.randomUUID()}
            labelText={"Email"}
            name={"email"}
            type="email"
            placeholder={"example@mail.ru"}
          />
        </div>
        <div
          className={
            "flex w-[48%] flex-col justify-between lg:gap-2.5 xl:gap-5"
          }
        >
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
          <div
            className={
              "flex flex-1 flex-wrap justify-between lg:gap-2.5 xl:gap-5"
            }
          >
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
        </div>
      </div>

      <div
        className={"flex w-full flex-col justify-between lg:gap-2.5 xl:gap-5"}
      >
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
    </form>
  );
};

const PurchasesList = () => {
  const { products } = useAppSelector((state) => state.basketState);

  return (
    <ul
      className={clsx("border-[#a7a7a7]", {
        "last:border-b-1": products.length !== 0,
      })}
    >
      {products.length !== 0 ? (
        products.map((item, index) => (
          <li key={index}>
            <PurchasesListItem item={item} index={index} />
          </li>
        ))
      ) : (
        <li>СПИСОК ПОКУПОК ПУСТ</li>
      )}
    </ul>
  );
};

const PurchasesListItem: FC<{
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
      {visibleAdditional && (
        <div
          className={
            "flex h-14 w-full items-center justify-end gap-10 pr-20 lg:text-sm xl:text-base"
          }
        >
          <div>
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
      )}
    </article>
  );
};
