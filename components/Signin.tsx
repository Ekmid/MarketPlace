"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const Signin = () => {
    return (
        <div className="flex items-center absolute top-0 w-full h-full bg-[#232F3E] text-black">
            <div className="phone:w-[60%] tablet:w-[50%] laptop:w-[40%] mx-auto">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme='dark'
                />
            </div>
        </div>
    )
}

export default Signin