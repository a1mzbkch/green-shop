import img1 from "../../../assets/images/garden.svg";
import img2 from "../../../assets/images/Plant.svg";
import img3 from "../../../assets/images/graden.svg";
import Logo from "../../../assets/images/Logo.svg";
// import { CiLocationOn } from "react-icons/ci";

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
              <h1>GREENSHOP</h1>
            </div>
            <div className="footer--address">
              <img src="" alt="" />
              <h4>
                70 West Buckingham Ave. <br />
                Farmingdale, NY 11735
              </h4>
            </div>
            <div className="footer--contacts"></div>
            <div className="footer--phone"></div>
          </div>
          <div className="footer--down"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
