import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
const email = "vanshraghav2018@gmail.com"; // Replace with your actual email address
const subject = "Hey , found your profile interesting can we talk !!"; // Replace with your desired subject

const handleHireButtonClick = () => {
  const bodyContent =
    "Hello Vansh,\n\nI came across your profile and found it really interesting . I am open to discuss about the job opportunity.";
  const encodedBody = encodeURIComponent(bodyContent);
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodedBody}`;
};

const Intro = () => {
  return (
    <div id="intro">
      <div className="IntroContent">
        <span className="hello">Hello</span>

        <span className="name">I'm Vansh</span>

        <span className="work">Web developer</span>

        <span className="intropara">
          Detail-oriented web developer dedicated to building user-friendly
          websites <br />
          that blend functionality with aesthetics for a seamless online
          experience.
        </span>

        <Link>
          <button className="btn" onClick={handleHireButtonClick}>
            <img src="./profile.webp" className="btnimage" alt="btnImage" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src="./Avatar.webp" alt="hello" className="Myimage" />
    </div>
  );
};
export default Intro;
