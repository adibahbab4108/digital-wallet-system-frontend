import type { IUser } from "@/types";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUpdateAgentApprovalMutation } from "@/redux/features/admin/admin.api";
import { AGENT_STATUS } from "@/constants";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
interface UserTableProps {
  data: IUser[];
}
export default function UserTable({ data }: UserTableProps) {
  const [updateApproval, { isLoading }] = useUpdateAgentApprovalMutation();
  const [rows, setRows] = useState<IUser[]>(data);

  console.log(rows);
  if (isLoading) return <h1>Loading...</h1>;

  const handleApprove = async (id?: string) => {
    if (!id) return;

    try {
      const res = await updateApproval({
        agentId: id,
        agentStatus: AGENT_STATUS.APPROVED,
      }).unwrap();

      if (res.success) {
        toast.success("Approved successfully");
      }
      setRows((prev) =>
        prev.map((u) =>
          u._id === id
            ? { ...u, agentStatus: AGENT_STATUS.APPROVED, isVerified: true }
            : u
        )
      );
    } catch {
      toast.error("Approval failed:");
    }
  };

  const handleReject = async (id?: string) => {
    const res = await updateApproval({
      agentId: id,
      agentStatus: AGENT_STATUS.SUSPENDED,
    }).unwrap();

    if (res.success) {
      toast.success("Agent Suspended");
    }

    setRows((prev) =>
      prev.map((u) =>
        u._id === id
          ? { ...u, agentStatus: AGENT_STATUS.SUSPENDED, isVerified: false }
          : u
      )
    );
  };

  return (
    <Table>
      <TableCaption>Agent approvals</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>SN</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Approval</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((user, index) => (
          <TableRow key={user._id ?? user.email}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="font-medium">{user.email}</span>
                {user.name && (
                  <span className="text-xs text-muted-foreground">
                    {user.name}
                  </span>
                )}
              </div>
            </TableCell>
            <TableCell>
              <Button
                size="sm"
                className="flex flex-col bg-primary text-foreground "
              >
                <span className="font-medium text-white">
                  {user.agentStatus}
                </span>
              </Button>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                {user.agentStatus === "PENDING" ? (
                  <>
                    <Button
                      size="sm"
                      className="text-white bg-green-700 "
                      onClick={() => handleApprove(user._id)}
                    >
                      <span className="sm:hidden">
                        <Check />
                      </span>
                      <span className="hidden sm:inline">Approve</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleReject(user._id)}
                    >
                      <span className="sm:hidden">
                        <X />
                      </span>
                      <span className="hidden sm:inline ">Suspend</span>
                    </Button>
                  </>
                ) : (
                  <div>
                    {user.agentStatus === "APPROVED" ? (
                      <Badge className="text-white bg-green-700">Approved</Badge>
                    ) : (
                      <Badge className="text-white bg-red-600">Suspended</Badge>
                    )}
                  </div>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
