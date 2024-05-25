import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCartContainer from './AddToCartContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className="w-[90%] mx-auto mt-10">
            <div className="flex justify-between">
                {
                    singleProduct.map((product: any) => {
                        return (
                            <div key={product.id} className="flex text-black tablet:flex-row phone:flex-col">
                                <div className="tablet:flex phone:inline">
                                    <div className="bg-gray-100 flex justify-center items-center ">
                                        <Image className="mix-blend-multiply p-4" src={product.image} width={300} height={300} alt={product.title} />

                                    </div>
                                    <div className="mx-4 tablet:w-[70%] phone:w-[90%] my-4">
                                        <h1 className="font-bold tablet:text-lg phone:text-[14px]">{product.title}</h1>
                                        <p className="my-4 tablet:text-base phone:text-[14px]">{product.description}</p>
                                        <Ratings ratings={product.rating} />
                                        <h1 className="font-bold tablet:text-2xl phone:text-[18px]">{`$${product.price}`}</h1>
                                        <div className='my-2'>
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