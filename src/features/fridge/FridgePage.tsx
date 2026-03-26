import { useEffect, useState } from "react";
import { getFoodItems } from "../../api/fooditem";
import type { FoodItem } from "../../types/FoodItems";

import CardFood from "../../component/CardFood";


function FridgePage() {
    const [foods, setFoods] = useState<FoodItem[]>([]);
    // useEffect(()=>{
    // getFoodItems().catch().then(data=>{setFoods(data)})

    // },[])
    return (<div>
    
        <h1>Mon frigo</h1>

        <div className=" flex flex-col">
            <CardFood/>


        </div>
    </div>
    )


}


export default FridgePage;