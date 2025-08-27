import AgentOverview from "@/pages/Agent/AgentOverview";
import type { ISidebarItem } from "@/types";
import CashIn from "@/pages/Agent/CashIn";
import CashOut from "@/pages/Agent/CashOut";
import AgentTransactions from "@/pages/Agent/AgentTransactions";

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
        title: "Cash In",
        url: "/agent/cash-in",
        component: CashIn,
      },
      {
        title: "Cash Out",
        url: "/agent/cash-out",
        component: CashOut,
      },
      {
        title: "Transactions",
        url: "/agent/transactions",
        component: AgentTransactions,
      },
    ],
  },
  {
    title: "Action",
    // url: "#",
    items: [],
  },
];
