import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./Welcome.scss";
import Welcome1 from "../../../assets/images/welcome1.svg";

const Welcome: React.FC = () => {
  return (
    <section id="welcome">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="welcome">
              <div className="welcome--title">
                <h4>Welcome to GreenShop</h4>
                <h1>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button>SHOP NOW</button>
              </div>
              <div className="welcome--img">
                <img src={Welcome1} alt="img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="welcome">
              <div className="welcome--title">
                <h4>GreenShop Specials</h4>
                <h1>
                  Bring Nature To Your <span>Home</span>
                </h1>
                <p>
                  Discover a variety of beautiful indoor and outdoor plants that
                  refresh your space and improve your lifestyle.
                </p>
                <button>DISCOVER</button>
              </div>
              <div className="welcome--img">
                <img src={Welcome1} alt="img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="welcome">
              <div className="welcome--title">
                <h4>Exclusive Offers</h4>
                <h1>
                  Make Your Life More <span>Green</span>
                </h1>
                <p>
                  Choose from our best collections with exclusive discounts.
                  Bring freshness and calmness to your space with beautiful
                  plants.
                </p>
                <button>EXPLORE</button>
              </div>
              <div className="welcome--img">
                <img src={Welcome1} alt="img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Welcome;
