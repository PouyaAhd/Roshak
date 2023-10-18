"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="shadow-shadowSite">
      <h2 className="my-10 text-center font-bold text-[30px]">Meet The Team</h2>
      <div className=" grid-cols-3 w-max m-auto gap-16 text-center  pb-16 hidden md:grid  ">
        {data.map((e) => {
          return (
            <div key={e.id}>
              <Image src={e.src} width={150} height={100} alt="" />
              <h2 className="text-md font-medium">{e.name}</h2>
              <p className="text-[13px] font-light">{e.job}</p>
            </div>
          );
        })}
      </div>
      <div className="relative pb-10 mt-10 md:hidden">
        <div
          onClick={() => refSliderSlider.current.slickPrev()}
          className=" absolute z-10 cursor-pointer px-2 py-[10px] left-[13px] top-32 shadow-2xl  rounded-sm"
        >
          <Image
            src="/assets/icons/leftBlack.svg"
            width={30}
            height={10}
            alt="test"
          />
        </div>
        <div className="w-[70%] m-auto">
          <Slider ref={refSliderSlider} {...settingsSlider}>
            {data.map((e) => {
              return (
                <div key={e.id} className="">
                  {/* <div className="w-[150px] h-[150px] bg-[#d1d1d1] rounded-xl" /> */}
                  <Image
                    className="w-full"
                    src={e.src}
                    width={150}
                    height={100}
                    alt=""
                  />
                  <h2 className="text-md text-center font-bold my-2">
                    {e.name}
                  </h2>
                  <p className="text-[13px] text-center font-light">{e.job}</p>
                </div>
              );
            })}
          </Slider>
        </div>

        <div
          onClick={() => refSliderSlider.current.slickNext()}
          className=" absolute z-10 cursor-pointer px-2 py-[10px]  right-[13px] top-32 shadow-2xl  rounded-sm"
        >
          <Image
            src="/assets/icons/rightBlack.svg"
            width={30}
            height={10}
            alt="test"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;

