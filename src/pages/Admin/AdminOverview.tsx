import Topbar from "@/components/modules/dashboard/Topbar";
import { useUserInfoQuery } from "@/redux/features/user/user.api";

export default function AdminOverview() {
  const {data:userData} = useUserInfoQuery(undefined)
console.log(userData)
const {name, role,} = userData.data
  return (
    <>
    <Topbar name={name} role={role}/>
    </>
  )
}
