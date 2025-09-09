import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice";
import "./LoginModal.scss";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.svg";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../../firebase";
const LoginModal = ({ onClose }) => {
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
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };
    const GoogleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            dispatch(setUser({
                email: user.email,
                name: user.displayName,
                photoURL: user.photoURL,
            }));
            onClose();
        }
        catch (error) {
            console.error("Google login error:", error);
            setError("Google login failed");
        }
        finally {
            setLoading(false);
        }
    };
    const FacebookLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;
            dispatch(setUser({
                email: user.email,
                name: user.displayName,
                photoURL: user.photoURL,
            }));
            onClose();
        }
        catch (error) {
            console.error("Facebook login error:", error);
            setError("Facebook login failed");
        }
        finally {
            setLoading(false);
        }
    };
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = result.user;
            dispatch(setUser({
                email: user.email,
                name: user.displayName,
                photoURL: user.photoURL,
            }));
            onClose();
        }
        catch (error) {
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
        }
        finally {
            setLoading(false);
        }
    };
    const handleRegister = async (e) => {
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
            const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = result.user;
            await updateProfile(user, {
                displayName: formData.name,
            });
            await user.reload();
            dispatch(setUser({
                email: user.email,
                name: formData.name,
                photoURL: user.photoURL,
            }));
            onClose();
        }
        catch (error) {
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
        }
        finally {
            setLoading(false);
        }
    };
    const toggleMode = () => {
        setIsLogin(!isLogin);
        setFormData({ email: "", password: "", name: "" });
        setError("");
    };
    return (_jsxs("div", { className: "modal", children: [_jsx("div", { className: "modal__overlay", onClick: onClose }), _jsxs("div", { className: "modal__content", children: [_jsx("button", { className: "modal__close", onClick: onClose, children: _jsx(IoClose, {}) }), _jsxs("div", { className: "modal__header", children: [_jsx("span", { className: isLogin ? "active" : "link", onClick: () => setIsLogin(true), children: "Login" }), _jsx("span", { children: " | " }), _jsx("span", { className: !isLogin ? "active" : "link", onClick: () => setIsLogin(false), children: "Register" })] }), _jsx("h2", { children: isLogin
                            ? "Enter your email and password to login."
                            : "Create a new account" }), _jsxs("form", { className: "modal__form", onSubmit: isLogin ? handleEmailLogin : handleRegister, children: [!isLogin && (_jsx("input", { type: "text", name: "name", placeholder: "Username", value: formData.name, onChange: handleInputChange, disabled: loading })), _jsx("input", { type: "email", name: "email", placeholder: "Enter your email address", value: formData.email, onChange: handleInputChange, disabled: loading }), _jsxs("div", { className: "password-field", children: [_jsx("input", { type: showPassword ? "text" : "password", name: "password", placeholder: "Password", value: formData.password, onChange: handleInputChange, disabled: loading }), _jsx("span", { className: "toggle", onClick: () => setShowPassword(!showPassword), children: !showPassword ? _jsx(FaRegEye, {}) : _jsx(FaRegEyeSlash, {}) })] }), error && _jsx("div", { className: "error-message", children: error }), _jsx("button", { type: "submit", className: "btn-login", disabled: loading, children: loading
                                    ? isLogin
                                        ? "Logging in..."
                                        : "Registering..."
                                    : isLogin
                                        ? "Login"
                                        : "Register" })] }), _jsxs("div", { className: "divider", children: [_jsx("span", {}), _jsxs("p", { children: ["Or ", isLogin ? "login" : "register", " with"] }), _jsx("span", {})] }), _jsxs("div", { className: "social-buttons", children: [_jsxs("button", { className: "google", onClick: GoogleLogin, disabled: loading, children: [_jsx("img", { src: google, alt: "Google" }), isLogin ? "Login" : "Register", " with Google"] }), _jsxs("button", { className: "facebook", onClick: FacebookLogin, disabled: loading, children: [_jsx("img", { src: facebook, alt: "Facebook" }), isLogin ? "Login" : "Register", " with Facebook"] })] }), isLogin && (_jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: _jsxs("span", { style: { fontSize: "14px", color: "#666" }, children: ["Don\u2019t have an account?", _jsx("span", { style: {
                                        color: "#46A358",
                                        cursor: "pointer",
                                        marginLeft: "5px",
                                    }, onClick: toggleMode, children: "Register here" })] }) })), !isLogin && (_jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: _jsxs("span", { style: { fontSize: "14px", color: "#666" }, children: ["Already have an account?", _jsx("span", { style: {
                                        color: "#46A358",
                                        cursor: "pointer",
                                        marginLeft: "5px",
                                    }, onClick: toggleMode, children: "Login here" })] }) }))] })] }));
};
export default LoginModal;
