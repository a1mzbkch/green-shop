import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.scss";
import Header from "./components/layout/header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";
function App() {
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsx(Welcome, {})] }));
}
export default App;
