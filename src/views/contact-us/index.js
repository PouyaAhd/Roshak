import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

function Index() {
  return (
    <div className="w-full h-[35vh] bg-[#2e9580] flex justify-center items-center shadow-innerCustom mt-10">
      <div className="flex justify-between w-[60%] m-auto items-center ">
        <h2 className="font-medium text-[40px] text-white w-[40%]">Contact Us</h2>
        <div className="flex justify-between flex-col gap-4 w-[50%]">
          <div className="text-white flex gap-3 items-center">
            <FiPhoneCall />
            <p>09123931361</p>
          </div>
          <div className="text-white flex gap-3 items-center">
            <TfiEmail />
            <p>Info@roshak.dev</p>
          </div>
          <div className="text-white flex gap-3 items-center">
            <IoLocationOutline />
            <p>
              Azadi innovation factory, Lashkarak highway, Azadi sq., Tehran,
              Iran
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
