
const EMOJI = {
    DAIRY: "🥛",
    MEAT: "🥩",
    VEGETABLE: "🥦",
    FRUIT: "🍎",
    FISH: "🐟",
    GRAIN: "🌾",
    BEVERAGE: "🥤",
    OTHER: "🍽️",
};

export default function CardFood() {



    return (
        <div className="flex">

            <img src="https://cdn.vectorstock.com/i/500p/70/13/cartoon-milk-bottle-vector-20337013.jpg"  width={80}height={80} alt=""  />
            <div className="flex flex-col ">
                <h3>Lait</h3>
                <span>Qté:4</span>

            </div>

            <span className="bg-red-50 h-fit p-1 rounded-s-sm">
                expiré il y'a 1 jour
            </span>

        </div>
    )

}