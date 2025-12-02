import { FormField } from "@/shared/ui/formField";

const FormFieldsPasswordData = () => {
  return (
    <section>
      <FormField
        id={crypto.randomUUID()}
        labelText={"Пароль"}
        name={"password"}
        type="password"
        placeholder={"Сменить пароль"}
      />
    </section>
  );
};

export default FormFieldsPasswordData;
