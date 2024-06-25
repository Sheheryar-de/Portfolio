import Wrapper from "./Wrapper";
import Image from "./Image";
import { PropTypes } from "prop-types";
import Link from "../UI/Link";
import { MdArrowOutward } from "react-icons/md";

function ProjectItem({ src, title, desc, lang, handleOpen }) {
  return (
    <>
      <Wrapper className="projects__item">
        <div className="projects__image-wrapper">
          <Image
            src={src}
            width="343"
            height="253"
            className="projects__picture"
          />
        </div>
        <Wrapper className="projects__info">
          <h2>{title}</h2>
          <p className="desc">{desc}</p>
          <div className="languages">
            <p>Tech Stack: &nbsp;</p>
            {lang.map((record, index) => (
              <span key={index}>{record} &nbsp;</span>
            ))}
            {/* <span>, {lang2}</span>
            <span>, {lang3}</span> */}
          </div>
          <Link className="hero__contact underline" onClick={handleOpen}>
            Read More <MdArrowOutward />
          </Link>
        </Wrapper>
      </Wrapper>
    </>
  );
}
ProjectItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  lang: PropTypes.array,
  handleOpen: PropTypes.func,
};
export default ProjectItem;
