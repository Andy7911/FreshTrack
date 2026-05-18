import { DiVim } from "react-icons/di"

const Recipies = () =>{


    return(
          <div className=" w-[calc(30%-50px)] py-6 px-6 bg-amber-50 rounded-xl ">
            <div className="top flex justify-between mb-2">
                <div>
                    <h2>Top priorites</h2>
                    <span> Les aliments qui demandent votre attention maintenant.</span>
                </div>
                <div>
                    <a href="">
                        Voirs toutes les arlert
                    </a>
                </div>

            </div>

            <div className="border-dotted  border-2 py-8 px-8  rounded-xl">
                <span className="">
                    Aucune urgence
                    Votre stock actif est sous controle pour le moment.</span>
            </div>
        </div>
    )
}


export default Recipies