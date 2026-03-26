import type { IconType } from "react-icons";
import { FaCableCar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaPlateWheat } from "react-icons/fa6";

interface NavProps {
    icon: IconType,
    color: string,
    size: number,
    label: string,
    active?: boolean,
    to: string
}

function NavItem({ icon: Icon, size: Size, label, active = false, color, to }: NavProps) {

    const iconColor = active ? "red" : color;
    console.log("state", active);
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `flex w-full cursor-pointer ${isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-400"
                }`
            }>
            {({ isActive }) => (

                <div className="flex px-6 py-4 w-full items-center">
                    <span className="mr-2">
                        <Icon size={Size} color={isActive ? "#A87321" : color}></Icon>
                    </span>
                    <h3 className={isActive ? "text-white" : "text-black"}> {label}</h3>
                </div>
            )}
        </NavLink>
    )



}


function SideBar() {


    return (<div className="flex flex-col w-1/5 p-3 bg-amber-500">

        <div className=" bg-green-500">
            <span className=" font-[Playfair]">Anti-gaspillage</span>
            <h1 className="">FreshTrack</h1>
        </div>
        <NavItem
            to="/"
            icon={FaCableCar}
            color="#999"
            size={20}
            label="Dashboard"
        />
        <NavItem
            to="/fridge"
            icon={FaCableCar}
            color="#999"
            size={20}
            label="Frigo"
        />
          <NavItem
            to="/recipes"
            icon={FaPlateWheat}
            color="#999"
            size={20}
            label="Recipes"
        />
         <NavItem
            to="/alert"
            icon={CiBellOn}
            color="#999"
            size={20}
            label="Alert"
        />
          <NavItem
            to="/statistique"
            icon={FaCableCar}
            color="#999"
            size={20}
            label="Statistique"
        />
        

    </div>)



}

export default SideBar;