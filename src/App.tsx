import "./App.scss";
import Header from "./components/layout/header/Header";
// import MainPage from "./components/main/MainPage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";
import Product from "./components/main/product/Product";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <MainPage/> */}
      <Welcome />
      <Product/>
    </div>
  );
}

export default App;
