import React from 'react'

const Subtotal = ({length, left, totalPrice}:{length: number, left:boolean, totalPrice: number}) => {
    return (
        <div>
            <h1 className={`${left ? 'text-left text-sm' : 'text-right text-lg'}text-right text-lg`}>{`Subtotal (${length} items): `}<span className='font-bold'>{`$${totalPrice.toFixed(2)}`}</span></h1>
        </div>
    )
}

export default Subtotal