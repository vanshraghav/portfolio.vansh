import React from "react";
import "./about.css";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skilldesc">
        I'm a passionate web developer having experience with HTML , CSS ,
        Bootstrap , Django ,ReactJS ,Javascript and more ....
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            className="skillBarImg"
            src="./ui-design (1).png"
            alt="skillbar"
          />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p>
              I have good grasp over front end technologies like ReactJS,
              Bootstrap,HTML,CSS .
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src="./backend (1).png" alt="skillbar" />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>I love doing difficult backend projects in Django , FastApi .</p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src="./UI.webp" alt="skillbar" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              Currently pursuing App development skills using Flutter and Dart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
