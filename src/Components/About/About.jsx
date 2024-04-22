import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about" id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          consectetur quo non. Odit quas sequi repellendus nesciunt quis, ad
          veniam necessitatibus, qui atque fugiat magni saepe asperiores? Saepe,
          quos quam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          consectetur quo non. Odit quas sequi repellendus nesciunt quis, ad
          veniam necessitatibus, qui atque fugiat magni saepe asperiores? Saepe,
          quos quam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          consectetur quo non. Odit quas sequi repellendus nesciunt quis, ad
          veniam necessitatibus, qui atque fugiat magni saepe asperiores? Saepe,
          quos quam!
        </p>
      </div>
    </div>
  );
};

export default About;
