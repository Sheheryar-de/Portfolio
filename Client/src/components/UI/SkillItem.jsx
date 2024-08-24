import { PropTypes } from "prop-types";
import useMovingBox from "../useMovingBox";
import { useRef } from "react";

function SkillItem({ title, skillDesc }) {
  const skillRef = useRef(null);

  useMovingBox(skillRef);
  return (
    <>
      <div ref={skillRef} className="skills__item">
        <h3 className="skills__title">{title}</h3>
        <p className="skills__description">{skillDesc}</p>
      </div>
    </>
  );
}
SkillItem.propTypes = {
  title: PropTypes.string,
  skillDesc: PropTypes.string,
};

export default SkillItem;
