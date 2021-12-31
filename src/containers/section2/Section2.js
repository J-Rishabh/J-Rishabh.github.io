import React from "react";
import "../../../src/containers/education/Educations.css";

import RenderSection2 from "./RenderSection2";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { OBHStheme } from "../../theme";
// EDUCATION
// EXPERIENCES WILL BE A DIFFERENT ONE
export default function Skills(props) {
  const theme = props.theme;
  return (
    <div>
    {/*<div className="main" id="skills">
      <div className="section2-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="section2-header" style={{ color: theme.text }}>
            Read about me...
          </h1>
        </Fade>
      </div>
      
    </div>*/}
    <RenderSection2 theme={theme} />
      <div className="educations-header-div" id = "education" >
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Education
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={OBHStheme} />;
          })}
        </div>
      
    </div>
    
  );
}
