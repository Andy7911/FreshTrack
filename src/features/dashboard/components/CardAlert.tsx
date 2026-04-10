import { Link } from "react-router";
import { RiAlertFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";

function CardAlert() {



    return (
        <div className=" py-2 px-4 border-1 border-green-400 w-[calc(45%-50px)] rounded-md"  >
            <div className="flex justify-between">
                <span className="font-[DM-Mono] text-white text-md align-center ">Alertes récentes  </span>  <Link className="font-[DM-Mono] flex text-white items-center" to="/alert"> voir tout <FaLongArrowAltRight color="#DFFF00" size={30} className="ml-2" /></Link>
             
            </div>
            <div className="pb-4">
                <div className="flex">
                    <RiAlertFill color="#DFFF00" size={30} />  <span className="ml-2 text-white" >Lait  entier a expirer </span>

                </div>
              <span className="text-white">
                Il y'a deux jour
              </span>

            </div>

            

        </div>
    )
}

export default CardAlert;