import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlineFacebook, AiFillHeart} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

import "./Footer.css"

const Footer = () => {
  return (
    <div className="text-center pb-5" id="contact">
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
          <a href="tel:7276963147" className="d-flex justify-content-center align-items-center border shadow py-2">
            <BiPhone className="mr-3"/>
            <span>7276963147</span>
          </a>
        </div>
        <div className="col-sm-4 px-md-5 contact-item">
            <a href="mailto:ansari691@gmail.com" className="d-flex justify-content-center align-items-center border shadow py-2">
            <AiOutlineMail className="mr-3"/>
            <span>ansari691@gmail.com</span>
            </a>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center p-sm-5">
          <a href="https://www.instagram.com/ansari691/" target="_blank" className="p-2">
            <FiInstagram className="social-link-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/ansari691/" target="_blank" className="p-2">
            <AiFillLinkedin className="social-link-icon"/>
          </a>
          <a href="https://github.com/ansari691" target="_blank" className="p-2">
            <AiFillGithub className="social-link-icon"/>
          </a>
          <a href="https://www.facebook.com/ansari691" target="_blank" className="p-2">
            <AiOutlineFacebook className="social-link-icon"/>
          </a>
      </div>

      <div>
        <p>Made with <AiFillHeart color="red" />  by Ibrahim Ansari. © 2021</p>
      </div>
    </div>
  );
};

export default Footer;
