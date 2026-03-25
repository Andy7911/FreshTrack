import type { Fooditem } from "../types/FoodItems";

const Api = "http://localhost:8086/api";

export const getFoodItems= async():Promise<Fooditem[]> =>{

const res = await fetch(`${Api}/food-items`);
if (!res.ok) {
    throw new Error("Erreur API");
  }
return res.json();

} 


