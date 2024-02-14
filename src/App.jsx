import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeatureProject from "./components/FeatureProject";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Reviews from "./components/Reviews";
import ReadyStart from "./components/ReadyStart";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen  bg-zinc-900 text-white overflow-hidden">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeatureProject />
      <Reviews/>
      <Cards />
      <ReadyStart/>
      <Footer />
    </div>
  );
};

export default App;
