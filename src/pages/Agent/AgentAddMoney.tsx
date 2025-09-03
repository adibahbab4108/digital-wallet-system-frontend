import Heading from "@/components/modules/dashboard/Heading";
import WalletTransactionCard from "@/components/modules/dashboard/wallet/WalletTransactionCard";
import { useAddMoneyMutation } from "@/redux/features/wallet/wallet.api";
import { toast } from "sonner";

export default function AgentAddMoney() {
  const [addMoney] = useAddMoneyMutation();

  const handleAddMoney = async (values: { dataField: string; amount: string }) => {
    const { dataField: cardNumber, amount } = values;

    try {
      const result = await addMoney({ amount: Number(amount) }).unwrap();
      if ((result).success) {
        toast.success(`Added TK ${amount} from card ${cardNumber}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add money");
    }
  };

  return (
    <>
      <Heading title="Add Money to Your Wallet" />
      <WalletTransactionCard
        cardTitle="Add Money"
        inputFieldTitle="Card Number"
        handleInputAmount={handleAddMoney}
      />
    </>
  );
}
