import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import BlockContent from "@sanity/block-content-to-react";

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
        <button className="absolute text-2xl z-[101] bg-yellow rounded-full p-1 md:top-3 top-10 right-3" onClick={closeModal}>
          <RxCross2 />
        </button>
        <div className="z-50 w-full h-full">
          <div className="flex flex-col bottom-7 justify-end md:ml-16 z-[100] absolute md:bottom-40 p-4 md:p-7">
            <div className="text-4xl mb-4 md:mb-4 flex gap-2">
              <button onClick={() => slider?.current?.slickPrev()}>
                <BsArrowLeftCircleFill />
              </button>
              <button onClick={() => slider?.current?.slickNext()}>
                <BsArrowRightCircleFill />
              </button>
            </div>
          </div>
          <Slider {...settings} ref={slider}>
            {data?.imageslist?.map((item, id) => (
              <div className="!grid md:grid-cols-2" key={id}>
                <div className="p-4 pb-0 flex md:justify-center pt-12 md:pt-0 lg:justify-end md:ml-20 items-start flex-col editor">
                  <BlockContent blocks={item?.info} />
                </div>
                <div className="flex justify-start md:justify-end items-center flex-col h-full mt-[4%]">
                  <Image
                    src={urlForImage(item.image?.asset?._ref || fallbackImage)
                      .width(306)
                      .url()}
                    alt={""}
                    width={600}
                    height={400}
                    className="object-contain h-auto md:h-[90vh] overflow-hidden"
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
