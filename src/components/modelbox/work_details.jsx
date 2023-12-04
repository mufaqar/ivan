import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";

const WorkDetails = ({ closeModal, data }) => {
  console.log("🚀 ~ file: work_details.jsx:7 ~ WorkDetails ~ data:", data)
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
    <>
      <div className="max-w-[950px] w-full mx-auto relative p-12  border border-gray/30">
          <button className="absolute top-5 left-5" onClick={closeModal}>Close</button>
        <div className="w-[340px] absolute top-1/2 right-[35px] transform -translate-y-1/2 z-50">
          <Slider
            asNavFor={nav2}
            ref={slider1}
            prevArrow={<customPrevArrow />}
            nextArrow={<customNextArrow />}
          >
            {data?.imageslist?.map((item, id) => (
              <div key={id} className="bg-black">
                <Image
                  src={urlForImage(item.image?.asset?._ref || fallbackImage)
                    .width(306)
                    .url()}
                  alt={""}
                  width={300}
                  height={400}
                  className="h-[460px] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="shade opacity-[0.03]">
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data?.imageslist?.map((item, id) => (
              <figure key={id} className="p-2">
                <Image
                  src={urlForImage(item.image?.asset?._ref || fallbackImage)
                    .width(306)
                    .url()}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="h-[420px] w-full object-cover"
                />
              </figure>
            ))}
          </Slider>
        </div>
        <div className="-mt-[150px] max-w-[400px]">
          <ul>
            <li>
              <strong>Caption Info: </strong>
              <span className="font-light">{data?.caption_info}</span>
            </li>
            <li>
              <strong>Title: </strong>
              <span className="font-light"></span>
            </li>
            <li>
              <strong>Dimensions: </strong>
              <span className="font-light">{data?.dimensions}</span>
            </li>
            <li>
              <strong>Media: </strong>
              <span className="font-light">{data?.media}</span>
            </li>
            <li>
              <strong>Year: </strong>
              <span className="font-light">{data?.projectyear}</span>
            </li>
            <li>
              <strong>Notes: </strong>
              <span className="font-light">{data?.note}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
