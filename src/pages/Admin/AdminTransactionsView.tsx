// import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import type { ITransaction } from "@/types";
// import { useSearchParams } from "react-router";
// import { TRANSACTION_TYPE } from "@/constants";
// import { useState } from "react";

// export default function TransactionsHistoryTable() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);

//   const params: {
//     page?: number;
//     limit?: number;
//     type?: string;
//     status?: string;
//     userId?: string;
//   } = {};

//   if (searchParams.get("page")) params.page = Number(searchParams.get("page"));
//   else params.page = 1;

//   if (searchParams.get("limit"))
//     params.limit = Number(searchParams.get("limit"));
//   else params.limit = 10;

//   if (searchParams.get("type")) params.type = String(searchParams.get("type"));

//   const status = searchParams.get("status");
//   if (status) params.status = status;

//   const userId = searchParams.get("userId");
//   if (userId) params.userId = userId;

//   const { data: transactionData, isLoading } =
//     useGetAllTransactionsQuery(params);

//   if (isLoading) return <h1>Loading...</h1>;

//   const transactions = transactionData?.data || [];
//   const totalPages = transactionData?.meta?.totalPages || 1;
//   const handleFilterChange = (field: string, value: string) => {
//     const params = new URLSearchParams(searchParams);
//     params.set(field, value);
//     setSearchParams(params);
//   };

//   const handlePageChange = (action: string) => {
//     if (action === "prev") {
//       setCurrentPage((prev) => Math.max(prev - 1, 1));
//     }
//     if (action === "next") {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
//         Transactions History
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-4">
//         <Select onValueChange={(val) => handleFilterChange("type", val)}>
//           <SelectTrigger className="w-40">
//             <SelectValue placeholder="Select Type" />
//           </SelectTrigger>
//           <SelectContent>
//             {Object.values(TRANSACTION_TYPE).map((type) => (
//               <SelectItem value={type}>{type}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
//         <Table className="min-w-full">
//           <TableHeader className="bg-gray-100 dark:bg-gray-800">
//             <TableRow>
//               <TableHead>#</TableHead>
//               <TableHead>Type</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Amount</TableHead>
//               <TableHead>Fee</TableHead>
//               <TableHead>Commission</TableHead>
//               <TableHead>Sender</TableHead>
//               <TableHead>Receiver</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {transactions.length > 0 ? (
//               transactions.map((tx: ITransaction, index: number) => (
//                 <TableRow
//                   key={tx._id || index}
//                   className="hover:bg-gray-50 dark:hover:bg-gray-700"
//                 >
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{tx.type}</TableCell>
//                   <TableCell>
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-medium ${
//                         tx.status === "COMPLETED"
//                           ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
//                           : tx.status === "PENDING"
//                           ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
//                           : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
//                       }`}
//                     >
//                       {tx.status}
//                     </span>
//                   </TableCell>
//                   <TableCell>${tx.amount}</TableCell>
//                   <TableCell>${tx.fee}</TableCell>
//                   <TableCell>${tx.commission}</TableCell>
//                   <TableCell>{tx.senderWallet?.user?.email || "N/A"}</TableCell>
//                   <TableCell>
//                     {tx.receiverWallet?.user?.email || "N/A"}
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={8}
//                   className="text-center py-4 text-gray-500 dark:text-gray-400"
//                 >
//                   No transactions found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end items-center gap-2 mt-4">
//         <button
//           className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
//              cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
//           onClick={() => handlePageChange("prev")}
//           disabled={currentPage <= 1}
//         >
//           Prev
//         </button>
//         <span className="px-2 text-gray-700 dark:text-gray-300">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
// className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
//              cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"          onClick={() => handlePageChange("next")}
//           disabled={currentPage===totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { TRANSACTION_TYPE } from "@/constants";
import { useSearchParams } from "react-router";
import { useState } from "react";
import type { ITransaction } from "@/types";
import { DataTable } from "@/components/modules/dashboard/DataTable";

export default function TransactionsHistoryTable() {
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

  const handlePageChange = (action: "prev" | "next") => {
    if (action === "prev") setCurrentPage((prev) => Math.max(prev - 1, 1));
    if (action === "next") setCurrentPage((prev) => prev + 1);
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
      title="Transactions History"
      columns={columns}
      data={transactions}
      isLoading={isLoading}
      filters={filters}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}

