import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel1.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="container-1 overflow-hidden h-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#00000000",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1535953267280-5fd672f9bfa3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse  md:gap-5">
            <div className="md:w-[60%] w-full">
              <div
                className="title leading-[6vmax] md:leading-[4vw]"
                data-swiper-parallax="-300"
              >
                Slide 3
              </div>
              <div
                className="subtitle leading-[5.5vw] md:leading-[2vw] "
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="h-[13.5vh]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                </p>
              </div>
            </div>
            <div className="md:w-[40%] h-[15vh] md:h-[30vh] md:p-3 ">
              <img
                className="h-full rounded-lg w-full"
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse  md:gap-5">
            <div className="md:w-[60%] w-full">
              <div
                className="title leading-[6vmax] md:leading-[4vw]"
                data-swiper-parallax="-300"
              >
                Slide 3
              </div>
              <div
                className="subtitle leading-[5.5vw] md:leading-[2vw] "
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="h-[13.5vh]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                </p>
              </div>
            </div>
            <div className="md:w-[40%] h-[15vh] md:h-[30vh] md:p-3 ">
              <img
                className="h-full rounded-lg w-full"
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse  md:gap-5">
            <div className="md:w-[60%] w-full">
              <div
                className="title leading-[6vmax] md:leading-[4vw]"
                data-swiper-parallax="-300"
              >
                Slide 3
              </div>
              <div
                className="subtitle leading-[5.5vw] md:leading-[2vw] "
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="h-[13.5vh]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                </p>
              </div>
            </div>
            <div className="md:w-[40%] h-[15vh] md:h-[30vh] md:p-3 ">
              <img
                className="h-full rounded-lg w-full"
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
