import React from "react";
import "./mycard.css";

const Mycard = (props) => {
  const { imgSrc, heading, link, desc } = props;

  return (
    <div className="mycard">
      <img src={imgSrc} alt="Card" className="card-image" />
      <h2 className="card-heading">{heading}</h2>
      <p className="card-para">{desc}</p>
    </div>
  );
};

export default Mycard;
