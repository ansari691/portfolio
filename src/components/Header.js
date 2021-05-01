import { HiOutlineHome } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import './Header.css';

const Header = () => {

  return (
    <div className="d-flex flex-nowrap border-bottom navbar fixed-top justify-content-around py-2" style={{ backgroundColor : "whitesmoke"}}>
      <div>
        <img className="img-fluid logo" src="./assets/images/iaLogo.jpg" alt="iaLogo" style={{ width : "auto", height : "auto", maxHeight : 60}}/>
      </div>
      <a href="#badge" className="d-flex align-items-center p-2">
        <HiOutlineHome className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-md-block">Home</p>
      </a>
      <div className="d-flex align-items-center p-2">
        <IoIosLaptop className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-md-block">Projects</p>
      </div>
      <a href="#experience" className="d-flex align-items-center p-2">
        <RiShieldStarLine className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-md-block">Work Experience</p>
      </a>
      <a href="#education" className="d-flex align-items-center p-2">
        <IoSchoolOutline className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-md-block">Education</p>
      </a>
      <a href="#contact" className="d-flex align-items-center p-2">
        <IoIosContact className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-md-block">Contact</p>
      </a>
    </div>
  );
};

export default Header;
