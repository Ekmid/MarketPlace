"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { query } = useParams();
    const {filterData, getFilteredData} = useSupabase();

    useEffect(() => {
        getFilteredData(query.toString());
    }, []);

    console.log(filterData);

    return (
        <div>

        </div>
    )
}

export default page