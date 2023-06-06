import React from "react";
import CarouselSlider from "react-carousel-slider";
export default function DisplayCarousel() {
  let data = [
    {
      id: "1",
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/05/14/12/26/pollution-6253264_1280.jpg"
    },
    {
      id: "2",
      imgSrc:
        "https://cdn.pixabay.com/photo/2020/02/26/00/25/planet-4880337_1280.png"
    },
    {
      id: "3",
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/11/20/18/07/global-warming-4640729_1280.jpg"
    },
    {
      id: "4",
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/12/15/09/07/climate-change-1908381_640.png"
    },
    {
      id: "5",
      imgSrc:
        "https://cdn.pixabay.com/photo/2022/11/06/09/55/ai-generated-7573620_1280.jpg"
    }
  ];
  // let manner = {
  //   autoSliding: { interval: "2s" }
  // };
  let buttonSetting = {
    placeOn: "bottom-beneath",
    //hoverEvent: true,
    style: {
      left: {
        margin: "0px 0px 0px 10px"
      },
      right: {
        margin: "0px 10px 0px 0px"
      }
    }
  };
  let itemsStyle = {
    margin: "0px 0px",
    padding: "0px"
  };
  return (
    <div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        // manner={manner}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  );
}
