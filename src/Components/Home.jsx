import React from "react";
import PropTypes from "prop-types";

import image from "../images/woman-with-tablet.jpg";

const imageAltText =
  "A woman's hands are typing on a MacBook with a code-filled screen and a blue sidebar menu. The laptop rests on a light wooden surface, with a watch visible on the wrist. The image has a warm, slightly blurred focus on the hands and screen.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
