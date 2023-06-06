import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../Images/Home_img2.jpeg")
  },
  {
    image: require("../Images/Home_img3.jpeg")
  },
  {
    image: require("../Images/Home_img4.png")
  },
  {
    image: require("../Images/Home_img5.webp")
  },
  {
    image: require("../Images/Home_img6.webp")
  }
];

function HomeSlider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              id="carouselImg"
              src={slide.image}
              alt="Home slider"
            />
            <label for="carouselImg">
              https://www.geeksforgeeks.org/carbon-footprint/
              https://www.npws.net/blog/carbon-footprint-marketing
              https://sustainability.georgetown.edu/community-engagement/things-you-can-do/
              https://www.infoworld.com/article/3690730/climate-change-whats-driving-its-climate-push.html
            </label>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeSlider;
