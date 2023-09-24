import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Vansh Raghav</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/vansh-raghav-6862951b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./linkedin.png"
              alt="LinkedIn"
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <a
            href="https://github.com/vanshraghav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./github.png"
              alt="LinkedIn"
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <a
            href="https://instagram.com/vanshraghav2018?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./instagram.png"
              alt="Instagram"
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <a
            href="https://www.facebook.com/vansh.raghav.370?mibextid=2JQ9oc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./facebook.png"
              alt="Facebook"
              style={{ width: "35px", height: "35px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
