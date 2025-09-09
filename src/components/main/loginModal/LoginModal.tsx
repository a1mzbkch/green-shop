import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice";
import "./LoginModal.scss";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.svg";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../../firebase";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const GoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      dispatch(
        setUser({
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        })
      );
      onClose();
    } catch (error: any) {
      console.error("Google login error:", error);
      setError("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  const FacebookLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      dispatch(
        setUser({
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        })
      );
      onClose();
    } catch (error: any) {
      console.error("Facebook login error:", error);
      setError("Facebook login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = result.user;

      dispatch(
        setUser({
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        })
      );
      onClose();
    } catch (error: any) {
      console.error("Email login error:", error);
      switch (error.code) {
        case "auth/user-not-found":
          setError("User not found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later");
          break;
        default:
          setError("Login error. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password || !formData.name) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = result.user;

      await updateProfile(user, {
        displayName: formData.name,
      });
      await user.reload();
      dispatch(
        setUser({
          email: user.email,
          name: formData.name,
          photoURL: user.photoURL,
        })
      );
      onClose();
    } catch (error: any) {
      console.error("Register error:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already in use");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/weak-password":
          setError("Password is too weak");
          break;
        default:
          setError("Registration error. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "" });
    setError("");
  };

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <IoClose />
        </button>

        <div className="modal__header">
          <span
            className={isLogin ? "active" : "link"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span> | </span>
          <span
            className={!isLogin ? "active" : "link"}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>

        <h2>
          {isLogin
            ? "Enter your email and password to login."
            : "Create a new account"}
        </h2>

        <form
          className="modal__form"
          onSubmit={isLogin ? handleEmailLogin : handleRegister}
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn-login" disabled={loading}>
            {loading
              ? isLogin
                ? "Logging in..."
                : "Registering..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        <div className="divider">
          <span></span>
          <p>Or {isLogin ? "login" : "register"} with</p>
          <span></span>
        </div>

        <div className="social-buttons">
          <button className="google" onClick={GoogleLogin} disabled={loading}>
            <img src={google} alt="Google" />
            {isLogin ? "Login" : "Register"} with Google
          </button>
          <button
            className="facebook"
            onClick={FacebookLogin}
            disabled={loading}
          >
            <img src={facebook} alt="Facebook" />
            {isLogin ? "Login" : "Register"} with Facebook
          </button>
        </div>

        {isLogin && (
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>
              Don’t have an account?
              <span
                style={{
                  color: "#46A358",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={toggleMode}
              >
                Register here
              </span>
            </span>
          </div>
        )}

        {!isLogin && (
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>
              Already have an account?
              <span
                style={{
                  color: "#46A358",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={toggleMode}
              >
                Login here
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
