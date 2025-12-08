import { FormField } from "@/shared/ui/formField";

export const FormFieldsUserData = () => {
  return (
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
  );
};

export default FormFieldsUserData;
