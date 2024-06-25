import { PropTypes } from "prop-types";

function SkillItem({ title, skillDesc }) {
  return (
    <>
      <div className="skills__item">
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
