import Image from 'next/image'
import React from 'react'
import Ratings from './Ratings'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const CategoryWiseProduct = ({ product, router }: { product: any, router:any }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        router.push(`/product/${product.id}`);
    };

    return (
        <div 
        onClick={handleClick}
        className="border border-gray-300 p-2 bg-white">
            <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
                <Image
                    className='p-6' src={product.image} width={200} height={150} alt={product.title} />
            </div>
            <div>
                <h1>{product.title}</h1>
                <Ratings ratings={product.rating} />
            </div>
            <div className='my-2'>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart(product))
                        router.push("/cart")
                    }}
                    className="w-full py-2 rounded-md bg-[#FFD814]">Add to Cart</button>
            </div>
        </div>
    )
}

export default CategoryWiseProduct