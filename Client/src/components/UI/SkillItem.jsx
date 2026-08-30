import PropTypes from "prop-types";
import useMovingBox from "../useMovingBox";
import { useRef } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiFirebase,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const skillIcons = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <FaBootstrap />,
  JavaScript: <SiJavascript />,
  ReactJS: <FaReact />,
  NextJS: <SiNextdotjs />,
  Firebase: <SiFirebase />,
  "SQL Server": <SiMicrosoftsqlserver />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
};

function SkillItem({ title, skillDesc }) {
  const skillRef = useRef(null);

  useMovingBox(skillRef);

  return (
    <div ref={skillRef} className="skills__item">
      <div className="skills__icon">{skillIcons[title]}</div>

      <h3 className="skills__title">{title}</h3>

      <p className="skills__description">{skillDesc}</p>
    </div>
  );
}

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  skillDesc: PropTypes.string.isRequired,
};

export default SkillItem;
