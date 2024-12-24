import { useState } from "react";
import Section1 from "./LandingSections/Section1";
import Section2 from "./LandingSections/Section2";
import Section3 from "./LandingSections/Section3";
import Navbar from "./Navbar";

export default function Landing_Page(){
    return (
      <>
            <div className="relative min-h-[800px] min-w-fit flex flex-col items-center justify-center">
                {/* <Navbar/> */}
          <Section1/>
          <Section2/>
          <Section3/>
          
        </div>
      </>
    );
}