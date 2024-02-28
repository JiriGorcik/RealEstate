import React, { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  
  return (
    <section>
      <div className="flex justify-between items-center flex-wrap p-6 pt-4 pb-4 w-full gap-y-8 xl: max-w-7xl xl:m-auto text-gray-200 relative">
        <img className="select-none" src="./logo.png" alt="Logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className={`absolute md:static flex justify-center items-center gap-6 top-16 bg-white md:bg-transparent flex-col md:flex-row text-black md:text-gray-200 p-8 md:p-6 md:pr-0 font-medium rounded-xl z-40 md:transition-transform ease-in duration-300 ${
              menuOpened ? "right-10" : "-right-full"
            }`}
          >
            <a href="#residencies" className=" text-[15px] lg:text-base">
              Residencies
            </a>
            <a href="#value" className=" text-[15px] lg:text-base">
              Our Value
            </a>
            <a href="#contact" className=" text-[15px] lg:text-base">
              Contact Us
            </a>
            <a href="#get-started" className=" text-[15px] lg:text-base">
              Get Started
            </a>
            <button className="button bg-BlueGradient text-[15px] lg:text-base">
              <a href="#">Contact</a>
            </button>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  )
}

export default Header
