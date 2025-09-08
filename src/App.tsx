import "./App.scss";
import Header from "./components/layout/header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Welcome from "./components/main/welcome/Welcome";
import Product from "./components/main/product/Product";
import Footer from "./components/layout/footer/Footer";
import Blog from "./components/main/blog/Blog";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Product/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
