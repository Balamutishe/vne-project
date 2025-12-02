import FormFieldsDeliveryData from "@/widgets/FormFields/FormFieldsDeliveryData";
import FormFieldsPasswordData from "@/widgets/FormFields/FormFieldsPasswordData";
import FormFieldsUserData from "@/widgets/FormFields/FormFieldsUserData";

const AccountInfo = () => {
  return (
    <section>
      <div className={"mb-2.5 flex w-full justify-between sm:mb-5"}>
        <div className={"w-[48%]"}>
          <FormFieldsUserData />
        </div>
        <div className={"w-[48%]"}>
          <FormFieldsDeliveryData />
        </div>
      </div>

      <div className={"flex w-full flex-col justify-between gap-2.5 sm:gap-5"}>
        <FormFieldsPasswordData />
        <button
          className={
            "bg-hover text-background hover:bg-hover/80 active:bg-active cursor-pointer p-2"
          }
        >
          СОХРАНИТЬ
        </button>
      </div>
    </section>
  );
};

export default AccountInfo;