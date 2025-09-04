import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useAddMoneyToUserMutation } from "@/redux/features/agent/agent.api";
import type { IErrorResponse } from "@/types";
import { toast } from "sonner";

export default function AddMoneyToUser() {
  const [addMoneyToUser] = useAddMoneyToUserMutation();

  const handleAddMoneyToUser = async (values: {
    dataField: string;
    amount: string;
  }) => {
    const { dataField: receiverEmail, amount } = values;

    try {
      const result = await addMoneyToUser({
        receiverEmail,
        amount: Number(amount),
      }).unwrap();

      if (result.success) {
        toast.success(`Added TK ${amount} to ${receiverEmail}'s wallet`);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(
        error?.data?.message || "Failed to add money to user's wallet"
      );
    }
  };

  return (
    <>
      <Heading title="Add Money To User's Wallet" />
      <WalletTransactionCard
        cardTitle="Add Money"
        inputFieldTitle="Receiver Email Address"
        handleInputAmount={handleAddMoneyToUser}
      />
    </>
  );
}
