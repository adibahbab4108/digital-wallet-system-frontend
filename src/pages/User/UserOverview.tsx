import { DataTable } from "@/components/modules/dashboard/DataTable";
import UserSectionCards from "@/components/modules/dashboard/UserSectionCards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useGetMyTransactionQuery } from "@/redux/features/transaction/transaction.api";
import type { ITransaction } from "@/types";

export default function UserOverview() {
  const { data: myTransactionData, isLoading } =
    useGetMyTransactionQuery(undefined);
console.log(myTransactionData)
  const transactions = Array.isArray(myTransactionData?.data)
    ? [...myTransactionData.data]
        .sort(
          (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date }
          ) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 5)
    : [];
  console.log(transactions);

  const columns = [
    {
      key: "#",
      label: "#",
      render: (_: ITransaction, index: number = 1) => index + 1,
    },
    { key: "type", label: "Type" },
    {
      key: "amount",
      label: "Amount",
      render: (tx: ITransaction) => `$${tx.amount}`,
    },
    {
      key: "date",
      label: "Date",
      render: (tx: ITransaction) =>
        `${new Date(tx.createdAt).toLocaleDateString()}`,
    },
    {
      key: "time",
      label: "Time",
      render: (tx: ITransaction) =>
        `${new Date(tx.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}`,
    },
    {
      key: "User",
      label: "User",
      render: (tx: ITransaction) => tx.senderWallet?.user?.email || "N/A",
    },
  ];
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
                <UserSectionCards />
                <div className="mx-4 p-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg">
                  <h2 className="text-lg font-medium my-2">
                    Recent Transactions
                  </h2>
                  <DataTable<ITransaction>
                    columns={columns}
                    data={transactions}
                    isLoading={isLoading}
                    pagination={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
