import { HiOutlineHome } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import './Header.css';

const Header = () => {

  return (
    <div className="d-flex justify-content-around py-2">
      <div className="d-flex">
        <HiOutlineHome className="h-100 mr-2 pt-1 icon"/>
        <p className="mb-0 pt-2 d-none d-sm-block">Home</p>
      </div>
      <div className="d-flex">
        <IoIosLaptop className="h-100 mr-2 pt-1 icon"/>
        <p className="mb-0 pt-2 d-none d-sm-block">Technical Skills</p>
      </div>
      <div className="d-flex">
        <RiShieldStarLine className="h-100 mr-2 pt-1 icon"/>
        <p className="mb-0 pt-2 d-none d-sm-block">Work Experience</p>
      </div>
      <div className="d-flex">
        <IoSchoolOutline className="h-100 mr-2 pt-1 icon"/>
        <p className="mb-0 pt-2 d-none d-sm-block">Education</p>
      </div>
      <div className="d-flex">
        <IoIosContact className="h-100 mr-2 pt-1 icon"/>
        <p className="mb-0 pt-2 d-none d-sm-block">Contact</p>
      </div>
    </div>
  );
};

export default Header;
