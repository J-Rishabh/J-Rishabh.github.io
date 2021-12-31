import React, { Component } from "react";
import "./Section2.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { section2 } from "../../portfolio";
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

class RenderSection2 extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {section2.data.map((data) => {
          return (
            <div className="section2-main-div">

              <div className="section2-text-div">
                <Fade right duration={1000}>
                  <h1 className="section2-heading" style={{ color: theme.text }}>
                    {data.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={data.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {data.skills.map((descriptionSentence) => {
                      return (
                        <p
                          className="subTitle section2-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {descriptionSentence}
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

export default RenderSection2;
