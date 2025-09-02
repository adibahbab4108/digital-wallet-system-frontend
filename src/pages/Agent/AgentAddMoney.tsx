import Heading from "@/components/modules/dashboard/Heading";
import AddMoney from "@/components/modules/wallet/AddMoney";
import { useAddMoneyMutation } from "@/redux/features/wallet/wallet.api";
import { useState } from "react";
import { toast } from "sonner";

export default function AgentAddMoney() {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [addMoney] = useAddMoneyMutation();

  const handleAddMoney = async () => {
    if (!amount || isNaN(Number(amount))) {
      toast.error("Enter a valid amount");
      return;
    }
    if (Number(amount) <= 19) {
      toast.error("Add at least 20 TK");
      return;
    }

    //UserId isn't required coz I'm  accesing it from decoded req.user in backend
    try {
      const result = await addMoney({ amount }).unwrap();
      if (result.success) {
        toast.success(`Added tk ${Number(amount)} from card ${cardNumber}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add money");
    }
  };

  return (
    <>
      <Heading title="Add Money to Your Wallet" />
      <AddMoney
        amount={amount}
        cardNumber={cardNumber}
        setAmount={setAmount}
        setCardNumber={setCardNumber}
        handleAddMoney={handleAddMoney}
      />
    </>
  );
}
