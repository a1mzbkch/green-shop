import Logo from "../../../assets/images/Logo.svg";
import cart from "../../../assets/images/cart.svg";
import search from "../../../assets/images/search.svg";
import { IoExitOutline } from "react-icons/io5";
import "./Header.scss";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="header">
        <div className="header--logo">
          <img src={Logo} alt="img" />
          <h1>GREENSHOP</h1>
        </div>
        <div className="header--nav">
          <a>Home</a>
          <a>Shop</a>
          <a>Plant Care</a>
          <a>Blogs</a>
        </div>
        <div className="header--action">
          <a>
            <img src={search} alt="img" />
          </a>
          <a>
            <img src={cart} alt="img" />
            <div className="header--action__count">0</div>
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
