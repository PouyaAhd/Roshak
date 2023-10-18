"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {


  const data = [
    { id: 1, url: "/assets/images/5.svg", title: "Laveen Gallery" },
    { id: 2, url: "/assets/images/6.svg", title: "HMS Innovation" },
    { id: 3, url: "/assets/images/7.svg", title: "Cibo cook" },
    { id: 4, url: "/assets/images/8.svg", title: "roshak" },
    { id: 5, url: "/assets/images/5.svg", title: "Laveen Gallery" }
  ];



  const refSliderProduct = useRef();
  const refSliderSlider = useRef();
  const settingsProduct = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  const settingsSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="relative pb-10 bg-darkerGreen">
      
      <div
        onClick={() => refSliderSlider.current.slickPrev()}
        className=" absolute z-10 cursor-pointer px-2 py-[10px] left-[13px] top-32 shadow-2xl  rounded-sm"
      >
        <Image
          src="/assets/icons/left.svg"
          width={30}
          height={10}
          alt="test"
        />
      </div>
      <div className="w-[70%] m-auto">
        <Slider ref={refSliderSlider} {...settingsSlider}>
          {data.map((e) => (
            <div key={e.id} className="text-center mt-10">
              <Image
                className="border-2 rounded-3xl   m-auto"
                src={e.url}
                width={150}
                height={100}
                alt=""
              />
              <p className="text-white py-3 text-xs">{e.title}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div
        onClick={() => refSliderSlider.current.slickNext()}
        className=" absolute z-10 cursor-pointer px-2 py-[10px]  right-[13px] top-32 shadow-2xl  rounded-sm"
      >
        <Image
          src="/assets/icons/right.svg"
          width={30}
          height={10}
          alt="test"
        />
      </div>
    </div>
  );
}

export default Index;

