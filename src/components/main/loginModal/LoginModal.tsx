import React, { useState } from "react";
import "./LoginModal.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <IoClose />
        </button>

        <div className="modal__header">
          <span className="active">Login</span>
          <span> I </span>
          <span className="link">Register</span>
        </div>

        <form className="modal__form">
          <input type="email" placeholder="Email" />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <a href="#" className="forgot">
            Forgot Password?
          </a>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        <div className="divider">
          <span></span>
          <p>Or login with</p>
          <span></span>
        </div>

        <div className="social-buttons">
          <button className="google">
            <FcGoogle /> Login with Google
          </button>
          <button className="facebook">
            <FaFacebook /> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
