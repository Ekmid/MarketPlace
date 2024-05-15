"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { query } = useParams();
    const {products, getDataFromSupabase} = useSupabase();

    useEffect(() => {
        getDataFromSupabase();
    }, []);
    console.log(products);

    return (
        <div>{query}</div>
    )
}

export default page