/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  title: string;
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  filters?: React.ReactNode; 
  currentPage: number;
  totalPages: number;
  onPageChange: (action: "prev" | "next") => void;
}

export function DataTable<T>({
  title,
  columns,
  data,
  isLoading = false,
  filters,
  currentPage,
  totalPages,
  onPageChange,
}: DataTableProps<T>) {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h2>

      {filters && <div className="flex flex-wrap gap-4 mb-4">{filters}</div>}

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key.toString()}>{col.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  {columns.map((col) => (
                    <TableCell key={col.key.toString()}>
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
             cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          onClick={() => onPageChange("prev")}
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <span className="px-2 text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
             cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          onClick={() => onPageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
