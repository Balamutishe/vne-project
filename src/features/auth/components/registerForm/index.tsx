import { FormField } from "@/shared/ui/formField";

export const RegisterForm = () => {
  return (
    <form className={"flex flex-col gap-5"}>
      <FormField
        type={"text"}
        id={crypto.randomUUID()}
        name={"firstname"}
        labelText={"Имя"}
        placeholder={"Иван"}
      />
      <FormField
        type={"text"}
        id={crypto.randomUUID()}
        name={"surname"}
        labelText={"Фамилия"}
        placeholder={"Иванов"}
      />
      <FormField
        type={"date"}
        id={crypto.randomUUID()}
        name={"birthdate"}
        labelText={"Дата рождения"}
        placeholder={"30.03.1994"}
      />
      <FormField
        type={"tel"}
        id={crypto.randomUUID()}
        name={"phone"}
        labelText={"Телефон"}
        placeholder={"+7 ("}
      />
      <FormField
        type={"email"}
        id={crypto.randomUUID()}
        name={"email"}
        labelText={"Email"}
        placeholder={"Введите email"}
      />
      <FormField
        type={"password"}
        id={crypto.randomUUID()}
        name={"password"}
        labelText={"Пароль"}
        placeholder={"Введите пароль"}
      />
      <FormField
        type={"password"}
        id={crypto.randomUUID()}
        name={"password"}
        labelText={"Подтверждение пароля"}
        placeholder={"Подтвердите пароль"}
      />
      <button
        type={"submit"}
        className={
          "bg-hover hover:bg-hover/50 active:bg-active w-full p-4 text-white transition-colors"
        }
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </button>
    </form>
  );
};
