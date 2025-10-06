
import type React from "react";
import bgImage from "../assets/images/Rectangle 1.png"
import navIcon from "../assets/images/logo.png"

const Navbar: React.FC = () => {
  return (
    <>
   
    <div >
      <img src={bgImage} alt="" />
    </div>
    // Navbar 
    <div>
      <img src={navIcon} alt="" />

    </div>

    </>

    
  );
};

export default Navbar;
