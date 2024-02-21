import React from "react";
import Wrapper from "./Wrapper";
import Image from "./Image";
import Link from "./Link";

function ProjectItem({ src, title, lang1, lang2, lang3 }) {
  const class1 = "projects__picture";
  const class2 = "projects__image";
  return (
    <>
      <Wrapper className="projects__item">
        <div className="projects__image-wrapper">
          <Image
            src={src}
            width="343"
            height="253"
            className={`${class1} ${class2} projects__picture`}
          />
          <div className="projects__overlay">
            <h3 className="projects__name">{title}</h3>
            <Wrapper className="projects__links">
              <Link href="" className="underline">
                View Project
              </Link>
            </Wrapper>
          </div>
        </div>
        <Wrapper className="projects__tags">
          <p>Languages</p>
          <span>: {lang1}</span>
          <span>, {lang2}</span>
          <span>, {lang3}</span>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default ProjectItem;
