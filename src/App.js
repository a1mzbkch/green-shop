import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.scss";
import Header from "./components/layout/header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./redux/userSlice";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                }));
            }
            else {
                dispatch(setUser(null));
            }
        });
        return () => unsubscribe();
    }, [dispatch]);
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsx(Welcome, {})] }));
}
export default App;
