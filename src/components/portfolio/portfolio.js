import React, { useEffect } from "react";
import Mycard from "./mycard.js";
import "./portfolio.css";
import Headers from "./headers.js";

const Imagecarousel = () => {
  useEffect(() => {
    const box = document.querySelector(".product-container");
    if (box) {
      console.log(box.clientWidth);
    }
  }, []);

  const btnpressprev = () => {
    const box = document.querySelector(".product-container");
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    const box = document.querySelector(".product-container");
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width;
    }
  };

  return (
    <section className="product-carousel">
      <Headers />
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        <Mycard
          imgSrc="./11.webp"
          heading="Swift courier"
          link="https://swiftcourier.pythonanywhere.com/"
          desc="This is a fully functional Courier Management System . You can Book , Track , Generate Receipt of your courier . Made with Django and MySQL."
        />
            <Mycard
          imgSrc="./12.webp.webp"
          heading="Daily News and Blogs"
          link="https://dailynewsblogs.pythonanywhere.com/"
          desc="This is a News and Blogs website made for you to be updated with the world all the time. Also developed API endpoints for this website using Django Rest Framework."
        />
        <Mycard
          imgSrc="./10.webp"
          heading="Safar"
          link="https://vanshraghav.github.io/SAFAR/"
          desc="It is a website which helps you to explore more destinations in less time by giving you a shortest path usign Shortest Path Algortihm . Made with love using Django."
        />
        <Mycard
          imgSrc="./4.webp"
          heading="Insights Website"
          link="https://drive.google.com/drive/folders/1LSvLM1PYE62z2FsYXDTXtzrJeBKAncNQ?usp=drive_link"
          desc="This is a full stack project made using Django and many other frontend technologies . For database management i used Postgresql."
        />
        <Mycard
          imgSrc="./1.webp"
          heading="Tindog"
          link="https://vanshraghav.github.io/Tindog/"
          desc="It is social media platform made for your beloved pets .Made using HTML , CSS and Bootstrap."
        />

        <Mycard
          imgSrc="./2.webp"
          heading="TradeG"
          link="https://vanshraghav.github.io/TradeG/"
          desc="It is trading platform made for achieving your financial goals .Made using pure HTML , CSS."
        />
        <Mycard
          imgSrc="./3.webp"
          heading="Youtube Clone"
          link="https://vanshraghav.github.io/Youtube-cc/"
          desc="The project is a clone to the youtube homepage build using pure HTML , CSS ."
        />

        <Mycard
          imgSrc="./5.webp"
          heading="Weather App"
          link="https://github.com/vanshraghav/Myweatherapp"
          desc="The all in one Weather App made using Django and openweather API for live data fetching."
        />
        <Mycard
          imgSrc="./6.webp"
          heading="Emojipedia"
          link="https://7yn238-3000.csb.app/"
          desc="It's a fun website which is made for person like me who always didn't understand the emoji meaning .Made using ReactJs."
        />
        <Mycard
          imgSrc="./7.webp"
          heading="Digital Clock"
          link="https://codesandbox.io/p/github/vanshraghav/Digital-Clock"
          desc="A Norrmal Digital clock made using ReactJS."
        />
      </div>
    </section>
  );
};

export default Imagecarousel;
