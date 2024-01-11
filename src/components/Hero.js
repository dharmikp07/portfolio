import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="cers text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">D</span>harmik <br />
            Fullstack Developer
          </h1>

          <p className="py-5">I am proficient in Java, React.js and PHP</p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/dharmikp07"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="www.linkedin.com/in/dharmikpadhiyar07"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="mailto:dharmikpadhiyar07@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
