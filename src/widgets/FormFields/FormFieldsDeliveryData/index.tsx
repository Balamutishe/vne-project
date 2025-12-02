import { FormField } from "@/shared/ui/formField";

const FormFieldsDeliveryData = () => {
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

export default FormFieldsDeliveryData;
