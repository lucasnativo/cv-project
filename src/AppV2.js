import React from "react";
import "./AppV2.css";
import CvForm from "./components/CvForm";

function AppV2() {
  return (
    <div className="App">
      <header>CV Project - The Odin Project</header>
      <CvForm className="cv" />
    </div>
  );
}

export default AppV2;
