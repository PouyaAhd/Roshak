import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Index({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Index;
