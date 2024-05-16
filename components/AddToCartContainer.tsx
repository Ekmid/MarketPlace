import Image from 'next/image'
import React from 'react'
import prime from '../public/prime-logo.png'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'

const AddToCartContainer = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch();
    return (
        <div className='text-black border border-gray-300 rounded-md h-fit text-sm'>
            <div className='p-4'>
                <Image src={prime} width={40} height={40} alt={'prime'} />
            </div>
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery</span> Thutsday, 21 May. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or latest delivery Tommorov, 20 May. Order within 15 hrs 53 mins. Details</h1>
                <p className='text-[#147C8F] my-2'>Deliver to Rostov-on-Don 144411</p>

                <button onClick={() => {
                    dispatch(addToCart(product));
                }} className='bg-[#FFD814] w-full rounded-full py-1'>Add to Cart</button>
                <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2'>Buy Now</button>

            </div>
        </div>
    )
}

export default AddToCartContainer