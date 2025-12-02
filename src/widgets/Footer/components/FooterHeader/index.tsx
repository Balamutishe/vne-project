import Image from "next/image";

const FooterHeader = () => {
  return (
    <div
      className={
        "border-tertiary flex h-10 items-center justify-between border-t-1 border-b-1 sm:h-12 lg:h-14 xl:h-16" +
        " [&>*]:border-tertiary [&>*]:flex [&>*]:h-full [&>*]:w-1/4 [&>*]:items-center [&>*]:justify-start"
      }
    >
      <div className={"container-padding border-r-1"}>
        <Image src={"/images/logo.svg"} alt={"Logo"} width={115} height={31} />
      </div>
      <div className={"border-r-1 px-4"}>КОМПАНИЯ</div>
      <div className={"border-r-1 px-4"}>ПОМОЩЬ</div>
      <div className={"container-padding pl-4"}>СОЦСЕТИ</div>
    </div>
  );
};

export default FooterHeader;