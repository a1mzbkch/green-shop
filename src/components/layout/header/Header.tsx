import { useState } from "react";
import Logo from "../../../assets/images/Logo.svg";
import cart from "../../../assets/images/cart.svg";
import search from "../../../assets/images/search.svg";
import { IoExitOutline } from "react-icons/io5";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import LoginModal from "../../main/loginModal/LoginModal";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userData = useSelector((state: any) => state.user);
  const nav = useNavigate();

  return (
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
            <div className="header--action__img">
              <img src={search} alt="img" />
            </div>
            <div className="header--action__img">
              <img src={cart} alt="img" />
              <div className="header--action__count">6</div>
            </div>
            {userData.photoURL ? (
              <div className="header--user">
                <img
                  src={userData.photoURL}
                  alt="img"
                  onClick={() => nav("/profile")}
                />
              </div>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <IoExitOutline />
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
