import React from "react";
import Wrapper from "./UI/Wrapper";
import HeroDetails from "./HeroDetails";

function Hero() {
  const class1 = "wrapper";
  const class2 = "hero__wrapper";
  const class3 = "bottom-border";

  return (
    <Wrapper className="hero">
      <Wrapper className={`${class1} ${class2} ${class3}`}>
        <Wrapper className="hero__content">
          <HeroDetails description="Empowering the digital landscape with precision and passion. Transforming ideas into immersive online experiences." />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default Hero;
