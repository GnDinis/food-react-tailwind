import React from 'react'

const Hero = () => {
    return (
        <div className="max-auto mx-auto">
            <div className="max-h-[500px] relative">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/75
                flex flex-col justify-center">
                    <h1 className="px-4 mx-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Premium  <span className="text-[#66CC99]">Meals,</span></h1>
                    <h1 className="px-4 mx-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-[#66CC99]">Speedy </span> Delivery</h1>
                    <div>
                    <input className="w-[200px] sm:w-[200px] lg:w-[400px] p-4 mx-5 ml-16 my-10 text-black" type="text" placeholder="Enter Delivery Address" />
                    <button className="w-[65px] sm:w-[65px] lg:w-[100px] p-4 bg-white border-0 text-black hover:bg-[#66CC99]">Find</button>
                    </div>
                </div>
                <video className="w-full max-h-[500px] object-cover flex items-center" src="https://videos.pexels.com/video-files/3298401/3298401-uhd_4096_2160_25fps.mp4" autoPlay loop  />
            </div>
        </div>
    )
}

export default Hero
