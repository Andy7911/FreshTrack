
import { FaCheckCircle } from "react-icons/fa";
import CardInfo from "../dashboard/components/CardInfo";
import CardAlert from "./components/CardAlert";
import CardRecippe from "./components/CardRecippe";
import { FiAlertTriangle, FiCheckCircle, FiClock, FiTrash2 } from "react-icons/fi";
import Priority from "./components/InfoList";
import Recipies from "./components/Recipies";
import InfoList from "./components/InfoList";

function DashboardPage() {

    return (
        <div className="p-2">
            <div className="flex  justify-between">
                <CardInfo numb={2} label="Aliment frais" subTitle="Produits confortablement dans les temps." helper="none" icon={<FaCheckCircle />} tone="success"></CardInfo>
                <CardInfo numb={3} label="A consommer vite" subTitle="produit a consomer dans les trois prochaines jours" helper="none" tone="warning" ></CardInfo>
                <CardInfo numb={4} label="Expire" subTitle="Produit a jeter immédiatement" helper="none" tone="danger"  ></CardInfo>
                <CardInfo numb={2} label="Aliment frais" subTitle="dans le frigo" helper="none"  ></CardInfo>
            </div>
            <h1>Dashboard</h1>

            <div>
            
                <CardRecippe />
            </div>

            <div className="flex justify-between">
                <div className="w-[calc(60%-10px)]">
           <InfoList label="Top priorites" subText="Les aliments qui demandent votre attention maintenant." linkText="Voir toutes les alertes" defaultText="Aucune urgence
Votre stock actif est sous controle pour le moment."/>
           </div>

           <div className="w-[calc(40%-10px)]">
            <InfoList label="Recettes suggerees" subText="Basees sur vos aliments critiques."/>
           </div>

            </div>

        </div>
    )
}


export default DashboardPage;