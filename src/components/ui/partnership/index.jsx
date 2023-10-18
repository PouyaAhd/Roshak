import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="flex justify-between flex-col md:flex-row items-stretch w-full md:w-[60%] m-auto md:h-[25vh] px-3 md:px-0 pt-7" >
      <div className="w-full flex flex-col justify-between">
        <h1 className=" text-3xl ml-3 font-bold">Partnership</h1>
        <div className="flex items-end">
          <Image src="/assets/images/logo.svg" width={100} height={100} alt="" />{" "}
          <div className="mb-3">
            <h2 className="font-bold mb-2 md:mb-0">HMS Innovation</h2>
            <p className="text-[13px] font-bold">
              Partner Agency for UX/UI Design
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between flex-col ml-3">
        <p className="font-light text-[14px] leading-7 md:w-[400px]">
          HMS Innovation spaceship is a company offering various services to
          startups and companies.Our services are categorized into following
          sections: Branding, Marketing, Designing, Business Development
        </p>
        <p className="font-light text-[13px]">
          and They say there is a planet to be saved....
        </p>
      </div>
    </div>
  );
}

export default index;
