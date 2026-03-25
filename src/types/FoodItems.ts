export interface FoodItem{

    id: number,
    name:string,
    quantity:number,
    category:string,
    expirationDate:string
    status:"FRESH" | "EXPIRING_SOON" | "EXPIRED";
}