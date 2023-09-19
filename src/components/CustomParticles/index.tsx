import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import particleOptions from "./particleConfig"
import "./style.scss";

const App = () => {
  const particlesInit = async (engine: Engine) => {
    console.log(engine);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(engine);
  };

  const particlesLoaded = async (container?: Container | undefined): Promise<void> => {};

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}
export default App; 