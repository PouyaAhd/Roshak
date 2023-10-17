import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

function Index() {
  return (
    <footer className="w-full md:h-[40vh] bg-darkGreen flex justify-center items-center shadow-pouya mt-10 p-5 md:p-0">
      <div className="flex flex-col md:flex-row justify-between md:w-[60%] mq1070:w-[90%] m-auto md:items-center  relative">
        <h2 className="font-medium text-3xl md:text-[50px] text-white md:w-[40%] mq1292:text-3xl">
          Contact Us...
        </h2>
        <div className="flex justify-between flex-col gap-4 md:w-[50%] mt-4">
          <div className="text-white flex gap-3 items-center ml-1 ">
            <FiPhoneCall className="text-xl" />
            <p className="text-[13px]">09123931361</p>
          </div>
          <div className="text-white flex gap-3 items-center ml-1  my-2 md:my-0">
            <TfiEmail className="text-xl" />
            <p className="text-[13px]">Info@roshak.dev</p>
          </div>
          <div className="text-white flex gap-3 items-center">
            <IoLocationOutline className="md:text-3xl text-[40px]" />
            <p className="text-[13px]  ">
              Azadi innovation factory, Lashkarak highway, Azadi sq., Tehran,
              Iran
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute left-[25%] -top-10">
          {" "}
          <div className="relative">
            <Image
              className="text-end"
              src="/assets/icons/flas2.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              className="text-end absolute -right-1 top-7"
              src="/assets/icons/flash3.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
