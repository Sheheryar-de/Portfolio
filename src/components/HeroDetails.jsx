import Wrapper from "./UI/Wrapper";
import Link from "./UI/Link";
import { PropTypes } from "prop-types";

function HeroDetails({ description }) {
  return (
    <>
      <Wrapper className="hero__text">
        <Wrapper className="hero_wrap">
          <h1 className="hero__headline header-xl">
            Turning <span className="code_color">Code</span> into
            <br />
            Creative <span className="code_color">Solutions</span>
          </h1>
          <p className="hero__description">{description}</p>
        </Wrapper>
        <Link href="#projects" className="hero__contact underline">
          Explore My Works
        </Link>
      </Wrapper>
    </>
  );
}

HeroDetails.propTypes = {
  description: PropTypes.string,
};
export default HeroDetails;
