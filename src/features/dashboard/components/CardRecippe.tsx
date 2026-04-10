import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";


function CardRecippe() {


    return (<div>
        <div className="flex  w-[calc(45%-50px)]">
            <h3>Recette suggérer</h3>  <Link to="/reccipes"> Voir tous <FaLongArrowAltRight />  </Link>
        </div>
        {/* card */}
        <div>
            <img src="https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/29101419/saute-de-poulet-aux-legumes-a-l-italienne.jpeg" alt="" width={50}  height={50} />

            <div className="flex flex-col">
                <h4>Poulet aux legumes</h4>
                <span>35 min · 3 ingrédients</span>
            </div>

        </div>


    </div>)



}

export default CardRecippe;