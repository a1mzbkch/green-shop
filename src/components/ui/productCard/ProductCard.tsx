import axios from "axios";
import "./ProductCard.scss";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState<any[]>([]);

  async function getProducts() {
    let res = await axios.get(
      "https://green-shop-backend-1.onrender.com/products/"
    );
    setProducts(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productCard">
      {products.map((item) => (
        <div key={item._id} className="productCard--item">
          <img src={item.img} alt={item.name} />
          <div className="productCard--content">
            <h4>{item.name}</h4>
            <h2>${item.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
