import "./App.scss";
import Header from "./components/layout/header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
