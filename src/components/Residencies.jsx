import React from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import data from "../utils/slider.json"
import { sliderSettings } from "../utils/common"

const Residencies = () => {
  return (
    <section id="residencies">
      <article className="relative overflow-hidden sm:p-6 p-4 w-full xl:max-w-7xl xl:m-auto mt-8">
        <div className="flex flex-col justify-center items-center mb-8 text-center sm:items-start">
          <h3 className=" text-[#ffa500] text-2xl font-semibold">
            Best Choices
          </h3>
          <h2 className="text-[#1f3e72] font-bold text-4xl">
            Popular Residencies
          </h2>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="r-card flex flex-col h-[350px] justify-start text-center items-center gap-2 p-4 rounded-lg max-w-max m-auto ease-in duration-300 border">
                <img className="w-full max-w-60 h-[160px]" src={card.image} alt="home" />
                <div className="text-[#8c8b8b] text-xl font-semibold">
                  <p>
                    <span className="text-[#ffa500]">$</span> {card.price}
                  </p>
                </div>
                <h2 className="text-[#1f3e72] font-bold text-2xl">
                  {card.name}
                </h2>
                <p className="text-[#8c8b8b] text-[0.75rem] w-60 sm:w-auto">
                  {card.detail}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="sm:absolute gap-4 flex justify-center items-center top-[-4rem] right-0 mt-6 sm:mt-0 sm:mr-8">
      <button
        className="text-xl py-1 px-3 text-[#0000ff] border-none rounded-md bg-[#EEEEFF]"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className=" text-xl py-1 px-3 text-[#0000ff] border-none rounded-md bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  )
}
