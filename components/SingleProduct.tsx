import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCartContainer from './AddToCartContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className="w-[80%] mx-auto mt-10">
            <div className="flex justify-between">
                {
                    singleProduct.map((product: any) => {
                        return (
                            <div key={product.id} className="flex text-black">
                                <div className="flex">
                                    <div className="bg-gray-100">
                                        <Image className="mix-blend-multiply p-4" src={product.image} width={300} height={300} alt={product.title} />

                                    </div>
                                    <div className="mx-4 w-[70%]">
                                        <h1 className="font-bold text-lg ">{product.title}</h1>
                                        <p className="">{product.description}</p>
                                        <Ratings ratings={product.rating} />
                                        <h1 className="font-bold text-2xl ">{`$${product.price}`}</h1>
                                        <div>
                                            <h1 className='font-bold text-sm k'>About this item</h1>
                                            <li className="">Beautiful present to your beloved parthner</li>
                                            <li className="">Beautiful present to your beloved parthner</li>
                                            <li className="">Beautiful present to your beloved parthner</li>
                                        </div>
                                    </div>
                                </div>
                                <AddToCartContainer product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default SingleProduct