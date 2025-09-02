import UserTable from "@/components/modules/dashboard/UserTable";
import { useGetAllAgentsQuery } from "@/redux/features/admin/admin.api";

export default function ManageAgents() {
  const { data: agentsData, isLoading } = useGetAllAgentsQuery(undefined);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div>ManageAgents</div>
      <UserTable data={agentsData?.data} />
    </>
  );
}
