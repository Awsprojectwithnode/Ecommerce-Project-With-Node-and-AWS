"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const Navbar = () => {

    const [searchText, setSearchText] = useState('')
    const [open, setOpen] = useState(false)

  return (
    <div className={`fixed w-screen z-40`}
    style={{ backgroundColor: 'white' }}>
    <div>
        <div className="w-full  max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link hrefLang='en' href="/">
                        <span className="sr-only">logo</span>
                        <Image
                            className=" hidden sm:block h-8 w-auto sm:h-10"
                            src="https://flowbite.com/docs/images/logo.svg"
                            width={120}
                            height={50}
                            alt='Toprecipy logo'
                        />
                         <Image
                            className="block sm:hidden mr-2 h-8 w-auto sm:h-10"
                            src="https://flowbite.com/docs/images/logo.svg"
                            width={70.5}
                            height={60}
                            alt='Toprecipy logo'
                        />
                    </Link>
                </div>

                <nav className="space-x-10 ">
                    <div className='relative w-full sm:w-80'>
                        <div 
                            className='flex gap-2 items-center px-4 py-2 my-2 border text-gray-600 border-slate-300 rounded-lg bg-white outline-slate-300'
                        >
                            <BsSearch />
                            <input
                                type="text"
                                name="search"
                                value={searchText}
                                onChange={(e)=>setSearchText(e.target.value)}
                                placeholder="e.g pounded yam"
                                className={`w-full outline-none`}
                            />
                        </div>
                        {/* {
                            autocomplete.length !== 0 && isSearch &&
                            <div className='absolute top-12 bg-white rounded-lg shadow-md flex gap-4 flex-col p-5 '>
                                {
                                    autocomplete.map((complete) => (
                                        <div onClick={clickNavigate} key={complete._id} className='flex items-center gap-2 select-none cursor-pointer max-w-80 py-1 border-b'>
                                            {
                                                complete?.images?.[0] &&
                                                <div className='w-5 h-5 relative'>
                                                    <Image
                                                        src={complete.images[0]}
                                                        fill={true}
                                                        className='rounded-full'
                                                        alt={complete.title}
                                                        placeholder='blur'
                                                        blurDataURL={complete.images[0]}
                                                    />
                                                </div>
                                            }
                                            <Link hrefLang='en' href={`/foods/${complete.slug}`} className='flex flex-1 select-none text-xs'>
                                                {complete.title}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        } */}

                    </div>
                </nav>

                <div className="-mr-2 -my-2 md:hidden">
                    <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="sr-only">Open menu</span>
                        {/* Heroicon name: outline/menu */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

               
            </div>
        </div>

        {/*   Mobile navbar content start here, show/hide based on mobile menu state. */}
        {/* <div className='w-screen h-screen opacity-50 '
        style={{ backgroundColor:"rgba(49, 49, 49, 0.4)" }}
        > */}

        <div
            className={
                open
                    ? "z-20 opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    : " opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
            style={{ display: open ? "block" : "none" }}
        >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <Link hrefLang='en' href={'/'}>
                            <Image
                                className="h-8 w-auto sm:h-10"
                                src="/toprecipy-logo-icon.png"
                                width={70.5}
                                height={60}
                                placeholder="blur"
                                alt='Toprecipy logo'
                                blurDataURL="/toprecipy-logo-icon.png"
                            />
                        </Link>
                        <div className="-mr-2">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Close menu</span>
                                {/* Heroicon name: outline/x */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Navbar