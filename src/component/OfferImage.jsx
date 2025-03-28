import React from 'react'
import { Link } from 'react-router'

const OfferImage = ({slug=123,image}) => {
  return (
    <div className='bg-white my-5 rounded-xl p-3 shadow-md w-fit'>
      <Link to={`/offer/${slug}`}>
        <img  className="w-[97vw] sm:h-[40vh] object-center  rounded-md py-3    " src={image} alt='banner'/>
      </Link>
    </div>
  )
} 

export default OfferImage
 