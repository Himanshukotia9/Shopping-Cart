// Navbar.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cart)

  return (
    <div className=''>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 px-4 text-2xl text-[#088178]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/'>
            <div>
              <i className="fa-solid fa-book"></i>
              <span className="self-center text-2xl mx-2 font-semibold whitespace-nowrap dark:text-white">BookShop</span>
            </div>
          </Link>
          <div className="flex items-center" id="navbar-default">
            <Cart />
            <span className='px-1 py-0 bg-emerald-50 rounded-full text-base relative bottom-3 right-1'>{cart.length}</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
