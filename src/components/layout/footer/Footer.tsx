import img1 from "../../../assets/images/garden.svg";
import img2 from "../../../assets/images/Plant.svg";
import img3 from "../../../assets/images/graden.svg";
import Logo from "../../../assets/images/Logo.svg";
import Location from "../../../assets/images/Location.svg";
import Message from "../../../assets/images/Message.svg";
import Calling from "../../../assets/images/Calling.svg";
import Accept from "../../../assets/images/accept.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiCashLine } from "react-icons/ri";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--up">
            <div className="footer--up__item">
              <img src={img1} alt="img" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
            <div className="footer--up__item">
              <img src={img2} alt="img" />
              <h2>Plant Renovation</h2>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
            <div className="footer--up__item">
              <img src={img3} alt="img" />
              <h2>Watering Graden</h2>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
            <div className="footer--up__email">
              <h2>Would you like to join newsletters?</h2>
              <div className="footer--up__email--form">
                <input type="email" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
              <p>
                We usually post offers and challenges in newsletter. We’re{" "}
                <br /> your online houseplant destination. We offer a wide range{" "}
                <br /> of houseplants and accessories shipped directly from our{" "}
                <br /> (green)house to yours!{" "}
              </p>
            </div>
          </div>
          <div className="footer--center">
            <div className="footer--center__logo">
              <img src={Logo} alt="img" />
              <h3>GREENSHOP</h3>
            </div>
            <div className="footer--center__address">
              <img src={Location} alt="img" />
              <h4>
                70 West Buckingham Ave. <br />
                Farmingdale, NY 11735
              </h4>
            </div>
            <div className="footer--center__contacts">
              <img src={Message} alt="img" />
              <h4>contact@greenshop.com</h4>
            </div>
            <div className="footer--center__phone">
              <img src={Calling} alt="img" />
              <h4>+88 01911 717 490</h4>
            </div>
          </div>
          <div className="footer--down">
            <div className="footer--down__navBar">
              <h1>My Account</h1>
              <a>My Account</a>
              <a>Our stores</a>
              <a>Contact us</a>
              <a>Career</a>
              <a>Specials</a>
            </div>
            <div className="footer--down__navBar">
              <h1>Help & Guide</h1>
              <a>Help Center</a>
              <a>How to Buy</a>
              <a>Shipping & Delivery</a>
              <a>Product Policy</a>
              <a>How to Return</a>
            </div>
            <div className="footer--down__navBar">
              <h1>Categories</h1>
              <a>House Plants</a>
              <a>Potter Plants</a>
              <a>Seeds</a>
              <a>Small Plants</a>
              <a>Accessories</a>
            </div>
            <div className="footer--down__media">
              <h1>Social Media</h1>
              <div className="footer--down__media--links">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaLinkedinIn />
                </a>
                <a href="">
                  <RiCashLine />
                </a>
              </div>
              <h1>We accept</h1>
              <div className="footer--down__media--accept">
                <img src={Accept} alt="img" />
              </div>
            </div>
          </div>
          <div className="footer--privace">
            <h4>© 2021 GreenShop. All Rights Reserved.</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
