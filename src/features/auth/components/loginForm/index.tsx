import { FormField } from "@/shared/ui/formField";

export const LoginForm = () => {
  return (
    <form className={"flex flex-col gap-5"}>
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
      <button
        type={"submit"}
        className={
          "bg-hover hover:bg-hover/50 active:bg-active w-full p-4 text-white transition-colors"
        }
      >
        ВОЙТИ
      </button>
    </form>
  );
};
