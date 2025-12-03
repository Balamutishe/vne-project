import Image from "next/image";

export const Preview = () => {
  return (
    <div className="container-margin relative z-[-1] h-112 w-full lg:h-200">
      <Image
        src={"/images/preview.jpg"}
        alt={"Preview"}
        fill
        className="object-cover"
      />
    </div>
  );
};
