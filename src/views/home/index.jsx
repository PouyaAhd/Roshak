"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FirstView from "@/components/ui/first-view";
import ServiceInfo from "@/components/ui/services-infos";
import Project from "@/components/ui/projects";
import Team from "@/components/ui/team";
import Partnership from "@/components/ui/partnership";
import ContactUs from "@/components/ui/contact-us";
import Services from "@/components/ui/services";

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
