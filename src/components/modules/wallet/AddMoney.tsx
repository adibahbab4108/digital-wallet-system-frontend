import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, DollarSign } from "lucide-react";

export default function AddMoney({
  amount,
  cardNumber,
  setAmount,
  setCardNumber,
  handleAddMoney,
}: {
  amount: string;
  cardNumber: string;
  setAmount: (value: string) => void;
  setCardNumber: (value: string) => void;
  handleAddMoney: () => void;
}) {
  return (
    <div className="flex justify-center items-center min-h-[70vh] p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Add Money
          </h2>
          <div className="space-y-4">
            {/* Card Number */}
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="flex items-center gap-2">
                <CreditCard size={18} /> Card Number
              </Label>
              <Input
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter your card number"
                className="text-lg"
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="flex items-center gap-2">
                <DollarSign size={18} /> Amount
              </Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="text-lg"
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleAddMoney}
              disabled={Number(amount) <= 0 }
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 cursor-pointer"
            >
              Add Money
            </Button>
          </div>

          {/* Demo Info */}
          <p className="text-center text-muted-foreground text-sm">
            Use demo card:{" "}
            <span className="font-semibold">4111 1111 1111 1111</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
