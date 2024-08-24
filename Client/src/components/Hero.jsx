import Wrapper from "./UI/Wrapper";
import HeroDetails from "./HeroDetails";

function Hero() {
  const class1 = "wrapper";
  const class2 = "hero__wrapper";
  const class3 = "bottom-border";

  return (
    <Wrapper className="hero">
      <Wrapper className={`${class1} ${class2} ${class3}`}>
        <Wrapper
          className="hero__content"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <HeroDetails description="Empowering the digital landscape with precision and passion. Transforming ideas into immersive online experiences." />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default Hero;
