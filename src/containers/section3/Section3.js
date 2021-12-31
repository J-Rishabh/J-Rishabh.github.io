import React from "react";
import "./Section3.css";
import Rendersection3 from "./RenderSection3";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id = "projects">
      <div className="section3-header-div">
        <Fade bottom duration={2000} distance="20px">
          {/*<h1 className="section3-header" style={{ color: theme.text }}>
            Read about me...
          </h1>*/}
        </Fade>
      </div>

      <Rendersection3 theme={theme} />
      <div className="repo-cards-div-main" >
         <GithubRepoCard repo={"https://github.com/tutoringbot/Tutoring-Bot"} theme={theme} description = {"Tutoring Bot that won first place at the Planet Hacks Hackathon"} name = {"Tutoring Bot"} />
         <GithubRepoCard repo={"https://github.com/J-Rishabh/Arduino"} theme={theme} description = {"Collection of Arduino Projects including MapMaker and SpeedOfSound"} name = {"Arduino"} />
         <GithubRepoCard repo={"https://github.com/JainRecipes/JainRecipes.github.io"} theme={theme} description = {"Compilation of the Jain Family recipes"} name = {"JainRecipes"} />
         <GithubRepoCard repo={"https://github.com/J-Rishabh/J-Rishabh.github.io"} theme={theme} description = {"This website :)"} name = {"J-Rishabh"} />
         <GithubRepoCard repo={"https://github.com/J-Rishabh"} theme={theme} description = {"Future projects..."} name = {"---------"} />
      </div>
      <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/j-rishabh"
          newTab={true}
          theme={theme}
        />
    </div>
  );
}
