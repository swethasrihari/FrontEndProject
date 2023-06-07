/*import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  { key: 5, id: 6, image: require("../Images/Home_img2.jpeg") },
  { key: 1, id: 7, image: require("../Images/Home_img3.jpeg") },
  { key: 2, id: 8, image: require("../Images/Home_img4.png") },
  { key: 3, id: 9, image: require("../Images/Home_img5.webp") },
  { key: 4, id: 10, image: require("../Images/Home_img6.webp") }
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
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              key={slide.key}
              id="carouselImg"
              src={slide.image}
              alt="Home slider"
            />
            <label key={slide.id} htmlFor="carouselImg">
              Source: Various
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
export default HomeSlider;*/
