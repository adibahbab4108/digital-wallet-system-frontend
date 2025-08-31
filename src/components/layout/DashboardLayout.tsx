import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { Skeleton } from "../ui/skeleton";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import Topbar from "../modules/dashboard/Topbar";

export default function DashboardLayout() {
    const {data:userData, isLoading} = useUserInfoQuery(undefined) ||[]
    if(isLoading) return <Skeleton/> 
  console.log(userData)
  const {name, role,} = userData.data
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
          />
          </header> */}
          
              <Topbar name={name} role={role}/>
          
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
