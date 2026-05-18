import React, { type ReactNode } from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

interface CardBody {
    label: string,
    subTitle: string
    numb: number;
    tone?:"default"| "success"|"warning"|"danger";
    icon?: ReactNode;
    helper:string;

}
const Tones = {
  default: "bg-white text-slate-900",
  success: "bg-emerald-100 text-emerald-950",
  warning: "bg-amber-100 text-amber-950",
  danger: "bg-rose-100 text-rose-950",

}

const CardInfo = ({ label, numb, subTitle,tone="default",icon }: CardBody) => {


    return (<article className={`px-2 ${Tones[tone]}  rounded-xl py-4 pb-4 w-[calc(25%-10px)]`}>
        <span className="flex justify-between">
            {label} {icon ?  <div className="text-xl">{icon}</div> :null}
        </span>
        <div className=" ">
            <h1 className=" text-4xl font-[poppins] my-2 "> {numb}</h1>
            <span className="font-[DM-Mono]">{subTitle}</span>
        </div>


    </article>);


}

export default CardInfo;