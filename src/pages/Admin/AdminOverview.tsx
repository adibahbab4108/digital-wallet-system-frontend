import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/modules/dashboard/SectionCards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json"
import { useGetAllUsersQuery } from "@/redux/features/admin/admin.api";

export default function AdminOverview() {
const {data:userData} = useGetAllUsersQuery(undefined)
console.log(userData)
  return (
    <>
     <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </>
  )
}
