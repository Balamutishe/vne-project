"use client";

import BasketList from "@/widgets/Basket/components/BasketList";
import { CustomSelect } from "@/shared/ui/customSelect";
import { FormField } from "@/shared/ui/formField";
import { useAppSelector } from "@/store/hooks";
import FormFieldsUserData from "@/widgets/FormFields/FormFieldsUserData";
import ShareSvg from "./icons/share.svg";

export const Payment = () => {
  const { variantPaymentForm } = useAppSelector((state) => state.paymentState);
  const { totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <section
      className={
        "flex flex-col sm:flex-row sm:gap-14 [&>section]:w-full" +
        " [&>section]:mb-10 sm:[&>section]:mb-0" +
        " container-margin container-margin-top sm:[&>section]:w-1/3"
      }
    >
      <section>
        <h3 className={"mb-5 sm:mb-10"}>Контакты</h3>
        <form
          className={
            "flex w-full flex-col justify-between gap-2.5 sm:gap-5 [&>*]:w-full"
          }
        >
          <FormField
            labelText={"Фамилия"}
            name={"surname"}
            type="text"
            placeholder={"Иванов"}
          />
          <FormField
            labelText={"Имя"}
            name={"firstName"}
            type="text"
            placeholder={"Иван"}
          />
          <FormField
            labelText={"Отчество"}
            name={"lastName"}
            type="text"
            placeholder={"Иванович"}
          />
          <FormField
            labelText={"Телефон"}
            name={"phone"}
            type="tel"
            placeholder={"+7 ("}
          />
          <FormField
            labelText={"Email"}
            name={"email"}
            type="email"
            placeholder={"example@mail.ru"}
          />
        </form>
      </section>
      <section>
        <h3 className={"mb-5 sm:mb-10"}>Доставка</h3>
        {variantPaymentForm.value !== "pickupPoint" ? (
          <form
            className={
              "flex w-full flex-col justify-between gap-2.5 sm:gap-5 [&>*]:w-full"
            }
          >
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
              name={"deliveryMethod"}
              mainLabelText={"Доставка"}
            />
            <FormField
              labelText={"Регион"}
              name={"region"}
              type="text"
              placeholder={"Введите регион"}
            />
            <FormField
              labelText={"Город"}
              name={"city"}
              type="text"
              placeholder={"Введите город"}
            />
            <FormField
              labelText={"Улица"}
              name={"street"}
              type="text"
              placeholder={"Введите улицу"}
            />

            {(variantPaymentForm.value === "pickup" ||
              variantPaymentForm.value === "default") && (
              <FormField
                labelText={"Дом"}
                name={"house"}
                type="number"
                placeholder={"Номер дома"}
              />
            )}

            {variantPaymentForm.value === "courier" && (
              <div className={"flex flex-1 flex-wrap justify-between gap-4"}>
                <FormField
                  labelText={"Дом"}
                  name={"house"}
                  type="number"
                  placeholder={"Номер дома"}
                  containerStyle={"w-[47%]"}
                />
                <FormField
                  labelText={"Подъезд"}
                  name={"entrance"}
                  type="number"
                  placeholder={"Номер подъезда"}
                  containerStyle={"w-[47%]"}
                />
                <FormField
                  labelText={"Квартира"}
                  name={"apartment"}
                  type="number"
                  placeholder={"Номер квартиры"}
                  containerStyle={"w-[47%]"}
                />
                <FormField
                  labelText={"Этаж"}
                  name={"floor"}
                  type="number"
                  placeholder={"Номер этажа"}
                  containerStyle={"w-[47%]"}
                />
              </div>
            )}
          </form>
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
                name={"deliveryMethod"}
                mainLabelText={"Доставка"}
              />
            </div>
            <p className={"leading-12"}>
              САМОВЫВОЗ В Г. МОСКВЕ улица Академика Анохина Д. 5 КОРП. 3
            </p>
          </>
        )}
      </section>
      <section>
        <div className={"hidden sm:mb-10 sm:block"}>
          <BasketList />
        </div>
        <div className={"flex-center-between mb-5 text-sm sm:hidden"}>
          <span>ВСЕГО</span>
          <span>{totalPrice} &#8381;</span>
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
    </section>
  );
};
