import Section1 from "./LandingSections/Section1";
import Section2 from "./LandingSections/Section2";
import Section3 from "./LandingSections/Section3";

export default function Landing_Page(){
    return(
         <div className="relative min-h-[800px] min-w-[1569px] flex flex-col items-center justify-center">
          <Section1/>
          <Section2/>
          <Section3/>
        </div>
    )
}