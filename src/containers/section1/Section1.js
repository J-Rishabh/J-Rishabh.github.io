import React from "react";
import "./Section1.css";
import RenderSection1 from "./RenderSection1";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main">
      <div className="section1-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="section1-header" id = "about" style={{ color: theme.text }}>
            Read about me...
          </h1>
        </Fade>
      </div>
      <RenderSection1 theme={theme} />
    </div>
  );
}
