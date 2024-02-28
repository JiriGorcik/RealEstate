import React from "react"
import { HiLocationMarker } from "react-icons/hi"
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className="pb-6 text-white">
      <div className="p-4 sm:p-6 w-full flex justify-between items-center xl:max-w-7xl xl:m-auto flex-col lg:flex-row">
        {/* Left side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-12">
          <div className="relative z-10">
            <div className=" sm:h-16 sm:w-16 h-12 w-12 bg-OrangeGradient rounded-full absolute right-[7%] sm:right-[10%] lg:right-[28%] top-[9%] sm:top-[-6%] z-[-1]" />
            <h1 className="font-semibold text-center lg:text-start sm:text-6xl sm:leading-[4rem] text-[2.5rem] leading-[3rem] mt-8 sm:mt-2">
              Discover <br /> Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-300 text-[0.9rem] text-center lg:text-start max-w-[432px]">
              Find a variety of properties that suit you very easily. Forgot all
              difficulties in finding a residence for you 
            </p>
          </div>

          {/* Search bar */}
          <div className="flex lg:justify-start justify-center items-center w-full">
            <div className="bg-white rounded-md py-2 px-4 flex justify-between items-center text-gray-700 gap-2 lg:w-full">
              <div className="flex items-center gap-2 lg:gap-4 justify-center">
                <HiLocationMarker className="h-6 w-6 text-[#4066ff]" />
                <input
                  type="text"
                  className="border-none outline-none w-40 sm:w-auto lg:w-[245px]"
                />
              </div>
              <button className="button bg-BlueGradient ">Search</button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center sm:gap-9 gap-6 mr-1 sm:mr-0">
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="sm:text-3xl text-2xl ml-3 ">
                <CountUp start={8800} end={9000} duration={4} />
                <span className=" text-orange-300">+</span>
              </span>
              <h4 className="text-sm text-gray-200 text-center">
                Premium Products
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <span className="sm:text-3xl text-2xl ml-3">
                <CountUp start={1950} end={2000} duration={4} />
                <span className=" text-orange-300">+</span>
              </span>
              <h4 className="text-sm text-gray-200 text-center">
                Happy Customers
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <span className="sm:text-3xl text-2xl ml-3">
                <CountUp end={28} />
                <span className=" text-orange-300">+</span>
              </span>
              <h4 className="text-sm text-gray-200 text-center sm:text-left">
                Award Winning
              </h4>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-auto flex mt-8 lg:mt-0 justify-center items-center">
          <div className=" sm:w-[28rem] sm:h-[35rem] w-[26rem] h-[30rem] overflow-hidden rounded-t-full border-8 border-white/15">
            <img
              className="w-full h-full object-cover object-center"
              src="./hero-image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
