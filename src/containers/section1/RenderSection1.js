import React, { Component } from "react";
import "./Section1.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { section1 } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return null;
}

class RenderSection1 extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {section1.data.map((data) => {
          return (
            <div className="section1-main-div">
              <Fade left duration={2000}>
                <div className="section1-image-div">
                  <GetSkillSvg fileName={data.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="section1-text-div">
                <Fade right duration={1000}>
                  <h1 className="section1-heading" style={{ color: theme.text }}>
                    {data.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={data.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {data.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle section1-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RenderSection1;
