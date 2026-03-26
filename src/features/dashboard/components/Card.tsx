import React from "react";

interface CardBody {
    title: string,
    subTitle: string
    numb: number,

}

const Card = ({ title, numb, subTitle }: CardBody) => {


    return (<div className="w-fit p-16 bg-amber-200 ">
        <span>
            {title}
        </span>
        <div className=" ">
            <h1 className=" text-5xl"> {numb}</h1>
            <span>{subTitle}</span>
        </div>


    </div>);


}

export default Card;