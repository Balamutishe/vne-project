import Link from "next/link";

const BrandLink = () => {
  return (
    <Link
      href={"/brand"}
      className={
        "hover:text-hover active:text-active hidden cursor-pointer transition-colors lg:block"
      }
    >
      О БРЕНДЕ
    </Link>
  );
};

export default BrandLink;
