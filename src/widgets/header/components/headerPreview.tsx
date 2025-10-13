import Image from "next/image";
import { usePathname } from "next/navigation";

export const HeaderPreview = () => {
  const pathName = usePathname();

  if (pathName !== "/") return null;

  return (
    <section className={"max-h-196 overflow-hidden"}>
      <Image
        src={"/images/preview.jpg"}
        alt={"Preview"}
        height={800}
        width={1440}
      />
    </section>
  );
};
