import Image from "next/image";
import React from "react";

function Index({  }) {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col md:flex-row md:items-stretch justify-between md:w-[60%] mq1070:w-[90%] ">
        <div className="w-full md:w-max">
          <div className="flex flex-col-reverse items-center md:flex-row-reverse   md:items-end justify-center md:justify-end">
            <Image
              src="/assets/images/developer.svg"
              width={320}
              height={100}
              alt=""
            />
            <p className="text-[30px] text-darkGreen mb-7">Services</p>
            {/* <p className="text-darkGreen text-xs w-[300px] md:hidden ">
              Roshak Groups’ Services are suitable for personal or business
              webistes, Online shops, Blogs and etc.
            </p> */}
          </div>
          <p className="text-darkGreen md:text-xl w-full px-2  md:px-0 my-8 md:my-0   md:w-[400px] leading-8 ">
            Roshak Groups’ Services are suitable for personal or business
            webistes, Online shops, Blogs and etc.
          </p>
        </div>

        <div className=" flex justify-end flex-col gap-5 items-start mb-4 px-2 md:px-0">
          <div className="flex items-center gap-5 justify-center">
            <div className="w-[30px] h-[30px] bg-lightGreen rounded-full" />
            <p className="text-darkGreen text-[15px]">CMS Development</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[30px] h-[30px] bg-lightGreen rounded-full" />
            <p className="text-darkGreen text-[15px]">Wordpress Development</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[30px] h-[30px] bg-lightGreen rounded-full" />
            <p className="text-darkGreen text-[15px] mq1070:w-[85%] w-[300px] md:w-max">
              Full Search Engine Optimization Package (SEO)
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[30px] h-[30px] bg-lightGreen rounded-full" />
            <p className="text-darkGreen text-[15px]">Android Apps</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[30px] h-[30px] bg-lightGreen rounded-full" />
            <p className="text-darkGreen text-[15px]">Web Apps (PWA)</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Index;
