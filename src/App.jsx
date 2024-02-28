import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Companies from "./components/Companies"
import Residencies from "./components/Residencies"
import Value from "./components/Value"
import Contact from "./components/Contact"
import GetStarted from "./components/GetStarted"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="bg-black relative">
        <div className="absolute w-80 h-80 bg-gray-200/50 blur-[100px] rounded-full" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <div className="flex flex-col sm:gap-y-10 sm:mt-10 gap-y-5 mt-5">
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
      </div>
      <Footer />
    </div>
  )
}

export default App
