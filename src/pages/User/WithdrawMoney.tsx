import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useWithdrawMoneyMutation } from "@/redux/features/wallet/wallet.api";
import type { IErrorResponse } from "@/types";
import { toast } from "sonner";

export default function WithdrawMoney() {
  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

  const handleWithdrawMoney = async (values: {
    dataField: string;
    amount: string;
  }) => {
    const { dataField: agentEmail, amount } = values;
    try {
      const result = await withdrawMoney({
        agentEmail,
        amount: Number(amount),
      }).unwrap();

      if (result.success) {
        toast.success(`Withdrew TK $${amount} successfull`);
      }
      console.log(result)
    } catch (err) {
      const error = err as IErrorResponse;
      console.error(error);
      toast.error(error?.data.message || "Failed to withdraw money");
    }
  };

  return (
    <>
      <Heading title="Withdraw Money " />
      <WalletTransactionCard
        cardTitle="Withdraw"
        inputFieldTitle="Agent's Email"
        isSubmitting={isLoading}
        handleInputAmount={handleWithdrawMoney}
      />
    </>
  );
}
