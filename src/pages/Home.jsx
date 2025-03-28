import React from 'react'
import { Link } from 'react-router'
import Navbar from '../component/Navbar'
import ImageCrouser from '../component/ImageCrouser'
import ProductCategories from '../component/ProductCategories'
import OfferImage from '../component/OfferImage'
import JustReleased from '../component/JustReleased'

const Home = () => {
  return (
    <>
  
      <Navbar/>
      <ImageCrouser/>
      <ProductCategories/>
      <OfferImage image={"https://cdn.dmart.in/images/rwd/banners/curated/13jan25-curated-gujrat-halfprice.jpg"}/>
      <OfferImage image={"https://cdn.dmart.in/images/rwd/banners/curated/13mar25-curated-summer-hp-mmr.jpg"}/>
      <JustReleased/>
    </>
  )
}

export default Home
