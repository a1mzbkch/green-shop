import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "../../../assets/images/Logo.svg";
import cart from "../../../assets/images/cart.svg";
import search from "../../../assets/images/search.svg";
import { IoExitOutline } from "react-icons/io5";
import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => (_jsx("header", { id: "header", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "header", children: [_jsxs("div", { className: "header--logo", children: [_jsx("img", { src: Logo, alt: "img" }), _jsx("h1", { children: "GREENSHOP" })] }), _jsxs("div", { className: "header--nav", children: [_jsx(NavLink, { to: "/", children: "Home" }), _jsx(NavLink, { to: "/shop", children: "Shop" }), _jsx(NavLink, { to: "/plant", children: "Plant Care" }), _jsx(NavLink, { to: "/blogs", children: "Blogs" })] }), _jsxs("div", { className: "header--action", children: [_jsx("a", { children: _jsx("img", { src: search, alt: "img" }) }), _jsxs("a", { children: [_jsx("img", { src: cart, alt: "img" }), _jsx("div", { className: "header--action__count", children: "6" })] }), _jsxs("button", { children: [_jsx("a", { children: _jsx(IoExitOutline, {}) }), "Login"] })] })] }) }) }));
export default Header;
