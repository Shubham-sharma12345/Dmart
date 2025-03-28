import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router';


const categories=[{
  id:1,
  name:"Ready to Cook",
  link:"#"
},
{
  id:2,
  name:"Home Appliances",
  link:"#"
},
{
  id:3,
  name:"Cookware",
  link:"#"
},
{
  id:4,
  name:"Servware",
  link:"#"
},
{
  id:5,
  name:"cleaners",
  link:"#"
},
{
  id:6,
  name:"Detergent",
  link:"#"
},

]
const Navbar = () => {
  return (
    <div>
      {/* First Navbar */}
      <nav className='bg-white shadow'>
        <div className='flex gap-2 border-b-0.5 justify-between'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7hOuqe5AjX8BC3ilOh3hHHlyH-2Cop3-Ig&s" 
            alt='logo' 
            className='w-[130px] p-4 mx-3 py-2'
          />
          
          <div className='flex flex-col justify-center items-center bg-[#F2F6FF] px-2 my-2 rounded-t-2xl rounded-br-2xl'>
            <div className='flex items-center gap-1'>
              <MdLocationOn className='text-green-600' />
              <span>430000</span>
              <FaAngleDown className='text-gray-400' />
            </div>
            <span>Mumbai</span>
          </div>

          <div className='gap-3 mx-3 py-3'>
            <p> Early <span className='text-green-600'> Pick Up </span> available </p>
            <p className='flex items-center gap-2'>
              <BiTimer className="text-amber-500 text-2xl"/>
              <span className="font-semibold">Today 9:00 AM -12:00 PM</span>
            </p>
          </div>

          <div>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder='search Here...' 
              className="border-2 border-gray-300 py-2 my-3 font-thin rounded-md w-[30vw] shadow-md px-4"
            />
            <button className="uppercase font-semibold text-white bg-green-600 py-2 gap-1.4 rounded-md p-2 mx-2 shadow-md">
              Search
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className='grid text-sm hover:bg-gray-100 p-2 rounded-md my-2 mx-4'>
              <span className="text-gray-400 text-xs font-medium">Hello Shubham</span>
              <span className="font-semibold">My Account</span>
            </div>
            
            <IoMdNotificationsOutline className="my-4 text-2xl text-green-600" />
            <div className="flex items-center gap-2 mr-9">
              <div className="relative">
                <span className="absolute bg-amber-300 top-0 left-0 text-black text-[10px] px-1 font-thin rounded-full">1</span>
                <TfiShoppingCart className="text-green-600 text-2xl" />
              </div>
              <span className="font-bold mt-2">₹550</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className=" p-4 border-1 border-gray-100  flex justify-between border-t-gray-200 bg-white  shadow">

      <div className=" flex items-center gap-2  "> 
      <IoMenuOutline className="text-2xl " />
      <span className="text-sm font-semibold   ">All Categories</span>
      </div>
        
       <div>
        {
          categories.map(({id,name,link})=>(
          <Link className="mx-3 capitalize text-sm text-gray-700 font-medium hover:underline" key={id} to={link}>{name}</Link>
          ))}
       </div>
      </nav>
    </div>
  );
}

export default Navbar;
