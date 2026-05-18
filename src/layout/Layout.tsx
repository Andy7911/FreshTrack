import SideBar from "../features/shared/components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../features/shared/components/Header";


export function Layout(){


return(<div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
<SideBar/>
<main className="flex-1 bg-[#0A0E0A]">
  <Header/>  
<Outlet/>
</main>

<h1>salut</h1>
</div>)

}