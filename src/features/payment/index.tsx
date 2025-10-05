"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { BasketList } from "@/features/basket";
import ShareSvg from "./icons/share.svg";

export const Payment = () => (
  <form className={"flex h-full items-center justify-between gap-10"}>
    <section className={"w-1/3"}>
      <h3 className={"mb-10"}>Контакты</h3>
      <div className={"flex flex-col gap-5"}>
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
    </section>
    <section className={"w-1/3"}>
      <h3 className={"mb-10"}>Доставка</h3>
      <div className={"flex flex-col gap-5"}>
        <FormFieldSelect
          id={crypto.randomUUID()}
          labelText={"Доставка"}
          name={"delivery"}
        />
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
        <FormField
          id={crypto.randomUUID()}
          labelText={"Дом"}
          name={"house"}
          type="number"
          placeholder={"Номер дома"}
        />
      </div>
    </section>
    <section className={"w-1/3"}>
      <div className={"mb-5"}>
        <BasketList />
      </div>
      <button
        type={"submit"}
        className={
          "bg-hover text-background active:bg-active mb-5 w-full cursor-pointer p-4 transition-colors"
        }
      >
        ОПЛАТИТЬ
      </button>
      <div className={"flex items-center justify-start gap-2"}>
        <input
          type={"checkbox"}
          name={"share"}
          id={"share"}
          className={"h-6 w-6 cursor-pointer"}
        />
        <label htmlFor={"share"} className={"cursor-pointer"}>
          <ShareSvg width={75} height={14} />
        </label>
      </div>
    </section>
  </form>
);

interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  labelText?: string;
  children?: ReactNode;
}

function FormField({ children, labelText, id, ...rest }: IFormField) {
  return (
    <div className={"flex flex-1 flex-col gap-2 text-sm"}>
      <label htmlFor={id} className={"cursor-pointer"}>
        {labelText}
      </label>
      <div className={"flex flex-1"}>
        {children}
        <input
          {...rest}
          id={id}
          autoComplete={"off"}
          className={
            "outline-tertiary w-full cursor-pointer px-2 py-3 outline-1"
          }
        />
      </div>
    </div>
  );
}

interface IFormFieldSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  labelText?: string;
  children?: ReactNode;
}

function FormFieldSelect({
  children,
  labelText,
  id,
  ...rest
}: IFormFieldSelect) {
  return (
    <div className={"flex flex-1 flex-col gap-2 text-sm"}>
      <label htmlFor={id} className={"cursor-pointer"}>
        {labelText}
      </label>
      <div className={"flex flex-1"}>
        {children}
        <select
          {...rest}
          id={id}
          autoComplete={"off"}
          className={
            "outline-tertiary w-full cursor-pointer px-2 py-3 outline-1"
          }
        >
          <option value={"Доставка в пункт выдачи"}>
            Доставка в пункт выдачи
          </option>
          <option value={"Доставка курьером"}>Доставка курьером</option>
        </select>
      </div>
    </div>
  );
}
