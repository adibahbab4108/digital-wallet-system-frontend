import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRANSACTION_TYPE } from "@/constants";
import { useSearchParams } from "react-router";
import { useState } from "react";
import type { ITransaction } from "@/types";
import { DataTable } from "@/components/modules/dashboard/DataTable";
import { useGetMyTransactionQuery } from "@/redux/features/transaction/transaction.api";
import Heading from "@/components/modules/dashboard/Heading";

export default function AgentTransactionView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const params: {
    page?: number;
    limit?: number;
    type?: string;
    status?: string;
  } = {
    page: Number(searchParams.get("page") || currentPage),
    limit: Number(searchParams.get("limit") || 10),
    type: searchParams.get("type") || undefined,
    status: searchParams.get("status") || undefined,
  };

  const { data: myTransactionData, isLoading } =
    useGetMyTransactionQuery(params);

  const transactions = myTransactionData?.data || [];
  const totalPages = myTransactionData?.meta?.totalPages || 1;

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
      key: "commission",
      label: "Commission",
      render: (tx: ITransaction) => `$${tx.commission}`,
    },
    {
      key: "senderWallet",
      label: "Sender",
      render: (tx: ITransaction) => tx.senderWallet?.user?.email || "N/A",
    },
    {
      key: "receiverWallet",
      label: "Receiver",
      render: (tx: ITransaction) => tx.receiverWallet?.user?.email || "N/A",
    },
  ];

  const filters = (
    <Select onValueChange={(val) => handleFilterChange("type", val)}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TRANSACTION_TYPE).map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  return (
    <>
      <Heading title="Transaction History" />
      <DataTable<ITransaction>
        columns={columns}
        data={transactions}
        isLoading={isLoading}
        filters={filters}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
