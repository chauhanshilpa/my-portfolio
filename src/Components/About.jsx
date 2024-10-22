/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "brown background";

const description =
  "I'm a passionate web developer, dedicated to crafting captivating online experiences through innovative code. I enjoy creating unique and simplistic user interfaces in creative ways.";

const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "GIT",
  "GitHub",
  "VS Code",
];

const detailOrQuote =
  "I am passionate about solving problems through creative solutions to drive innovation. With my frontend development experience, I continually seek better ways to make technology more accessible and user-friendly.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
