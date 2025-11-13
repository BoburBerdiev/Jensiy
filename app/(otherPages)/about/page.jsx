import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/about/About";
import Clients from "@/components/otherPages/about/Clients";
import Services from "@/components/otherPages/about/Services";
import React from "react";
import GridBanner from "@/components/homes/home-1/GridBanner";
import Products4 from "@/components/homes/home-1/Products4";

export const metadata = {
  title: "About || Vintage Denim",
  description: "Vintage Denim",
};
export default function AboutPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <About />
          <Products4 />
          {/*<div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>*/}
          <Services />
          <Clients />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
