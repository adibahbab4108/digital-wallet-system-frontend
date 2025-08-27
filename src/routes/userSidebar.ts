import DepositMoney from "@/pages/User/DepositMoney";
import SendMoney from "@/pages/User/SendMoney";
import UserOverview from "@/pages/User/UserOverview";
import WithdrawMoney from "@/pages/User/WithdrawMoney";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    // url: "#",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        component: UserOverview,
      },
      {
        title: "Deposit Money",
        url: "/user/deposit",
        component: DepositMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw",
        component: WithdrawMoney,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
    ],
  },
  {
    title: "Action",
    // url: "#",
    items: [],
  },
];
