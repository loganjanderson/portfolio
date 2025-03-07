import { useState } from "react";
import { useEffect } from "react";

import Project from "../compontents/project";
import About from "./about";

import BackgroundImage from "../images/background-image.jpg";
import ContactInfo from "./contactInfo";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://loganjanderson.devcamp.space/portfolio/portfolio_items")
      .then((response) => response.json())
      .then((data) => setProjects(data.portfolio_items));
  }, []);

  const renderProjects = () => {
    return projects.map((item) => {
      return <Project project={item} key={item.id} />;
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="about-section">
        <About />
      </div>
      <div
        className="catch-line"
        style={{
          backgroundImage: `url(${BackgroundImage}`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Development is in the details</h1>
      </div>
      <div className="process">
        <p>
          My design and development process revolves around the belief that
          "development is in the details". I begin by understanding the
          project's goals and user needs, using Figma to create clear, intuitive
          designs. Then, I bring those designs to life with React, ensuring
          clean, scalable code that prioritizes performance and usability.
          Throughout the process, I focus on the finer details, collaborating
          closely with cross-functional teams to deliver high-quality solutions
          on time.
        </p>
      </div>
      <div className="projects">{renderProjects()}</div>
    </div>
  );
};

export default Home;
