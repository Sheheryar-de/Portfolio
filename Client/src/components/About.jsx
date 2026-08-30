import Image from "../assets/back.jpg";
import Wrapper from "./UI/Wrapper";

function About() {
  return (
    <Wrapper className="wrapper bottom-border about__me">
      {/* Image */}
      <div
        className="about__image-wrapper"
        data-aos="fade-up-right"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {/* Decorative Elements */}
        <span className="about__line about__line-top" />
        <span className="about__line about__line-bottom" />

        <div className="about__glow" />

        <div className="about__image-frame">
          <img src={Image} alt="Sheheryar Ahmed" />

          {/* Image Overlay */}
          <div className="about__image-overlay" />
        </div>

        {/* Floating Badge */}
        <div className="about__badge">
          <span className="about__badge-dot" />

          <div>
            <p>Currently</p>
            <strong>Building for web</strong>
          </div>
        </div>

        {/* Decorative Code */}
        <span className="about__code about__code-one">{"</>"}</span>

        <span className="about__code about__code-two">{"{}"}</span>
      </div>

      {/* Content */}
      <Wrapper
        className="about__wrapper"
        data-aos="fade-down-left"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <p className="about__eyebrow">Who I Am</p>

        <h2 className="header__about">About Me</h2>

        <div className="about__divider" />

        <p className="about__description">
          Hello, I&apos;m{" "}
          <span className="about__highlight">Sheheryar Ahmed</span>, a
          passionate{" "}
          <span className="about__highlight">Junior Frontend Developer</span>{" "}
          from Pakistan with a knack for turning design concepts into responsive
          and visually appealing websites.
        </p>

        <p className="about__description">
          I&apos;m skilled in{" "}
          <span className="about__highlight">
            HTML, CSS, JavaScript, ReactJS
          </span>{" "}
          and <span className="about__highlight">NextJS</span>. I enjoy creating
          seamless user experiences and building interfaces that are both
          functional and visually engaging.
        </p>

        <p className="about__description">
          I&apos;m constantly learning and keeping up with modern web
          development trends, with a focus on writing clean code and delivering
          better digital experiences.
        </p>

        {/* Small Stats */}
        <div className="about__stats">
          <div>
            <strong>01+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Projects Built</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Things to Learn</span>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default About;
