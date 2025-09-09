import ProductCard from "../../ui/productCard/ProductCard";
import "./Product.scss"

const Product = () => {
  return (
    <section id="product">
      <div className="container">
        <div className="product">
          <ProductCard/>
        </div>
      </div>
    </section>
  );
};

export default Product;
