"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
} from "@/features/counter/counterSlice";
import FirstView from "@/views/first-view";
import ServiceInfo from "@/views/services-infos";
import Project from "@/views/projects";
import Team from "@/views/team";
import Partnership from "@/views/partnership";
import ContactUs from "@/views/contact-us";
import Services from "@/views/services";

function Index() {
  const [toggle, setToggle] = useState(false);
  return (
    <main>
      <FirstView />
      <ServiceInfo />
      <Project setToggle={setToggle} toggle={toggle} />
      {toggle && <Services />}
      <Team />
      <Partnership />
    </main>
  );
}

export default Index;
