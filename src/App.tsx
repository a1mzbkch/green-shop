import axios from "axios";
import "./App.scss";
import { useEffect } from "react";
import Header from "./components/layout/header/Header";

function App() {
  async function getProduct() {
    let res = await axios(
      `https://green-shop-backend-1.onrender.com/products/`
    );
    console.log(res.data);
  }
  useEffect(() => {
    getProduct()
  },[])

  return <div className="app">
    <Header/>
  </div>;
}

export default App;
