import { SupportContentView } from "@/widgets/Support/components";
import { SupportNav } from "@/widgets/Support/components/SupportNav";

export const SupportView = () => {
  return (
    <>
      <section className={"hidden flex-1 flex-col sm:flex"}>
        <SupportMain />
      </section>
      <section className={"flex flex-1 sm:hidden"}>
        <SupportMobile />
      </section>
    </>
  );
};

export const SupportMain = () => {
  return (
    <div className={"border-tertiary flex flex-1 border-t-1"}>
      <aside
        className={
          "border-tertiary flex w-1/4 items-start border-r-1 px-13.5 py-20"
        }
      >
        <SupportNav />
      </aside>
      <section className={"w-3/4"}>
        <div
          className={
            "border-tertiary flex w-full items-center justify-center border-b-1 py-4"
          }
        >
          <h3>ПОМОЩЬ КЛИЕНТАМ</h3>
        </div>
        <div className={"px-4 py-20"}>
          <SupportContentView />
        </div>
      </section>
    </div>
  );
};

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
