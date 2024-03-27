import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className="w-auto flex justify-between 
        items-center p-4 mx-auto">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-2xl lg:text-4xl px-2 mx-2">Door<span className="font-bold text-[#66CC99]"> step</span>
                </h1>

                {/*--- Delivery & Pickup Button---
                <div className="hidden lg:flex items-center bg-gray-200
                rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>*/}

            </div>

            {/*---Search Bar---
            <div className="bg-gray-200 rounded-full flex items-center 
            px-2 w-[200px] sm:w-[400px] lg:w-[500px]"> 
                <AiOutlineSearch size={20}/>
                <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="Search food" />
            </div>*/}

            {/* Profile */}
            <div className="md:flex">
                <button className="bg-white text-black hidden mx-2 md:flex border-0
            items-center py-2 rounded-full hover:bg-gray-300 hover:text-black">
                Log In
                </button>

                {/* Cart */}
                <button className="bg-black text-white hidden md:flex border-0
            items-center py-2 rounded-full hover:bg-gray-300 hover:text-black">
                Register
                </button>

                {/* Menu Mobile */}
                {/* Overlay */}
                {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0
            left-0"></div> : ""}
            </div>

            {/* Hamburger Icon */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30} className="aboslute right-4
                top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">Chef's <span className="font-bold">Doorstep</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
                        <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" />Favorites</li>
                        <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" />Wallet</li>
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" />Help</li>
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" />Promotions</li>
                        <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar