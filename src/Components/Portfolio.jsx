import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desk with multiple laptops, mobile, headphone, diary and some more gadgets";

const projectList = [
  {
    title: "tic-tac-toe: Web Based Game Application",
    description:
      "Tic-Tac-Toe is a web game with a score table for multiple rounds, that allows users to choose their game icons to play with.",
    url: "https://github.com/chauhanshilpa/tic-tac-toe",
  },
  {
    title: "To-do: Task Managemnet Web Application",
    description:
      "Full stack web application whic allows users to create, edit, complete, and delete tasks in multiple lists.",
    url: "https://github.com/chauhanshilpa/To-Do",
  },
  {
    title: "NoteKeeper: Note Keeping Web Application",
    description:
      "NoteKeeper is a user-friendly note-taking application to organize thoughts, ideas, and tasks with features for adding, editing, deleting, and customizing notes.",
    url: "https://github.com/chauhanshilpa/NoteKeeper-NextJS",
  },
  {
    title: "FabShop: E-commerce Website",
    description:
      "FabShop is a e-commerce website, featuring product search, wishlist, and multi-item cart and ordering for Men, Women, and Kids categories.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
];

const experienceList = [
  {
    name: "Lazarus Network",
    url: "https://github.com/chauhanshilpa/tic-tac-toe",
    role: "Frontend Web Developer Intern",
    description:
      "I was responsible for building responsive landing pages, implementing routing, and developing components using ReactJS and NextJS. Additionally, I integrated ZK login and a real-time random chat feature, while working closely with clients to gather requirements..",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", fontWeight: "700" }}>Portfolio</h2>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "3rem", fontWeight: "600" }}>Experience</h3>
        <div>
          <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div
              style={{
                border: "1px solid rgb(204, 204, 204)",
                borderRadius: "10px",
                width: "60%",
                margin: "auto",
                padding: "24px 16px",
                marginBottom: "3rem",
              }}
            >
              {experienceList.map((experience, id) => (
                <div className="box" key={id}>
                  <a href={experience.url} target="_blank" rel="noopener noreferrer">
                    <h3 style={{ flexBasis: "40px", fontWeight: "600" }}>{experience.name}</h3>
                  </a>
                  <div style={{ flexBasis: "40px", marginTop: "0.8rem" }}>{experience.role}</div>
                  <p className="small">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center", fontWeight: "600" }}>Projects</h3>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
              src={image}
              style={{ height: "90%", width: "100%", objectFit: "cover" }}
              alt={imageAltText}
            />
          </div>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="digital_resume">
        <a
          href="https://chauhanshilpa.github.io/shilpa-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see Digital Resume
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
