import React from 'react';

const ProductCart = () => {
  return (
    <div className="bg-white p-3 w-[280px] my-6  border ml-4 border-gray-300 rounded-md shadow-sm">
      <div className="flex flex-col items-center">
        <img className="w-[120px] h-[140px] object-cover" 
          src='https://cdn.dmart.in/images/products/MAY110003135xx2MAY23_5_P.jpg' 
          alt="Nippo Ignite 3NR AA Battery" 
        />
      </div>
      <div className="mt-2">
        <h3 className="text-gray-800 text-sm font-semibold">
          Nippo Ignite 3NR AA Battery Cell juuin- 10 Pieces : 1 Unit
        </h3>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-500 text-xs line-through">₹ 170</p>
          <p className="text-gray-800 font-bold">₹ 89</p>
          <p className="text-gray-500 text-xs">(Inclusive of all taxes)</p>
        </div>
        <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
          ₹ 81 OFF
        </div>
      </div>
      <div className="mt-2">
        <select className="w-full border border-gray-300 text-sm p-1 rounded">
          <option>1 Unit (₹ 8.90 / U)</option>
        </select>
      </div>
      <button className="mt-3 w-full bg-green-600 text-white text-sm font-semibold py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700">
        🛒 ADD TO CART
      </button>
    </div>
  );
};

export default ProductCart;