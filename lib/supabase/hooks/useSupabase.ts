import { useState } from "react"
import { supabase } from "../products";

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);
    const getDataFromSupabase = async () => {
        let {data, error} = await supabase.from('product').select("*");
        if(data){
            setProducts(data);
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }

    return {products, getDataFromSupabase}
}