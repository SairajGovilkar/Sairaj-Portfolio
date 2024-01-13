import React from "react";
import HeroSection from "./components/HeroSection";
// // import { useGlobalContext } from "./Context";

 const About = () => {

    const data = {
        name:"Sairaj",
        image : "./images/about1.svg",
    }
    return <HeroSection  {...data} />;
 };

 export default About;
{/* <div>About</div> */}
// //   const { udpateAboutPage } = useGlobalContext();

//   useEffect(() => udpateAboutPage(), []);

  