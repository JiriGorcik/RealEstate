import React from "react"
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2"

const Contact = () => {
  return (
    <section id="contact">
      <div className="p-4 sm:p-6 w-full flex justify-between items-center xl:max-w-7xl xl:m-auto flex-col lg:flex-row gap-x-4">
        {/* Left side */}
        <div className="flex flex-col justify-center items-center sm:items-start flex-1 gap-2">
          <h3 className="text-[#ffa500] text-2xl font-semibold">
            Our Contacts
          </h3>
          <h2 className="text-[#1f3e72] text-4xl font-bold text-center">
            Easy to Contact us
          </h2>
          <div className="text-[#8c8b8b] text-sm text-center sm:text-start">
            <p>
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better
            </p>
          </div>

          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center mt-8 gap-6 w-full sm:flex-row">
            {/* First row */}
            <div className="flex justify-center items-start gap-6 flex-col sm::flex-row">
              <div className="flex flex-col justify-center items-center w-64 p-4 border-[0.8px] border-[#80808024] gap-4 ease-in duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span>Call</span>
                    <span>755 465 325</span>
                  </div>
                </div>
                <div className="button flex justify-center items-center w-full bg-lightBlue text-blue font-semibold hover:bg-BlueGradient hover:text-white hover:scale-95">
                  Call Now
                </div>
              </div>

              {/* Second mode */}
              <div className="flex flex-col justify-center items-center w-64 p-4 border-[0.8px] border-[#80808024] gap-4 ease-in duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span>Chat</span>
                    <span>755 465 325</span>
                  </div>
                </div>
                <div className="button flex justify-center items-center w-full bg-lightBlue text-blue font-semibold hover:bg-BlueGradient hover:text-white hover:scale-95 ">
                  Chat Now
                </div>
              </div>
            </div>

            {/* Second row */}
            <div className="flex justify-center items-start gap-6 flex-col sm::flex-row">
              <div className="flex flex-col justify-center items-center w-64 p-4 border-[0.8px] border-[#80808024] gap-4 ease-in duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span>Video Call</span>
                    <span>755 465 325</span>
                  </div>
                </div>
                <div className="button flex justify-center items-center w-full bg-lightBlue text-blue font-semibold hover:bg-BlueGradient hover:text-white hover:scale-95 ">
                  Video Call Now
                </div>
              </div>

              {/* Fourth mode */}
              <div className="flex flex-col justify-center items-center w-64 p-4 border-[0.8px] border-[#80808024] gap-4 ease-in duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span>Message</span>
                    <span>755 465 325</span>
                  </div>
                </div>
                <div className="button flex justify-center items-center w-full bg-lightBlue text-blue font-semibold hover:bg-BlueGradient hover:text-white hover:scale-95 ">
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 w-full flex mt-8 justify-center items-center">
          <div className=" sm:w-[28rem] sm:h-[35rem] w-[26rem] h-[30rem] overflow-hidden rounded-t-full border-8 border-[rgb(232_232_232/93%)]">
            <img
              className="w-full h-full object-cover object-center"
              src="./contact.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
