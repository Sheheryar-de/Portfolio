import Link from "./UI/Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import { useRef } from "react";
import useMovingBox from "./useMovingBox";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  AOS.init();

  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const downloadRef = useRef(null);

  useMovingBox(githubRef);
  useMovingBox(linkedinRef);
  useMovingBox(downloadRef);

  //download resume
  const handleDownload = (event) => {
    event.preventDefault();
    const resumePath = "../resume/Resume.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Wrapper className="header">
        <Wrapper className="wrapper">
          <Wrapper className="header__nav">
            <Link
              href="/"
              className="header__home"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              SHEHERYAR AHMED!
            </Link>
            <div
              className="links-class"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div ref={githubRef} className="header__social">
                <Link
                  className="header__social"
                  href="https://github.com/Sheheryar-de"
                  target="_blank"
                >
                  <FaGithub
                    color="white"
                    style={{ width: "30", height: "30" }}
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
                    style={{ width: "30", height: "30" }}
                    title="LinkedIn"
                  />
                </Link>
              </div>
              <div ref={downloadRef} className="header__social">
                <Link
                  href=""
                  onClick={handleDownload}
                  className="header__social"
                >
                  <FaCloudDownloadAlt
                    color="white"
                    style={{ width: "30", height: "30" }}
                    title="Download Resume!"
                  />
                </Link>
              </div>
            </div>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Navbar;
