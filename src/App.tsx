import "./App.scss";
import Header from "./components/layout/header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";
import Product from "./components/main/product/Product";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
