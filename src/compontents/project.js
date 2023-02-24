import { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false)

  const descriptionDisplayed = {
    animation: "inAnimation .5s ease-in"
  };
  const descriptionNotDisplayed = {
    animation: "outAnimation .5s ease-out",
    animationFillMode: "forwards"
  };

  // console.log(project)
  return (
    <a href={project.url} target="_blank" className="project-wrapper" style={{backgroundImage: `url(${project.thumb_image_url})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <div className="link" style={showDescription ? descriptionDisplayed : descriptionNotDisplayed}>
         {showDescription ?  <p>{project.description}</p> : <h2 className="project-title">{project.name}</h2>
 }
        </div>
    </a>
  );
};

export default Project;
