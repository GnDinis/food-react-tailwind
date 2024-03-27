import React from 'react'

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="relative">
             {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 text-white">
                <p className="font-bold text-2xl px-2 pt-4">Provide meals to your employees</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 border-0">Create a business account</button>
            </div>
            <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover"
             src="https://images.pexels.com/photos/4049988/pexels-photo-4049988.jpeg?auto=compress&cs=tinysrgb&w=600" alt="salmon" />
        </div>

        {/* Card */}        
        <div className="relative">
             {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 text-white">
                <p className="font-bold text-2xl px-2 pt-4">Your restaurant's meals delivered to your home</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 border-0">Add your restaurant</button>
            </div>
            <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover"
             src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="salmon" />
        </div>

        {/* Card */}
        <div className="relative">
             {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 text-white">
                <p className="font-bold text-2xl px-2 pt-4">Deliver with Door Step</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 border-0">Register to make deliveries</button>
            </div>
            <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover"
             src="https://images.pexels.com/photos/7706418/pexels-photo-7706418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="salmon" />
        </div>
        
    </div>
  )
}

export default Cards
