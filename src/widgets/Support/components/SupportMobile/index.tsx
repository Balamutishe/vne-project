import { SupportContentView } from "../SupportContentView";
import { SupportNav } from "../SupportNav";

export const SupportMobile = () => {
  return (
    <section className={"flex w-full flex-col items-center justify-start"}>
      <h3
        className={
          "border-tertiary container-padding flex w-full items-center justify-start border-t-1 border-b-1 py-2"
        }
      >
        ПОМОЩЬ КЛИЕНТАМ
      </h3>
      <div className={"flex w-full flex-col justify-start"}>
        <SupportNav />
        <div className={"container-padding py-4"}>
          <SupportContentView />
        </div>
      </div>
    </section>
  );
};
