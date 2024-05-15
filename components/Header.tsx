import Image from 'next/image'
import React from 'react'
import amazonLogo from '../public/amazon-logo-2.webp'
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';

const itemList = [
    'All',
    "Today's Deals",
    "Customers Service",
    "Registry",
    "Gift Cards",
    "Sell"
]

const Header = () => {
    return (
        <>
            <div className="bg-[#131921] text-white py-1">
                <div className="flex items-center justify-between w-[90%] mx-auto">
                    <div className='w-[10%]'>
                        <Image src={amazonLogo} alt={"Logo"} width={150} height={150} />
                    </div>

                    <div className="flex items-center w-[60%]">
                        <input className='w-full p-2 rounded-l-md outline-none text-black' type="text" placeholder='Search Amazon.in' />
                        <div className='bg-[#FEBD69] p-2 rounded-r-md'>
                            <CgSearch className='text-black' size={'24px'} />
                        </div>
                    </div>

                    <div className='flex items-center justify-around w-[20%]'>
                        <div className='cursor-pointer'>
                            <h1 className='text-xs'>Hello, Miroslav</h1>
                            <h1 className='font-medium text-sm'>Account & Lists</h1>
                        </div>

                        <div>
                            <p className='text-xs'>Returns</p>
                            <h1 className='font-medium text-sm'>& Orders</h1>
                        </div>

                        <div className='cursor-pointer'>
                            <p className='relative top-3 left-4'>0</p>
                            <div className='flex '>
                                <div>
                                    <BiCart size={'40px'} />
                                </div>
                                <h1 className='mt-4'>cart</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-[#232F3E] w-full text-white p-2 flex items-center justify-between'>
                <div>
                    {
                        itemList.map((link, idx) => {
                            return (
                                <Link href={'/${link}'} className='mx-2 hover:border border border-transparent hover:border-white p-2'>
                                    {link}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='mr-5'>
                    <h1 className='text-[#FEBD69] font-bold cursor-pointer hover:underline'>Sign out</h1>
                </div>

            </div>
        </>
    )
}

export default Header