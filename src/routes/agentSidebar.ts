import AgentOverview from "@/pages/Agent/AgentOverview";
import type { ISidebarItem } from "@/types";
import AgentTransactions from "@/pages/Agent/AgentTransactionsView";
import AgentAddMoney from "@/pages/Agent/AgentAddMoney";
import AddMoneyToUser from "@/pages/Agent/AddMoneyToUser";
import WithdrawFromUser from "@/pages/Agent/WithdrawFromUser";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    // url: "#",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
      },
      
      {
        title: "Transactions History",
        url: "/agent/transactions",
        component: AgentTransactions,
      },
    ],
  },
  {
    title: "Action",
    // url: "#",
    items: [
      {
        title: "Add Money",
        url: "/agent/add-money",
        component: AgentAddMoney,
      },
      {
        title: "Add Money to User",
        url: "/agent/add-money-to-user",
        component: AddMoneyToUser,
      },
      {
        title: "Withdraw from User",
        url: "/agent/withdraw-from-user",
        component: WithdrawFromUser,
      },
    ],
  },
];
