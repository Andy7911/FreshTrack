import { useEffect,useState } from "react";
import { getFoodItems } from "../../../api/fooditem";
import type { FoodItem }  from "../../../types/FoodItems";
export function useFoodItems(){

const [foods, setfood] = useState<FoodItem[]>();
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(()=>{
getFoodItems().then(data =>setfood(data) ).catch(err=> setError(err)).finally(()=>setLoading(false))
},[])

return { foods,loading,error };

 
}