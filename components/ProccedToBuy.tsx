import React from 'react'
import Subtotal from './shared/Subtotal'

const ProccedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    return (
        <div className="tablet:w-[30%] phone:w-[90%] h-fit border border-gray-300 tablet:ml-10 phone:ml-0 phone:mt-8">
            <div className="tablet:p-4 tablet:text-sm phone:text-[10px]">
                <span className="text-[#007600] font-medium">Your order is eligible for FREE Delivery</span>
                <p>Choose FREE Delivery option</p>
                <Subtotal left={true} length={length} totalPrice={totalPrice} />
                <button className='bg-[#FFD814] w-full py-1 rounded-md shadow-md tablet:my-3 phone:my-1'>Procced to Buy</button>
            </div>
        </div>
    )
}

export default ProccedToBuy