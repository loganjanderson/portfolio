import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-wrapper">
     
        <h1>Logan Anderson</h1>
        {/* <h2>Front-End Developer</h2> */}
      
    </div>
  );
};
export default Header;
