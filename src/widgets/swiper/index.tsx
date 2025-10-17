"use client";

import Image from "next/image";
import { FC } from "react";
import "swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

export const ReactSwiper: FC<{ imagesUrlList: string[] }> = ({
  imagesUrlList,
}) => {
  return (
    <section>
      <Swiper spaceBetween={0} slidesPerView={1} className={"h-112"}>
        {imagesUrlList.map((url) => (
          <SwiperSlide key={crypto.randomUUID()}>
            <Image
              src={url}
              alt={"ProductImage"}
              width={710}
              height={952}
              className={"size-full"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
