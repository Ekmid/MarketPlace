"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image'
import React from 'react'

const ShoppingCart = () => {
    const cart = useAppSelector(getCart);
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-300 py-5">

                <h1 className="font-bold text-2xl ">Shopping Cart</h1>
                <h1 className="font-medium">Price</h1>
            </div>
            {
                cart.map((product: any) => {
                    return (
                        <div className="my-4 flex justify-between">
                            <div className="flex">
                                <div>
                                    <Image src={product.image} width={100} height={100} alt={product.title} />
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-medium'>{product.title}</h1>
                                    <p className='text-[#007600] font-bold my-1 text-xs'>In Stock</p>
                                    <h1 className='font-bold text-red-600 cursor-pointer'>REMOVE</h1>
                                    <div className='flex text-xl my-4 font-medium items-center justify-between w-fit bg-gray-200 rounded-md px-5 py-1'>
                                        <div className='cursor-pointer mr-4'>-</div>
                                        <div>0</div>
                                        <div className='cursor-pointer ml-4'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>{`$${product.price}`}</h1>
                                <p className='text-xs py-1'>Sale <span className='line-through'>$1000</span></p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ShoppingCart