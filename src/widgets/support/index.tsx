"use client";

import { BreadCrumb } from "@/widgets/breadCrumb";
import { SupportContentView } from "@/widgets/support/components";
import { SupportNav } from "@/widgets/support/components/supportNav";

export const Support = () => {
  return (
    <>
      <div className={"mb-10 px-13.5"}>
        <BreadCrumb />
      </div>
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
    </>
  );
};
