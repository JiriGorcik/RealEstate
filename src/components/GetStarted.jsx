import React from "react"

const GetStarted = () => {
  return (
    <section id="get-started">
      <article className="p-6 w-full xl:max-w-7xl xl:m-auto">
        <article className="flex flex-col justify-center items-center gap-6 bg-[#4161df] p-8 rounded-xl text-center">
          <h2 className=" text-white font-semibold text-4xl">
            Get Started with Homyz
          </h2>
          <p className="text-gray-300 text-sm">
            Subscribe and find super attractive price quotes from us. <br />
            Find you residence soon
          </p>
          <button className="button bg-[#5a73d7] border-2 border-white rounded-xl drop-shadow-lg">
            <a href="mailto:jirigorcik@seznam.cz">Get Started</a>
          </button>
        </article>
      </article>
    </section>
  )
}

export default GetStarted
