"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct'

const HomePage = () => {
  const { mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [])
  console.log(mensProduct)

  return (
    <div>
      <Image
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
        src={'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'} width={10000} height={1000} alt={'Banner'} />
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-64'>
      {
          mensProduct.map((product: any) => {
            return (
              <div>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }
        {
          womensProduct.map((product: any) => {
            return (
              <div>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage