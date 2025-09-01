import Heading from "@/components/modules/dashboard/Heading";
import OperationCard from "@/components/modules/dashboard/OperationCard";
import { Wallet, ArrowDownCircle, ArrowUpCircle, Send } from "lucide-react";

export default function CashIn() {
  const handleAddMoney = () => console.log("Add Money Clicked");
  const handleWithdraw = () => console.log("Withdraw Clicked");
  const handleDeposit = () => console.log("Deposit Clicked");
  const handleSendMoney = () => console.log("Send Money Clicked");
  return (
    <>
      <Heading title={"Add money to a user's wallet"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <OperationCard
          title="Add Money"
          description="Add money to your wallet."
          icon={Wallet}
          onClick={handleAddMoney}
        />
        <OperationCard
          title="Withdraw"
          description="Withdraw money from your wallet."
          icon={ArrowDownCircle}
          onClick={handleWithdraw}
        />
        <OperationCard
          title="Deposit"
          description="Deposit money via agent."
          icon={ArrowUpCircle}
          onClick={handleDeposit}
        />
        <OperationCard
          title="Send Money"
          description="Send money to another user."
          icon={Send}
          onClick={handleSendMoney}
        />
      </div>
    </>
  );
}
