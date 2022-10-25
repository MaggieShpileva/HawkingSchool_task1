import React, { createRef, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainInfo } from "./components/MainInfo";
import { ProgressWork } from "./components/ProgressWork";
import { WhyCompany } from "./components/WhyCompany";
import { Consultation } from "./components/Сonsultation";
import { Video } from "./components/Video";
import { Foto } from "./components/Foto";
import { Footer } from "./components/Footer";

import { isMobile } from "react-device-detect";
import { Icons } from "./components/Icons";

function App() {
  const [neededSize, setNeededSize] = useState<boolean>(false);

  useEffect(() => {
    isMobile ? setNeededSize(true) : setNeededSize(false);
  });

  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="App">
      <Header neededSize={neededSize} size={windowSize} />
      <MainInfo />
      <ProgressWork />
      <WhyCompany />
      <Consultation />
      <Video />
      <Foto />
      <Footer />
    </div>
  );
}

export default App;
