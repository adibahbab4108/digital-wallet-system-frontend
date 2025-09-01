"use client";

import {
  useGetAllWalletQuery,
  useUpdateUserWalletStatusMutation,
} from "@/redux/features/admin/admin.api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { WALLET_STATUS } from "@/constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useState } from "react";

export default function ManageUsers() {
  const { data: userData, isLoading: isFetching } =
    useGetAllWalletQuery(undefined);
  const [updateWalletStatus, { isLoading: isUpdating }] =
    useUpdateUserWalletStatusMutation();
  const [loadingRowId, setLoadingRowId] = useState<string | null>(null);

  const handleBlock = async (id: string) => {
    setLoadingRowId(id);
    try {
      const result = await updateWalletStatus({
        userId: id,
        walletStatus: WALLET_STATUS.BLOCKED,
      });
      console.log(result);
      if (result.data) toast.success("Blocked successully");
      if (result.error) {
        toast.error(result?.error?.data?.message);
      }
    } catch (error) {
      console.error("Failed to update wallet status:", error);
    } finally {
      setLoadingRowId(null);
    }
  };
  const handleUnblock = async (id: string) => {
    setLoadingRowId(id);
    try {
      const result = await updateWalletStatus({
        userId: id,
        walletStatus: WALLET_STATUS.ACTIVE,
      }).unwrap();
      if (result.success) {
        toast.success("User wallet activated successfully");
      }
      console.log(result);
    } catch (error) {
      console.error("Failed to update wallet status:", error);
    } finally {
      setLoadingRowId(null);
    }
  };

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Wallet Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData?.data?.map((wallet: any) => (
            <TableRow key={wallet.user._id}>
              <TableCell>{wallet.user.email}</TableCell>
              <TableCell>{wallet.user.role}</TableCell>
              <TableCell>
                {wallet.balance} {wallet.currency}
              </TableCell>
              <TableCell>{wallet.walletStatus}</TableCell>
              <TableCell>
                {wallet.walletStatus === "ACTIVE" ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        disabled={loadingRowId === wallet.user._id}
                      >
                        {loadingRowId === wallet.user._id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Block"
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to block this wallet?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          The user will not be able to perform transactions.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleBlock(wallet.user._id)}
                          className="text-foreground"
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnblock(wallet.user._id)}
                    disabled={loadingRowId === wallet.user._id}
                  >
                    {loadingRowId === wallet.user._id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Unblock"
                    )}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
