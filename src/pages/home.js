import { useState } from "react";
import { useEffect } from "react";

import Project from "../compontents/project";
import About from "./about";

import Dots from "../images/blob2.png"
import ContactInfo from "./contactInfo";

const Home = () => {
const [projects, setProjects] = useState([])

useEffect(() => {
  fetch('https://loganjanderson.devcamp.space/portfolio/portfolio_items')
    .then((response) => response.json())
    .then((data) => setProjects(data.portfolio_items))
}, [])





  

  const renderProjects = () => {
    return projects.map((item) => {
      return <Project project={item} />;
    });
  };

  return <div className="home-page-wrapper">
    <div className="catch-line" style={{backgroundImage: `url(${Dots}`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <h1>Development is in the details</h1>
    </div>
    <div className="about-section">
    <About />
    </div>
    <div className="projects">
     {renderProjects()} 
    </div>
 
    </div>;
};

export default Home;
