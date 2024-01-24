import React from "react";
 import HeroSection from "./components/HeroSection";
// import { useGlobalContext } from "./Context";
import Services from "./Services";
import Contact from "./Contact";

 const Home = () => {
    const data = {
        name :"Sairaj",
        image : "./images/hero.svg",
    };
    return <HeroSection  {...data} />;
//   const { updateHomePage } = useGlobalContext();

  //useEffect(() => updateHomePage(), []);

  return (
    <>

     </>
  );
 };

 export default Home;