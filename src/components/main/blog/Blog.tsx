import BlogCard from "../../ui/blogCard/BlogCard";
import "./Blog.scss"

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="blogTitle">
          <h1>Our Blog Posts</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.{" "}
          </p>
        </div>
        <div className="blog">
          <BlogCard/>
        </div>
      </div>
    </section>
  );
};

export default Blog;
