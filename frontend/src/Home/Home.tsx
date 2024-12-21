
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage"
import { Preloader } from "../components/Preloader";
const Home = () => {
   const [isPreloading, setIsPreloading] = useState(true);
   useEffect(() => {
    const hasLoaded = sessionStorage.getItem("preloaderShown");
    if (hasLoaded) {
      setIsPreloading(false);
    } else {
      sessionStorage.setItem("preloaderShown", "true");
    }
  }, []);
      const handlePreloaderComplete = () => {
        setIsPreloading(false);
      };
    
  return (
    
    <div className="flex flex-col">
      {isPreloading && <Preloader onComplete={handlePreloaderComplete} />}
      {!isPreloading && (
            <LandingPage/>
      )}
    </div>
  )
}

export default Home
