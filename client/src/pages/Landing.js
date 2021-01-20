import React from "react";
// import PropertyList from "../components/Properties"

import Jumbotron from "../components/Jumbotron";
import Properties from "../components/Properties";

const Landing = () => {
  return (
    <div >
        <h1>In A Virtual World, Live Real</h1>
      
      <Jumbotron>
        <Properties/>
      </Jumbotron>
      {/* <PropertyList /> */}
    </div>
  );
};

export default Landing;
