import React from "react";
import Link from "./UI/Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";

function Footer() {
  const class1 = "footer";
  const class2 = "bg-less-dark";
  return (
    <>
      <Wrapper className={`${class1} ${class2}`}>
        <Wrapper className="wrapper">
          <Wrapper className="header__nav">
            <Link href="/" className="header__home">
              SHEHERYAR
            </Link>
            <Link className="header__social" href="">
              <FaGithub
                color="white"
                style={{ width: "25", height: "27" }}
                title="GitHub"
              />
            </Link>
            <Link href="" target="_blank" className="header__social">
              <FaLinkedin
                color="white"
                style={{ width: "25", height: "28" }}
                title="LinkedIn"
              />
            </Link>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Footer;
