import Image from "next/image";
import React from "react";
function index() {
  return (
    <div className="pt-[67px]">
      {" "}
      <div className="hidden md:block relative inset-0">
        <div className="w-full h-[41vh] bg-darkGray" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 gap-5 ">
          {" "}
          <h1 className="mq850:text-[100px] mq850:ml-10 md:text-[153px] text-2xl leading-[158px] font-extralight w-[550px] mt-5">
            WE’LL GET IT DONE
          </h1>
          <div className="flex flex-col justify-between mb-8 relative h-full top-5">
            <Image
              src="/assets/images/mainImg.svg"
              width={320}
              height={320}
              alt="main"
            />
            <div className="md:absolute bottom-[65px]">
              <h2 className="text-[30px] font-medium mb-3">Roshak Group</h2>
              <p className="w-[280px] leading-8 font-extralight text-xl">
                Roshak Group is a web development company offering various
                services in developing and delivering Websites, Web Apps (PWA),
                Android Apps
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[41vh] bg-[#2e9580] shadow-innerCustom" />
      </div>
      <div className="md:hidden  ">
        <div className="w-full h-[41vh] bg-darkGray flex items-center relative">
          <Image
            src="/assets/images/mainImg.svg"
            width={220}
            height={320}
            alt="main"
          />
          <div>
            <h1 className="md:text-[153px] text-white text-[40px] leading-10 font-extralight  mb-5">
              WE’LL GET IT DONE
            </h1>
          </div>
          <p className="text-white text-xl mr-5 absolute bottom-10 right-5">
            Roshak Group
          </p>
        </div>

        <div className="w-full h-[35vh] bg-[#2e9580] shadow-innerCustom flex items-center justify-center">
          <div className="">
            <p className="px-4 leading-8 font-extralight text-md text-white">
              Roshak Group is a web development company offering various
              services in developing and delivering Websites, Web Apps (PWA),
              Android Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

{
  /* <img
      style={{height:"92vh", width:"100%"}}
        className=""
        src="/assets/images/hero.webp"
        // width={100}
        // height={100}
        alt="main"
      /> */
}
