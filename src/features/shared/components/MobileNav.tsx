import { FiBook, FiHome } from "react-icons/fi";

const item = [
    {
        to:"/", label:"Acceuil", icon:FiHome,
      },
    {
          to:"/", label:"Recette", icon:FiBook,
    }
]

export default function MobileNav(){


return (
    <nav className="fixed bg-amber-100 ">
<span>nav</span>

    </nav>
)




}