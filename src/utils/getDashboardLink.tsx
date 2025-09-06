import { DASHBOARD_LINKS } from "@/constants/Link";
import type { TRole } from "@/types";

export const getDashboardLink = (role: TRole) => DASHBOARD_LINKS[role] || "/";
// export const getDashboardLink = (role: TRole) =>{
//     console.log(DASHBOARD_LINKS[role])
// };
