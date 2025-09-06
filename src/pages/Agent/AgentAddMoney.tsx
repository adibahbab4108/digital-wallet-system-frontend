import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useAddMoneyMutation } from "@/redux/features/wallet/wallet.api";
import type { IErrorResponse } from "@/types";
import { toast } from "sonner";

export default function AgentAddMoney() {
  const [addMoney, { isLoading }] = useAddMoneyMutation();

  const handleAddMoney = async (values: {
    dataField: string;
    amount: string;
  }) => {
    const { dataField: cardNumber, amount } = values;

    const digitsOnly = cardNumber.replace(/\s/g, "");

    if (!/^[0-9\s]*$/.test(cardNumber)) {
      toast.error("Card number can only contain numbers and spaces");
      return;
    }

    if (digitsOnly.length !== 16) {
      toast.error("Card number must be exactly 16 digits");
      return;
    }

    try {
      const result = await addMoney({ amount: Number(amount) }).unwrap();
      if (result.success) {
        toast.success(`Added TK ${amount} from card ${cardNumber}`);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      console.error(error);
      toast.error(error?.data.message || "Failed to add money");
    }
  };  

  return (
    <>
      <Heading title="Add Money to Your Wallet" />
      <WalletTransactionCard
        cardTitle="Add Money"
        inputFieldTitle="Card Number"
        isSubmitting={isLoading}
        handleInputAmount={handleAddMoney}
      />
    </>
  );
}
