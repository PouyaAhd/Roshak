import React from "react";
import Homepage from "@/views/home";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Homepage />
    </>
  );
}

export default Index;
