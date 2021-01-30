import React from "react";
import { AiFillPhone, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerBox">
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/P3T2-Realty-Rogues/living-real"
          >
            <MdEmail className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/P3T2-Realty-Rogues/living-real"
          >
            <AiFillPhone className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/P3T2-Realty-Rogues/living-real"
          >
            <AiFillFacebook className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/P3T2-Realty-Rogues/living-real"
          >
            <GrLinkedin className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/P3T2-Realty-Rogues/living-real"
          >
            <AiFillGithub className="svgLink" color="#00a6fb" size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
