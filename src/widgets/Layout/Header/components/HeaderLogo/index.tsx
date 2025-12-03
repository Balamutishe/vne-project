import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className={"flex items-center justify-center"}>
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          alt={"Logo"}
          width={110}
          height={31}
          priority={true}
          className={"h-8 w-25 lg:h-10 lg:w-32"}
        />
      </Link>
    </div>
  );
};
