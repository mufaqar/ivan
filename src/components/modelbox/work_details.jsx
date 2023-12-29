import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.05,
      duration: .5
    },
  },
};

const WorkDetails = ({ closeModal, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = React.useRef(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        sliderElement.slickPrev();
      } else if (event.key === "ArrowRight") {
        sliderElement.slickNext();
      }
    };
    // Attach event listener for keydown
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="w-screen h-screen mx-auto relative border border-gray/30 z-50 outline-none">
        <button
          className="absolute text-2xl z-[101] bg-yellow rounded-full p-1 md:top-3 top-10 right-3"
          onClick={closeModal}
        >
          <RxCross2 />
        </button>
        <div className="z-50 w-full h-full">
          <div className="flex flex-col bottom-7 justify-end md:ml-16 z-[100] absolute md:bottom-0 p-4 md:p-7">
            <div className="text-4xl mb-4 md:mb-4 flex gap-2">
              <button
                onClick={() => sliderRef?.current?.slickPrev()}
                className="ring-0 outline-none"
              >
                <BsArrowLeftCircleFill />
              </button>
              <button
                onClick={() => sliderRef?.current?.slickNext()}
                className="ring-0 outline-none"
              >
                <BsArrowRightCircleFill />
              </button>
            </div>
          </div>
          <Slider
            {...settings}
            ref={sliderRef}
            className="outline-none ring-0 border-none"
          >
            {data?.imageslist?.map((item, id) => (
              <div
                className="!grid md:grid-cols-2"
                key={id}
                onClick={closeModal}
              >
                <div className="p-4 pb-0 flex md:justify-center pt-12 md:pb-12 md:pt-0 lg:justify-end md:ml-20 items-start flex-col editor">
                  <BlockContent blocks={item?.info} />
                </div>
                <div className="flex justify-start md:justify-end items-center flex-col h-full mt-[4%]">
                  <motion.figure
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                  >
                    <Image
                      src={urlForImage(item.image?.asset?._ref || fallbackImage)
                        .width(306)
                        .url()}
                      alt={""}
                      width={600}
                      height={400}
                      className="object-contain h-auto md:h-[90vh] overflow-hidden"
                    />
                  </motion.figure>
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
