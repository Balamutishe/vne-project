import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className={"flex items-center justify-center"}>
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          alt={"Logo"}
          width={115}
          height={31}
          priority={true}
        />
      </Link>
    </div>
  );
};
