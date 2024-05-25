import React from 'react'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const AddToCartContainer = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className='text-black border border-gray-300 rounded-md h-fit text-sm tablet:mt-0 phone:mt-6'>
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery</span> Thutsday, 21 May. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or latest delivery Tommorov, 20 May. Order within 15 hrs 53 mins. Details</h1>
                <p className='text-[#147C8F] my-2'>Deliver to Rostov-on-Don 144411</p>

                <button onClick={() => {
                    dispatch(addToCart(product));
                    router.push("/cart");
                }} className='bg-[#FFD814] w-full rounded-full py-1'>Add to Cart</button>
                <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2'>Buy Now</button>

            </div>
        </div>
    )
}

export default AddToCartContainer