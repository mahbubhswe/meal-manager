import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import WhyUse from "./whyUse";
import CustomerCare from "./customerCare";
import Footer from "./footer";
export default function layout() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <WhyUse />
      <CustomerCare />
      <Footer />
    </React.Fragment>
  );
}
