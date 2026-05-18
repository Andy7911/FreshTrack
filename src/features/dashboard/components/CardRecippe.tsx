import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiBookOpen, FiEdit3, FiTrash2, FiCheckCircle, FiXCircle } from "react-icons/fi";



const Tones = {
  default: "bg-white text-slate-900",
  success: "bg-emerald-100 text-emerald-950",
  warning: "bg-amber-100 text-amber-950",
  danger: "bg-rose-100 text-rose-950",

}



function CardRecippe() {


    return (<article className="  w-[calc(65%-50px)]  rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex justify-between ">
            <div className="flex">
            <div className="flex gap-3">
                <img  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl" src="https://placehold.co/50x50" alt="fready" />
            </div>
            <div className="flex flex-wrap items-center gap-2">

                <div className="flex justify-between items-center"><h2 className=" font-bold mr-2"> Poulet </h2> <span className="bg-red-200 p-2 rounded-xl text-sm font-light"> Expire</span></div>
                <span >2 portions · Viandes · Ouvert

                    Expire depuis 36 jour(s)</span>


            </div>
            </div>

                <span className=" bg-gray-400 h-fit rounded-sm text-sm font-light p-2"> Stock </span>
        </div>

            <div className="mt-4 flex flex-wrap gap-2"> <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white"> <FiCheckCircle/>  <span>Consomme</span> </div> <div className=" inline-flex items-center gap-2 rounded-full bg-amber-600 px-3 py-2 text-sm font-semibold text-white "> <FiBookOpen/><span>Cuisine </span></div> <div className=" bg-red-500 inline-flex items-center gap-2 rounded-full  px-3 py-2 text-sm font-semibold text-white "> <FiTrash2/> <span>Jete </span></div></div>

    </article>)



}

export default CardRecippe;