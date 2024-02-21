import React from "react";
import Link from "./UI/Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";

function Navbar() {
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
            <Link href="/" className="header__home">
              SHEHERYAR AHMED!
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

            <Link href="" onClick={handleDownload} className="header__social">
              <FaCloudDownloadAlt
                color="white"
                style={{ width: "27", height: "25" }}
                title="Download Resume!"
              />
            </Link>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Navbar;
