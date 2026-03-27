import { Link } from "react-router";
import { RiAlertFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";

function CardAlert() {



    return (
        <div className=" border-2 border-amber-100 w-[calc(45%-50px)]"  >
            <div className="py-2 px-4 flex">
                <span className="font-[DM-Mono] ">Alertes récentes  </span>  <Link className="font-[DM-Mono] flex" to="/alert"> voir tout <FaLongArrowAltRight color="#DFFF00" size={40} /></Link>
             
            </div>
            <div className="pb-4">
                <div className="flex">
                    <RiAlertFill color="#DFFF00" size={30} />  <span className="ml-2" >Lait  entier a expirer </span>

                </div>
              <span>
                Il y'a deux jour
              </span>

            </div>

            

        </div>
    )
}

export default CardAlert;