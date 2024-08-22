"use client";

import React, { useRef } from "react";
import { ContactUsIcon1 } from "@/components/Icons/ContactUs1";
import { ContactUsIcon2 } from "@/components/Icons/ContactUs2";
import { ContactUsIcon3 } from "@/components/Icons/ContactUs3";
import { useContactContext } from "../context/ContactContext";
import { useIsMobile } from "../hooks/useIsMobile";
import ClassNames from "classnames";
import { ContactType } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stateBoxes = [
  {
    icon: ContactUsIcon1,
    title: ContactType.COMERCIALIZA,
    description: "Nuestros Productos",
  },
  {
    icon: ContactUsIcon2,
    title: ContactType.ATENCION,
    description: "Al Cliente",
  },
  {
    icon: ContactUsIcon3,
    title: ContactType.TRABAJA,
    description: "Con Nosotros",
  },
];

export const ContactStateBoxes = () => {
  const { contactType, setContactType } = useContactContext();
  const { isMobile } = useIsMobile();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleStateBoxClick = (title: ContactType, index: number) => {
    setContactType(title);
    if (isMobile && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const renderStateBox = (state: (typeof stateBoxes)[0], index: number) => (
    <div
      key={state.title}
      onClick={() => handleStateBoxClick(state.title, index)}
      className={ClassNames("contact-us__state-box", {
        "contact-us__state-box--active": state.title === contactType,
      })}
    >
      <>{<state.icon />}</>
      <div>
        <h4>{state.title}</h4>
        <p>{state.description}</p>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1.75}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setContactType(stateBoxes[swiper.activeIndex].title);
        }}
        className="contact-us__mobile-swiper"
      >
        {stateBoxes.map((state, index) => (
          <SwiperSlide key={state.title}>
            {renderStateBox(state, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="contact-us__state-boxes">
      {stateBoxes.map((state, index) => renderStateBox(state, index))}
    </div>
  );
};

export default ContactStateBoxes;
