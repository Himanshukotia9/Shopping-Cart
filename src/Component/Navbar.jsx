import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 px-4 text-2xl text-[#088178]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <i className="fa-solid fa-book"></i>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="" id="navbar-default">
          <i className="fa-solid fa-cart-shopping"></i>
            <span className='px-1 py-0 bg-emerald-50 rounded-full text-base relative bottom-3 right-1'>0</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
