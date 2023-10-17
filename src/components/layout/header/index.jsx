"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { WidthCatcher } from "@/components/widthCatcher";

function Index() {
  const [width, setWidth] = useState(0);
  const [inputToggle, setInputToggle] = useState(false);
  WidthCatcher(setWidth);
  return (
    <header className="bg-darkGray w-full p-4 md:p-3 shadow-headerShado z-30 fixed   ">
      <div className="flex flex-row-reverse md:flex-row justify-between items-center mq1292:w-[70%] mq1128:w-full md:w-[62%] m-auto text-white mt-1 ">
        <div className="md:hidden">
          <Image src="/assets/icons/menu.svg" width={30} height={30} alt="" />
        </div>
        <div>
          <h1 className="mr-4 text-[20px] md:text-[19px]">
            {width > 728 ? "Roshak Group" : "Roshak"}
          </h1>
        </div>
        <div className="hidden md:flex gap-5">
          <p className="text-xs font-[300]">Services</p>
          <p className="text-xs font-[300]">Our Projects</p>
          <p className="text-xs font-[300]">Team</p>
          <p className="text-xs font-[300]">Contact Us</p>
        </div>

        <div className="hidden md:flex items-center flex-row-reverse rounded-full p-[7px] w-max justify-end border-[1.5px]">
          <input
            type="text"
            className="bg-transparent placeholder:text-[8.5px] placeholder:text-[#FFFFFF] mq812:w-[200px] w-[255px]   outline-none "
            placeholder="Search Something..."
          />
          <span className="bg-darkGreen rounded-full p-[4px] mr-4">
            <Image
              src="/assets/icons/search.svg"
              width={17}
              height={17}
              alt=""
            />
          </span>
        </div>
        <div  onClick={()=>{setInputToggle((prev)=>!prev)}} className="md:hidden cursor-pointer">
          <span className="    ">
            <Image
              className="bg-darkGreen rounded-full p-2"
              src="/assets/icons/search.svg"
              width={40}
              height={30}
              alt=""
            />
          </span>
        </div>
      </div>
      {inputToggle && (
        <div className="flex items-center flex-row-reverse rounded-full p-[7px]  justify-end border-[1.5px] w-full mt-2">
          <input
            type="text"
            className="bg-transparent placeholder:text-[8.5px] placeholder:text-[#FFFFFF] w-full  outline-none "
            placeholder="Search Something..."
          />
          <span className="   mr-5 ">
            <Image
              className="bg-darkGreen rounded-full p-2 "
              src="/assets/icons/search.svg"
              width={40}
              height={30}
              alt=""
            />
          </span>
        </div>
      )}
    </header>
  );
}

export default Index;
