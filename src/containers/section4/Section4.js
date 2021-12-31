import React from "react";
import "./Section4.css";
import Rendersection4 from "./RenderSection4";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import SkillsData from "../../shared/opensource/skills.json";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="section4-header-div">
        <Fade bottom duration={2000} distance="20px">
          {/*<h1 className="section4-header" style={{ color: theme.text }}>
            Read about me...
          </h1>*/}
        </Fade>
      </div>
      <Rendersection4 theme={theme} />
      <OrganizationList logos={SkillsData["data"]} />
    </div>
  );
}
