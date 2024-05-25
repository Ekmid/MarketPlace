"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct'

const HomePage = ({ product }: { product: any }) => {
  const { 
    mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [getMensClothing, getWomensClothing]);

  const groupedProducts = [
    { category: 'Men\'s Clothing', products: mensProduct },
    { category: 'Women\'s Clothing', products: womensProduct }
  ];

  return (
    <div>
      <Image
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
        src={'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'} width={10000} height={1000} alt={'Banner'} />
      <div className='w-[80%] mx-auto relative desktop:-top-96 laptop:-top-80 tablet:-top-32 phone:-top-30'>
        {
          groupedProducts.map((group) => (
            <div key={group.category} className='col-span-4'>
              <h2 className='text-xl font-bold mb-4'>{group.category}</h2>
              <div className='my-4 grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 gap-2'>
                {
                  group.products.map((product: any) => (
                    <CategoryWiseProduct key={product.id} product={product} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage;
