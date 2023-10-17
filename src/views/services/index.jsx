"use client";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

function Index() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    { id: 1, url: "/assets/images/5.svg", title: "Laveen Gallery" },
    { id: 2, url: "/assets/images/6.svg", title: "HMS Innovation" },
    { id: 3, url: "/assets/images/7.svg", title: "Cibo cook" },
    { id: 4, url: "/assets/images/8.svg", title: "roshak" },
    { id: 5, url: "/assets/images/5.svg", title: "Laveen Gallery" }
  ];
  return (
    <div className="h-[45vh]  bg-darkerGreen flex justify-center items-center">
      <Swiper
        className="md:w-[70%] w-[80%] m-auto"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={width > 728 ? 0 : 20}
        slidesPerView={width > 999 ? 4 : width>768 ? 3: 2}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="text-center">
              <Image
                className="border-2 rounded-3xl   m-auto"
                src={e.url}
                width={150}
                height={100}
                alt=""
              />
              <p className="text-white py-3 text-xs">{e.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Index;
