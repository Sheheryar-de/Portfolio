import React from "react";

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

export default SkillItem;
