import React from "react"

const Footer = () => {
  return (
    <section>
      <div className="p-6 w-full xl:max-w-7xl xl:m-auto flex flex-col md:flex-row justify-between items-center gap-y-12">
        {/* Left site */}
        <article className="flex flex-col justify-center items-center md:items-start gap-2">
          <img src="./logo2.png" alt="" width={120} />
          <p className="text-[#8c8b8b] text-sm">
            Our vision is to make all people <br /> the best place to live for
            them.
          </p>
        </article>

        {/* Right side */}
        <article className="flex flex-col justify-center items-center md:items-end">
          <h2 className="text-[#1f3e72] text-4xl font-bold">Information</h2>
          <p className="text-[#8c8b8b] text-sm">145 New york, FL 4571, USA</p>

          <nav className="flex justify-center items-center gap-3 md:gap-6 mt-4 font-medium text-center">
            <li className=" list-none cursor-pointer">Property</li>
            <li className=" list-none cursor-pointer">Services</li>
            <li className=" list-none cursor-pointer">Product</li>
            <li className=" list-none cursor-pointer">About Us</li>
          </nav>
        </article>
      </div>
    </section>
  )
}

export default Footer
