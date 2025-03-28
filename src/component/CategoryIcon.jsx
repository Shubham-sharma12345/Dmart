import React from 'react'
import { Link } from 'react-router'

const CategoryIcon = ({link,name,slug}) => {
  return (
   
    <Link to={`/product/${slug}`} className=" w-fit">
    <img  className="w-[75px]   ml-3  " src={link}/>
  
    
    <p className=" text-center text-sm font-bold mt-2 text-gray-700">{name}</p>
    </Link>
  )
}
 
export default CategoryIcon  
