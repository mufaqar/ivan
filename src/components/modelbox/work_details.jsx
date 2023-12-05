import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const WorkDetails = ({ closeModal, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <>
      <div className="w-screen h-screen mx-auto relative border border-gray/30 z-50">
        <button className="absolute text-2xl z-[101] top-10s right-3" onClick={closeModal}>
          <RxCross2 />
        </button>
        <div className="z-50 w-full h-full">
          <div className="flex flex-col bottom-2 justify-end md:ml-20 z-[100] absolute md:bottom-10 left-0 bg-white p-4 md:p-7">
            <div className="text-4xl mb-4 flex gap-2">
              <button onClick={() => slider?.current?.slickPrev()}>
                <BsArrowLeftCircleFill />
              </button>
              <button onClick={() => slider?.current?.slickNext()}>
                <BsArrowRightCircleFill />
              </button>
            </div>
            <ul className="text-xs sm:text-sm">
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
          <Slider {...settings} ref={slider}>
            {data?.imageslist?.map((item, id) => (
              <div className="!grid md:grid-cols-2" key={id}>
                <div></div>
                <div className="flex justify-end items-center flex-col h-full mt-[4%]">
                  <Image
                    src={urlForImage(item.image?.asset?._ref || fallbackImage)
                      .width(306)
                      .url()}
                    alt={""}
                    width={600}
                    height={400}
                    className="object-contain mt-[10%] md:mt-0 h-[90vh] overflow-hidden"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
