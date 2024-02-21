import React from "react";
import Wrapper from "./UI/Wrapper";
import SkillItem from "./UI/SkillItem";

function Skills() {
  const class1 = "wrapper";
  const class2 = "skills__wrapper";

  return (
    <>
      <Wrapper className="skills wrapper bottom-border ">
        <h2 className="projects__headline header-xl contact__text">Skills</h2>
        <Wrapper className={`${class1} ${class2}`}>
          <SkillItem title="HTML" skillDesc="1 Year Experience" />
          <SkillItem title="CSS" skillDesc="1 Year Experience" />
          <SkillItem title="TailWind-CSS" skillDesc="1 Year Experience" />
          <SkillItem title="JavaScript" skillDesc="1 Year Experience" />
          <SkillItem title="ReactJS" skillDesc="1 Year Experience" />
          <SkillItem title="NextJS" skillDesc="1 Year Experience" />
          <SkillItem title="Firebase" skillDesc="1 Year Experience" />
          <SkillItem title="SQL-Server" skillDesc="1 Year Experience" />
          <SkillItem title="Git" skillDesc="1 Year Experience" />
          <SkillItem title="Github" skillDesc="1 Year Experience" />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Skills;
