import Logo from "../../../assets/images/Logo.svg";
import cart from "../../../assets/images/cart.svg";
import search from "../../../assets/images/search.svg";
import { IoExitOutline } from "react-icons/io5";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="header">
        <div className="header--logo">
          <img src={Logo} alt="img" />
          <h1>GREENSHOP</h1>
        </div>
        <div className="header--nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/plant"}>Plant Care</NavLink>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </div>
        <div className="header--action">
          <a>
            <img src={search} alt="img" />
          </a>
          <a>
            <img src={cart} alt="img" />
            <div className="header--action__count">6</div>
          </a>
          <button>
            <a>
              <IoExitOutline />
            </a>
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
