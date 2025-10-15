import Image from "next/image";
import { usePathname } from "next/navigation";

export const HeaderPreview = () => {
  const pathName = usePathname();

  if (pathName !== "/") return null;

  return (
    <section className={"z-[-1] max-h-196 max-w-[1440px] overflow-hidden"}>
      <Image
        src={"/images/preview.jpg"}
        alt={"Preview"}
        height={800}
        width={1440}
      />
    </section>
  );
};
