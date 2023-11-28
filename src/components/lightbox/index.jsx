import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { WorkData } from "../../pages/work";
import Image from "next/image";

const LightBox = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const customPrevArrow = (props) => (
    <button {...props} className="slick-arrow custom-prev">
      Previous
    </button>
  );
  
  const customNextArrow = (props) => (
    <button {...props} className="slick-arrow custom-next">
      Next
    </button>
  );
  
  return (
    <div className="max-w-[950px] w-full mx-auto relative p-16 border border-gray/30">
      <div className="w-[340px] absolute top-1/2 right-[70px] transform -translate-y-1/2 z-50">
        <Slider 
          asNavFor={nav2} 
          ref={slider1}
          prevArrow={<customPrevArrow />}
          nextArrow={<customNextArrow />}
        >
          {WorkData.map((item, id) => (
            <div key={id} className="bg-black">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="h-[460px] w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
     
      <div className="shade opacity-5">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {WorkData.map((item, id) => (
            <figure key={id} className="p-2">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="h-[420px] w-full object-cover"
              />
            </figure>
          ))}
        </Slider>
      </div>
      <div className="-mt-[150px]">
        <ul>
          <li>
            <strong>Caption Info </strong>
          </li>
          <li>
            <strong>Title</strong>
          </li>
          <li>
            <strong>Dimensions</strong>
          </li>
          <li>
            <strong>Media</strong>
          </li>
          <li>
            <strong>Year</strong>
          </li>
          <li>
            <strong>Notes</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LightBox;



