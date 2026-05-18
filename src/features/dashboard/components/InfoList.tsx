

interface CardInfo {

    label?:string,
    subText?:string,
    linkText?:string,
    defaultText?:string


}



const InfoList = ({label,subText,linkText,defaultText}:CardInfo) => {


    return (
        <div className=" py-6 px-6 bg-amber-50 rounded-xl  mb-4">
            <div className="top flex justify-between mb-2">
                <div>
                    <h2 className=" font-bold text-2xl">
                        {label}
                    </h2>
                    <span className=""> 
                        {subText}
                    </span>
                </div>
                <div>
                    <a href="">
                      {linkText}
                    </a>
                </div>

            </div>

            <div className="border-dotted  border-2 py-8 px-8  rounded-xl  bg-white">
                <span className="">
                 {defaultText}</span>
            </div>
        </div>
    )

}

export default InfoList;