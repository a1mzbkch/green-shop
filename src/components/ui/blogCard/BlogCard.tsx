import { FaArrowRight } from "react-icons/fa";
import Blog from "../../../assets/images/blog.svg";
import "./BlogCard.scss";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <img src={Blog} alt="img" />
      <div className="blogCard--content">
        <h4>
          September 12 <span>|</span> Read in 6 minutes
        </h4>
        <h2>
          Cactus & Succulent <br />
          Care Tips
        </h2>
        <p>
          Cacti are succulents are easy care <br /> plants for any home or
          patio.{" "}
        </p>
        <a>
          Read More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
