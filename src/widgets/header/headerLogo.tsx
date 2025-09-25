import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <div className={"flex w-1/5 items-center justify-center"}>
      <Image
        src={"/images/logo.svg"}
        alt={"Logo"}
        width={115}
        height={31}
        priority={true}
      />
    </div>
  );
};
