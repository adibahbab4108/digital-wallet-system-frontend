import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
import type { IErrorResponse } from "@/types";
import { toast } from "sonner";

export default function SendMoney() {
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const handleSendMoney = async (values: {
    dataField: string;
    amount: string;
  }) => {
    const { dataField: receiverEmail, amount } = values;
    console.log(receiverEmail, amount);

    const numericAmount = Number(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      const result = await sendMoney({
        receiverEmail,
        amount: numericAmount,
      }).unwrap();

      if (result.success) {
        toast.success(`Added TK ${amount} to ${receiverEmail}'s wallet`);
      }
      console.log(result);
    } catch (err) {
      console.log(err);
      const error = err as IErrorResponse;
      toast.error(
        error?.data?.message || "Failed to add money to user's wallet"
      );
    }
  };

  return (
    <>
      <Heading title="Send Money to other User" />
      <WalletTransactionCard
        cardTitle="Send Money"
        inputFieldTitle="Receiver's Email"
        isSubmitting={isLoading}
        handleInputAmount={handleSendMoney}
      />
    </>
  );
}
