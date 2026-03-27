
import Card from "../dashboard/components/Card";
import CardAlert from "./components/CardAlert";
function DashboardPage() {

    return (
        <div className="p-2">
            <div className="flex  justify-between">
            <Card numb={2} title="Aliment frais" subTitle="dans le frigo" ></Card>
            <Card numb={2} title="Aliment frais" subTitle="dans le frigo" ></Card>
            <Card numb={2} title="Aliment frais" subTitle="dans le frigo" ></Card>
            <Card numb={2} title="Aliment frais" subTitle="dans le frigo" ></Card>
            </div>
            <h1>Dashboard</h1>
            <CardAlert  />

      
        </div>
    )
}


export default DashboardPage;