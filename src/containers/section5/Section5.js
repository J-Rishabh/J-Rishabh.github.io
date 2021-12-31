import React from "react";
import "./Section5.css";
import Rendersection5 from "./RenderSection5";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="contact">
      <div className="section5-header-div">
        <Fade bottom duration={2000} distance="20px">
          {/*<h1 className="section5-header" style={{ color: theme.text }}>
            Read about me...
          </h1>*/}
        </Fade>
      </div>
      <Rendersection5 theme={theme} />
    </div>
  );
}
