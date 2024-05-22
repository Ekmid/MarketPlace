import React from 'react'
import Subtotal from './shared/Subtotal'

const ProccedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    return (
        <div className="w-[20%] h-fit border border-gray-300 ml-4">
            <div className="p-4 text-sm">
                <p><span className="text-[#007600] font-medium">Your order is eligible for FREE Delivery</span>Choose FREE Delivery option</p>
                <Subtotal left={true} length={length} totalPrice={totalPrice} />

                <button className='bg-[#FFD814] w-full py-1 rounded-md shadow-md my-3'>Procced to Buy</button>
            </div>
        </div>
    )
}

export default ProccedToBuy