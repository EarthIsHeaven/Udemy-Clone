import React from 'react';
import Course from './Course';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PythonAndWebProps {
  heading: string;
  description: string;
  buttonText: string;
  datas: Array<{ src: string; name: string; author: string; price: string }>;
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

const PythonAndWeb: React.FC<PythonAndWebProps> = ({ heading, description, buttonText, datas }) => {
  return (
    <div>
        <div className="font-bold text-xl mb-4">{heading}</div>
        <div className="w-7/12 mb-6 text-slate-800">{description}</div>
        <div className="mb-6">
            <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold text-sm px-5 py-2.5 me-2 mb-2"
            >
            Explore {buttonText}
            </button>
        </div>
        <div>
        <Slider {...settings}>
            {datas.map((d, index) => (
            <Course key={index} src={d.src} name={d.name} author={d.author} price={d.price} />
            ))}
            </Slider>
        </div>
    </div>
  );
};

export default PythonAndWeb;
