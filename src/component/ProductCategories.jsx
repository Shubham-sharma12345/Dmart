import React from 'react'
import CategoryIcon from './CategoryIcon'


const propcategories=[
    {
        id:1,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/1may23-popularcat-dairy.png",
        name:"dairy",
        slug:"dairy"

    },
    {
        id:2,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-tea1.png",
        name:"Tea",
        slug:"Tea"

    },
    {
        id:3,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-softdrinks.png",
        name:"Soft Drinks",
        slug:"Soft Drinks"

    },
    {
        id:4,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/1oct24-popularcat-cleaners.png",
        name:"Cleaners",
        slug:"Cleaners"

    },
    {
        id:5,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-soaps.png",
        name:"Bath Soap",
        slug:"Bath Soap"

    },
    {
        id:6,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-toothpaste.png",
        name:"Tooth Paste",
        slug:"Tooth Paste"

    },
    {
        id:7,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-shampoos.png",
        name:"Shampoos",
        slug:"Shampoos"

    },
    {
        id:8,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/16jan23-popularcat-poojaneeds.png",
        name:"Pooja Needs",
        slug:"Pooja Needs"

    },
    {
        id:9,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/1apr24-popularcat-towels.png",
        name:"Towels",
        slug:"Towels"

    },
    {
        id:10,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/1apr24-popularcat-bathroom.png",
        name:"Bath Utility",
        slug:"Bath Utility"

    },
    {
        id:11,
        link :"https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-coffee.png",
        name:"Coffee",
        slug:"Coffee"

    },
    
]
const ProductCategories = () => {
  return (
    <div className="bg-white w-[98vw] mx-auto rounded-md h-[23vh]  border-gray-200 shadow">
      <h2 className="font-bold text-lg my-3 mx-2">Popular Categories</h2>
      <div className=" flex gap-10 overflow-x-scroll items-center justify-center">
      

      {
        propcategories.map((Categories)=>  <CategoryIcon key={Categories.id}{...Categories}/>)
        
      }
     
      
      </div>

    </div>
  )
}

export default ProductCategories
