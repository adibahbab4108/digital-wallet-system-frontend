import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useWithdrawMoneyFromUserMutation } from "@/redux/features/agent/agent.api";
import type { IErrorResponse } from "@/types";
import { toast } from "sonner";

export default function WithdrawFromUser() {
  const [withdrawMoneyFromUser] = useWithdrawMoneyFromUserMutation();

  const handleWithdrawMoneyFromUser = async (values: {
    dataField: string;
    amount: string;
  }) => {
    const { dataField: receiverEmail, amount } = values;

    try {
      const result = await withdrawMoneyFromUser({
        receiverEmail,
        amount: Number(amount),
      }).unwrap();

      if (result.success) {
        toast.success(`Withdrawing TK ${amount} from ${receiverEmail}'s wallet`);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      console.log(error);
      toast.error(
        error.data.message || "Failed to withdraw money from user's wallet"
      );
    }
  };
  return (
    <>
      <Heading title="Withdraw money from user's wallet" />
      <WalletTransactionCard
        cardTitle="Withdraw Money"
        inputFieldTitle="Receiver Email Address"
        handleInputAmount={handleWithdrawMoneyFromUser}
      />
    </>
  );
}
