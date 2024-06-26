import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [food, setFood] = useState(data)

    // Filter Type Burger, Pizza, etc
    const filterType = (category) => {
        setFood(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // Filter Type Burger, Pizza, etc
    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };


    return (
        <div className="bg-gray-100">
            <div className="max-w-[1640px] m-auto px-4 py-12">
                <h1 className="text-[#008000] font-bold text-4xl text-center">Featured Restaurants</h1>
                {/* Filter Row */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Filter Type */}
                    <div>
                        <p className="font-bold text-gray-700">Filter Food</p>
                        <div className="flex justify-between flex-wrap">
                            <button onClick={() => setFood(data)} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">All</button>
                            <button onClick={() => filterType('burger')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">Burgers</button>
                            <button onClick={() => filterType('pizza')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">Pizza</button>
                            <button onClick={() => filterType('salad')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">Salads</button>
                            <button onClick={() => filterType('chicken')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">Chicken</button>
                        </div>
                    </div>

                    {/* Filter Price */}
                    <div>
                        <p className="font-bold text-gray-700">Filter Price</p>
                        <div className="flex justify-between max-w-[390px] w-full">
                            <button onClick={() => filterPrice('$')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">$</button>
                            <button onClick={() => filterPrice('$$')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">$$</button>
                            <button onClick={() => filterPrice('$$$')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">$$$</button>
                            <button onClick={() => filterPrice('$$$$')} className="m-1 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white">$$$$</button>
                        </div>
                    </div>
                </div>

                {/* Display Food */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {food.map((item, index) => (
                        <div key={index} className="border shadow-lg hover:scale-105 duration-300">
                            <img src={item.image} alt={item.name}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="flex justify-between items-center px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <span className=' text-black p-1 rounded-full'> {item.price} </span>
                                <p>{index % 2 === 0 ? '10-20 min' : '15-25 min'}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default Food
