"use client";

import { toggleVariantPaymentForm } from "@/features/payment/paymentSlice";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ArrowDownSvg from "@/widgets/products/icons/arrow-down.svg";
import { clsx } from "clsx";
import { FC, useRef, useState } from "react";
import { BasketList } from "@/features/basket";
import { FormField } from "@/shared/ui/formField";
import ShareSvg from "./icons/share.svg";

export const Payment = () => {
  const { variantPaymentForm } = useAppSelector((state) => state.paymentState);

  return (
    <form className={"flex h-full justify-between gap-14 lg:pt-25 xl:pt-45"}>
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
        {variantPaymentForm.value !== "pickupPoint" ? (
          <div className={"flex flex-col gap-5"}>
            <CustomSelect
              options={[
                {
                  value: "courier",
                  label: "Доставка курьером",
                },
                {
                  value: "pickup",
                  label: "Доставка в пункт выдачи",
                },
                {
                  value: "pickupPoint",
                  label: "Самовывоз",
                },
              ]}
              id={crypto.randomUUID()}
              mainLabelText={"Доставка"}
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

            {(variantPaymentForm.value === "pickup" ||
              variantPaymentForm.value === "default") && (
              <FormField
                id={crypto.randomUUID()}
                labelText={"Дом"}
                name={"house"}
                type="number"
                placeholder={"Номер дома"}
              />
            )}

            {variantPaymentForm.value === "courier" && (
              <div className={"flex flex-1 flex-wrap justify-between gap-4"}>
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
            )}
          </div>
        ) : (
          <>
            <div className={"mb-4"}>
              <CustomSelect
                options={[
                  {
                    value: "courier",
                    label: "Доставка курьером",
                  },
                  {
                    value: "pickup",
                    label: "Доставка в пункт выдачи",
                  },
                  {
                    value: "pickupPoint",
                    label: "Самовывоз",
                  },
                ]}
                id={crypto.randomUUID()}
                mainLabelText={"Доставка"}
              />
            </div>
            <p className={"leading-12"}>
              САМОВЫВОЗ В Г. МОСКВЕ улица Академика Анохина Д. 5 КОРП. 3
            </p>
          </>
        )}
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
        <div className={"mb-5 flex items-center justify-start gap-2"}>
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
        <div>
          <FormField name={"promotionalCode"} placeholder={"Ваш промокод"} />
        </div>
      </section>
    </form>
  );
};

type OptionType = {
  value: "pickup" | "pickupPoint" | "courier" | "default";
  label: string;
  disabled?: boolean;
};

interface CustomSelectProps {
  options: OptionType[];
  initialValue?: OptionType;
  id?: string;
  mainLabelText?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  id,
  mainLabelText,
}) => {
  const dispatch = useAppDispatch();
  const { variantPaymentForm } = useAppSelector((state) => state.paymentState);

  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick({ ref, callback: setShowOptions });

  const handleOptionClick = (value: OptionType) => {
    dispatch(toggleVariantPaymentForm(value));
    setShowOptions(false);
  };

  return (
    <div
      className={"group relative flex flex-1 flex-col gap-2 text-sm"}
      ref={ref}
    >
      {mainLabelText && (
        <label
          htmlFor={id}
          className={"group-hover:text-hover cursor-pointer"}
          onClick={() => setShowOptions(!showOptions)}
        >
          {mainLabelText}
        </label>
      )}
      <input
        defaultValue={variantPaymentForm.value}
        name={"deliveryMethod"}
        className={"hidden"}
        id={id}
      />
      <div
        className={clsx(
          "group group-hover:outline-hover outline-tertiary flex w-full cursor-pointer justify-between px-2 py-3" +
            " outline-1",
          {
            "text-tertiary": variantPaymentForm.value === "default",
          },
        )}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{variantPaymentForm.label}</span>
        <span className={"flex items-center"}>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-hover:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": showOptions,
              },
            )}
          />
        </span>
      </div>
      {showOptions && (
        <div className={"outline-active absolute top-18 w-full outline-1"}>
          {options.map((opt) => (
            <div
              key={opt.value.toString()}
              className={
                "bg-hover hover:bg-active z-50 cursor-pointer px-2 py-4 text-white"
              }
              onClick={() => handleOptionClick(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
