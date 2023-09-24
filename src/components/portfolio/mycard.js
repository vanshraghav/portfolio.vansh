import React from "react";
import "./mycard.css";

const Mycard = (props) => {
  const { imgSrc, heading, link, desc } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="mycard">
      <div className="mycard">
        <img src={imgSrc} alt="Card" className="card-image" />
        <h2 className="card-heading">{heading}</h2>
        <p className="card-para">{desc}</p>
      </div>
    </a>
  );
};

export default Mycard;
