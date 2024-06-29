import Link from "./UI/Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import { useRef } from "react";
import useMovingBox from "./useMovingBox";

function Footer() {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);

  useMovingBox(githubRef);
  useMovingBox(linkedinRef);

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

            <div ref={githubRef} className="header__social">
              <Link
                className="header__social"
                href="https://github.com/Sheheryar-de"
                target="_blank"
              >
                <FaGithub
                  color="white"
                  style={{ width: "25", height: "27" }}
                  title="GitHub"
                />
              </Link>
            </div>
            <div ref={linkedinRef} className="header__social">
              <Link
                href="https://www.linkedin.com/in/sheheryar-ahmad-6a1b6517a/"
                target="_blank"
                className="header__social"
              >
                <FaLinkedin
                  color="white"
                  style={{ width: "25", height: "28" }}
                  title="LinkedIn"
                />
              </Link>
            </div>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Footer;
