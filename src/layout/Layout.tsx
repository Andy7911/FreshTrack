import SideBar from "../features/shared/components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../features/shared/components/Header";


export function Layout(){


return(<div className="flex h-screen">
<SideBar/>
<main className="flex-1">
  <Header/>  
<Outlet/>
</main>

<h1>salut</h1>
</div>)

}