import { FormField } from "@/shared/ui/formField";

export const FormFieldsUserData = () => {
  return (
    <form
      className={
        "flex w-full flex-col justify-between gap-2.5 sm:gap-5 [&>*]:w-full"
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
    </form>
  );
};

export default FormFieldsUserData;
