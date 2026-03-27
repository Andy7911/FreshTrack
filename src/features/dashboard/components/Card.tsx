import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

interface CardBody {
    title: string,
    subTitle: string
    numb: number,

}

const Card = ({ title, numb, subTitle }: CardBody) => {


    return (<div className="w-fit px-2 bg-amber-200  rounded-md pt-2 pb-4">
        <span className="flex">
            {title} <BiSolidCheckboxChecked color="#000" size={30}  className="ml-3"/>
        </span>
        <div className=" ">
            <h1 className=" text-4xl font-[poppins]"> {numb}</h1>
            <span className="font-[DM-Mono]">{subTitle}</span>
        </div>


    </div>);


}

export default Card;