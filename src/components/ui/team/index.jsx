"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Index() {
  const data = [
    {
      id: 1,
      name: "Ali Shekari",
      job: "Backend Developer",
      src: "/assets/images/img1.jpg"
    },
    {
      id: 2,
      name: "Amin Jabari",
      job: "Frontend Developer",
      src: "/assets/images/img2.jpg"
    },
    {
      id: 3,
      name: "Pooria Mashayekh",
      job: "SEO Manager",
      src: "/assets/images/img5.jpg"
    },
    {
      id: 4,
      name: "hossein mirmousa",
      job: "Frontend Developer",
      src: "/assets/images/img4.jpg"
    },
    {
      id: 5,
      name: "Nazanin pornouri",
      job: "Product owner ",
      src: "/assets/images/img3.jpg"
    },
    {
      id: 6,
      name: "Pouya ahadi",
      job: "Frontend Developer",
      src: "/assets/images/img1.jpg"
    }
  ];
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
  return (
    <div className="my-16 shadow-custom">
      <h1 className="text-center font-bold text-3xl ">Meet The Team!</h1>
      <div className=" grid-cols-3 w-max m-auto gap-16 text-center my-10 pb-16 hidden md:grid">
        {data.map((e) => {
          return (
            <div key={e.id}>
              {/* <div className="w-[150px] h-[150px] bg-[#d1d1d1] rounded-xl" /> */}
              <Image src={e.src} width={150} height={100} alt="" />
              <h2 className="text-md font-medium">{e.name}</h2>
              <p className="text-[13px] font-light">{e.job}</p>
            </div>
          );
        })}
      </div>
      <div className="md:hidden pb-10 mt-5">
        <Swiper
          className="w-[70%] m-auto"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={width > 728 ? 0 : 20}
          slidesPerView={width > 728 ? 4 : 1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                {" "}
                <div className="" >
                  {/* <div className="w-[150px] h-[150px] bg-[#d1d1d1] rounded-xl" /> */}
                  <Image className="w-full" src={e.src} width={150} height={100} alt="" />
                  <h2 className="text-md text-center font-bold my-2">{e.name}</h2>
                  <p className="text-[13px] text-center font-light">{e.job}</p>
                </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
