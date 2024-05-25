import React from 'react'
import ProductCard from './ProductCard'

const SearchResult = ({ filterData }: { filterData: any }) => {
    return (
        <div className="w-[80%] mx-auto text-black">
            <div className="mt-10">
                <div>
                    <h1 className="font-bold text-2xl">Results {filterData.length}</h1>
                    <p>Price and other details may vary based on product size and color.</p>
                </div>

                <div className='grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 gap-2'>
                    {
                        filterData?.map((product:any) => {
                            return (
                                <div key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchResult