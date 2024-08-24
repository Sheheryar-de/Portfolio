import Image from "../assets/back.jpg";
import Wrapper from "./UI/Wrapper";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function About() {
  return (
    <>
      <Wrapper className="wrapper bottom-border about__me">
        <img
          src={Image}
          height={700}
          data-aos="fade-up-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-once="true"
        />
        <Wrapper
          className="about__wrapper"
          data-aos="fade-down-left"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h2 className="header__about contact__text">About</h2>
          <p className="about__description">
            Hello, I&apos;m{" "}
            <span className="about__highlight">Sheheryar Ahmed</span>, a
            passionate
            <span className="about__highlight">
              {" "}
              Junior Frontend Developer{" "}
            </span>
            from Pakistan with a knack for turning design concepts into
            <span className="about__highlight"> responsive</span> and visually
            appealing websites. Adapt at
            <span className="about__highlight">
              {" "}
              HTML, CSS, JavaScript, ReactJS {""}
            </span>
            and <span className="about__highlight">NextJS</span>. I thrive on
            creating seamless user experiences. Committed to staying
            <span className="about__highlight">
              {" "}
              ahead in web development trends
            </span>{" "}
            and delivering top-notch projects with satisfaction.
          </p>
          <p className="contact__info">
            <FaWhatsapp style={{ fontSize: "30px" }} /> +92-324-8422169
          </p>
          <p className="contact__info">
            <CiMail style={{ fontSize: "30px" }} /> sheheryar701@gmail.com
          </p>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default About;
