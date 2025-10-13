import localFont from "next/font/local";
import { FC } from "react";

const damionFont = localFont({
  src: "../../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className={`${damionFont.className} lg:text-5xl xl:text-7xl`}>
      {title}
    </h2>
  );
};
