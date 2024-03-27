import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
            md:w-2/5"><span className="text-teal-400">Free</span> 10% if you subscribe to our newsletter!</h1>
        <div>
          <input className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" type="text" placeholder="Enter your email" />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5
          rounded-md text-white border-0 font-bold md:w-auto w-full"> Send </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer