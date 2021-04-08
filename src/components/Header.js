import { HiOutlineHome } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import './Header.css';

const Header = () => {

  return (
    <div className="d-flex border-bottom navbar fixed-top justify-content-around py-2" style={{ backgroundColor : "whitesmoke"}}>
      <div>
        <img className="img-fluid" src="./assets/images/iaLogo.jpg" alt="iaLogo" style={{ width : "auto", height : 60}}/>
      </div>
      <div className="d-flex align-items-center">
        <HiOutlineHome className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-sm-block">Home</p>
      </div>
      <div className="d-flex align-items-center">
        <IoIosLaptop className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-sm-block">Projects</p>
      </div>
      <div className="d-flex align-items-center">
        <RiShieldStarLine className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-sm-block">Work Experience</p>
      </div>
      <div className="d-flex align-items-center">
        <IoSchoolOutline className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-sm-block">Education</p>
      </div>
      <div className="d-flex align-items-center">
        <IoIosContact className="h-100 mr-2 icon"/>
        <p className="mb-0 d-none d-sm-block">Contact</p>
      </div>
    </div>
  );
};

export default Header;
