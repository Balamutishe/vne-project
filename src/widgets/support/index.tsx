import { SupportDesktop } from "./components/SupportDesktop";
import { SupportMobile } from "./components/SupportMobile";

const SupportView = () => {
  return (
    <>
      <section className={"hidden flex-1 flex-col sm:flex"}>
        <SupportDesktop />
      </section>
      <section className={"flex flex-1 sm:hidden"}>
        <SupportMobile />
      </section>
    </>
  );
};

export default SupportView;
