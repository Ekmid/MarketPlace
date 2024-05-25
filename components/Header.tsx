"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from '../public/amazon-logo-2.webp'
import logo from '../public/logo.svg'
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/supabase/products'

const itemList = [
    'All',
    "Today's Deals",
    "Customers Service",
    "Registry",
    "Gift Cards",
    "Sell"
]

const Header = () => {
    const [query, setQuery] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter()

    const cart = useAppSelector(getCart);

    const searchHandler = () => {
        router.push(`/search/${query}`)
    }

    useEffect(() => {
        const getUserData = async () => {
            const { data:{user} } = await supabase.auth.getUser();
            setUser(user);
        }
        getUserData();
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    };

    return (
        <>
            <div className="bg-[#131921] text-white py-1">
                <div className="flex items-center justify-between w-[90%] mx-auto">
                    <Link href={'/'} className='desktop:w-[10%] phone:w-[20%] tablet:w-[20%] laptop:w-[15%]'>
                        <Image src={logo} alt={"Logo"} width={150} height={150} />
                    </Link>

                    <div className="flex items-center desktop:w-[50%] tablet:w-[40%] phone:w-[20%]">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            type="text"
                            className='w-full tablet:p-2 phone:p-1 rounded-l-md outline-none text-black' placeholder='Search...' />
                        <div
                            onClick={searchHandler}
                            className='bg-[#FEBD69] tablet:p-2 phone:p-1 cursor-pointer hover:bg-[#f19722] rounded-r-md'>
                            <CgSearch className='text-black' size={'24px'} />
                        </div>
                    </div>

                    <div className='flex items-center justify-between desktop:w-[30%] laptop:w-[30%] tablet:w-[35%] phone:w-[40%]'>
                        <div
                            onClick={() => {
                                router.push("/signin")
                            }}
                            className='cursor-pointer'>
                            <h1 className='tablet:text-xs hover:underline phone:text-[8px]'>{`${user ? user.identities[0].identity_data.full_name : 'Sign in'}`}</h1>
                            <h1 className='font-medium tablet:text-sm phone:text-[10px]'>Account & Lists</h1>
                        </div>

                        <div>
                            <p className='tablet:text-xs phone:text-[8px]'>Returns</p>
                            <h1 className='font-medium tablet:text-sm phone:text-[10px]'>& Orders</h1>
                        </div>

                        <Link href={'/cart'} className='cursor-pointer '>
                            <p className='relative phone:top-3 phone:left-3 tablet:top-4 tablet:left-4 text-[#f19722]'>{cart.length}</p>
                            <div className='flex'>
                                <div>
                                    <BiCart className='phone:w-6 phone:h-6 tablet:w-[40px] tablet:h-[40px]' size={'40px'}  />
                                </div>
                                <h1 className='phone:hidden tablet:inline'>Cart</h1>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='bg-[#232F3E] w-full text-white phone:p-1 tablet:p-2 flex items-center justify-between'>
                <div>
                    {
                        itemList.map((link, idx) => {
                            return (
                                <Link key={idx} href={`/${link}`} className='tablet:mx-2 hover:border border border-transparent hover:border-white phone:p-1 tablet:p-2 tablet:text-[12px] laptop:text-[14px] desktop:text-[16px] phone:text-[10px]'>
                                    {link}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='tablet:mr-5 phone:mr-0'>
                    <h1 
                    onClick={async ()=>{
                        const {error} = await supabase.auth.signOut();
                        router.push("/signin");
                    }}
                    className='text-[#FEBD69] font-bold cursor-pointer hover:underline phone:text-[10px] tablet:text-[12px] laptop:text-[14px] desktop:text-[16px]'>Sign out</h1>
                </div>

            </div>
        </>
    )
}

export default Header