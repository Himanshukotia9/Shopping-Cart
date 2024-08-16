import React from 'react'

export default function Card({item}) {
  const {title, img, author, price} = item;
  return (
    <div id="product-cart" className="transition-shadow duration-300 hover:shadow-xl w-full max-w-72 border border-gray-200 rounded-3xl p-3">
      <div className='flex justify-center'>
        <img className="rounded-3xl w-auto" src={img} alt="product image"/> 
      </div>
      <h4 className="font-bold font-League text-base">{title}
      </h4>
      <span className="text-gray-400 font-League text-base">{author}</span>
      <div className="flex items-center justify-between">
        <div>
          <div className="stars">
            <i className="fa-solid fa-star text-[#ffd43b]"></i>
            <i className="fa-solid fa-star text-[#ffd43b]"></i>
            <i className="fa-solid fa-star text-[#ffd43b]"></i>
            <i className="fa-solid fa-star text-[#ffd43b]"></i>
            <i className="fa-solid fa-star text-[#ffd43b]"></i>
          </div>
          <h4 className="text-[#088178] font-bold font-League">&#8377;{price}</h4>
        </div>
        <a className="px-3 py-2 bg-emerald-50 rounded-full" href="#"><i className="fa-solid fa-cart-plus text-[#088178]"></i></a>
      </div>
    </div>
  )
}
