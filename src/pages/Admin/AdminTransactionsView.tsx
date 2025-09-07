import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { TRANSACTION_TYPE } from "@/constants";
import { useSearchParams } from "react-router";
import { useState } from "react";
import type { ITransaction } from "@/types";
import { DataTable } from "@/components/modules/dashboard/DataTable";

export default function AdminTransactionView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const params: { page?: number; limit?: number; type?: string; status?: string; userId?: string } = {
    page: Number(searchParams.get("page") || currentPage),
    limit: Number(searchParams.get("limit") || 10),
    type: searchParams.get("type") || undefined,
    status: searchParams.get("status") || undefined,
    userId: searchParams.get("userId") || undefined,
  };

  const { data: transactionData, isLoading } = useGetAllTransactionsQuery(params);

  const transactions = transactionData?.data || [];
  const totalPages = transactionData?.meta?.totalPages || 1;

  const handleFilterChange = (field: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(field, value);
    setSearchParams(params);
  };

  const columns = [
    { key: "#", label: "#" },
    { key: "type", label: "Type" },
    {
      key: "status",
      label: "Status",
      render: (tx: ITransaction) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            tx.status === "COMPLETED"
              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
              : tx.status === "PENDING"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
              : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
          }`}
        >
          {tx.status}
        </span>
      ),
    },
    { key: "amount", label: "Amount", render: (tx: ITransaction) => `$${tx.amount}` },
    { key: "fee", label: "Fee", render: (tx: ITransaction) => `$${tx.fee}` },
    { key: "commission", label: "Commission", render: (tx: ITransaction) => `$${tx.commission}` },
    { key: "senderWallet", label: "Sender", render: (tx: ITransaction) => tx.senderWallet?.user?.email || "N/A" },
    { key: "receiverWallet", label: "Receiver", render: (tx: ITransaction) => tx.receiverWallet?.user?.email || "N/A" },
  ];

  const filters = (
    <Select onValueChange={(val) => handleFilterChange("type", val)}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TRANSACTION_TYPE).map((type) => (
          <SelectItem key={type} value={type}>{type}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  return (
    <DataTable<ITransaction>
      columns={columns}
      data={transactions}
      isLoading={isLoading}
      filters={filters}
      currentPage={currentPage}
      totalPages={totalPages}
      pagination={true}
      setCurrentPage={setCurrentPage}
    />
  );
}

