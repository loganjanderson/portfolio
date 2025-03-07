import LoganImage from "../images/logan-photo.jpeg";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="intro">
        <h1>Hi, I'm Logan!</h1>
        <p> Developer - Designer - Leader</p>
        <p>
          I’m a front-end developer who loves building clean, user-friendly web
          applications.
        </p>
      </div>
      {/* <p>
        Hi! I'm Logan Anderson, a front-end developer with 3+ years of
        experience building user-focused web applications.
        <br />
        <br />
        Skilled in Figma, Javascript, and React I create scalable,
        high-performance interfaces. With a background in management, I bridge
        the gap between technical execution and business goals.
        <br />
        <br />
        Passionate about problem-solving and continuous learning, I thrive on
        building efficient, user-friendly solutions. Let’s create something
        great together.
      </p> */}
      <img src={LoganImage} alt="" />
    </div>
  );
};

export default About;
