import React from "react";
import ProjectItem from "./UI/ProjectItem";
import thumbnail from "../assets/thumbnail-project-1-large.webp";
import Wrapper from "./UI/Wrapper";

function Projects() {
  const class1 = "wrapper";
  const class2 = "projects__wrapper";
  const class3 = "bottom-border";

  return (
    <>
      <Wrapper className={`${class1} ${class2} ${class3}`}>
        <h2 className="projects__headline header-xl myClass">Projects</h2>
        <br />

        <Wrapper id="projects" className="projects__grid">
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="DESIGN PORTFOLIO"
          />
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="E-Learning Landing Page"
          />
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="Todo Web App"
          />
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="Entertainment Web App"
          />
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="Memory Game"
          />
          <ProjectItem
            src={thumbnail}
            lang1="ReactJS"
            lang2="CSS"
            title="Art Gallery Showcase"
          />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Projects;
