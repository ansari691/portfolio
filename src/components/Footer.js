import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

import "./Footer.css"

const Footer = () => {
  return (
    <div className="text-center pb-5">
      <div className="py-5">
        <h2>Contact Me</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4 px-md-5 contact-item">
          <div className="d-flex justify-content-center align-items-center border shadow py-2">
            <BiUser className="mr-3" />
            <span>Ibrahim Ansari</span>
          </div>
        </div>
        <div className="col-sm-4 px-md-5 contact-item">
          <div className="d-flex justify-content-center align-items-center border shadow py-2">
            <BiPhone className="mr-3"/>
            <span>7276963147</span>
          </div>
        </div>
        <div className="col-sm-4 px-md-5 contact-item">
          <div className="d-flex justify-content-center align-items-center border shadow py-2">
            <AiOutlineMail className="mr-3"/>
            <span>ansari691@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-around p-5">
        <div className="px-5">
          <a href="#somewhere">
            <FiInstagram className="social-link-icon"/>
          </a>
        </div>
        <div>
          <a href="#somewhere">
            <FiInstagram className="social-link-icon"/>
          </a>
        </div>
        <div>
          <a href="#somewhere">
            <FiInstagram className="social-link-icon"/>
          </a>
        </div>
        <div>
          <a href="#somewhere">
            <FiInstagram className="social-link-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
