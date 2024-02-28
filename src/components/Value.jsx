import React, { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"
import data from "../utils/accordion"

const Value = () => {
  return (
    <section id="value">
      <div className="p-4 sm:p-6 w-full flex justify-center items-center xl:max-w-7xl xl:m-auto flex-col lg:flex-row flex-wrap">
        {/* Left side */}
        <div className="flex-1 w-full flex mt-8 justify-center items-center">
          <div className=" sm:w-[28rem] sm:h-[35rem] w-[26rem] h-[30rem] overflow-hidden rounded-t-full border-8 border-[rgb(232_232_232/93%)]">
            <img
              className="w-full h-full object-cover object-center"
              src="./value.jpg"
              alt="Logo"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center flex-1 gap-2 mt-8 lg:mt-0">
          <h3 className="text-[#ffa500] text-2xl font-semibold text-center sm:text-start">
            Our Value
          </h3>
          <h2 className="text-[#1f3e72] text-4xl font-bold text-center sm:text-start">
            Value We Give To You
          </h2>
          <div className="text-[#8c8b8b] text-sm text-center sm:text-start">
            <p>
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better
            </p>
          </div>

          <Accordion
            className="mt-4 border-none w-full flex flex-col justify-center max-w-[620px] mx-auto"
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              return (
                <AccordionItem
                  className="bg-white border-[0.8px] border-[#80808024] rounded-lg overflow-hidden mb-5 drop-shadow-lg"
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex justify-between items-center bg-white p-4 w-full">
                      <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                        {item.icon}
                      </div>
                      <h3 className="text-center text-sm sm:text-[16px]">
                        {item.heading}
                      </h3>
                      <div className="flex justify-center items-center p-3 text-blue bg-[#eeeeff] rounded-md">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="text-[#8c8b8b] text-sm">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
