"use client"
import Image from "next/image";
import React from "react";

function Index({ setToggle, toggle }) {
  
  return (
    <div className="w-full h-[40vh] bg-gradient-to-r from-[#4AF5D7] to-[#35B19B] flex items-center justify-center">
      <div className="flex items-center md:gap-[80px] relative">
        <div className="text-end text-white w-full md:w-max">
          <h1 className="text-2xl md:text-[50px]  text-white text-start pl-2 md:pl-0">
            Here Are Some Of Projects
          </h1>
          <p className="text-center md:text-end mt-1">Click Here!</p>
          <div className="absolute md:right-[20%] right-[30%]">
            {" "}
            <div className="relative">
              <Image
                className="text-end"
                src="/assets/icons/flesh.svg"
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="text-end absolute right-0 top-0"
                src="/assets/icons/flesh1.svg"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="bg-darkGreen p-4 md:p-5 mb-2 rounded-3xl flex justify-center items-center  shadow-slowShadow cursor-pointer md:w-max mr-2 "
        >
          {/* <div className="md:w-10 md:h-10 w-10 h-10  border-[3.5px] rounded-md border-white" />
          <div className="md:w-10 md:h-10 w-10 h-10  border-[3.5px] rounded-md border-white" />
          <div className="md:w-10 md:h-10 w-10 h-10  border-[3.5px] rounded-md border-white" />
          <div className="md:w-10 md:h-10 w-10 h-10  border-[3.5px] rounded-md border-white" /> */}
          <Image src="/assets/icons/grid.svg" width={100} height={100} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
