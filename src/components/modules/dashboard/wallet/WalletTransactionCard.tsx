import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreditCard, DollarSign } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  dataField: z.string().min(1, "This field is required"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => Number(val) > 0, {
      message: "Amount must be greater than 0",
    }),
});

export default function WalletTransactionCard({
  cardTitle,
  inputFieldTitle,
  isSubmitting,
  handleInputAmount,
}: {
  cardTitle?: string;
  inputFieldTitle: string;
  isSubmitting: boolean;
  handleInputAmount: (values: { dataField: string; amount: string }) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataField: "",
      amount: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    handleInputAmount(values);
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            {cardTitle}
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Data Field */}
              <FormField
                control={form.control}
                name="dataField"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <CreditCard size={18} /> {inputFieldTitle}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`Enter ${inputFieldTitle.toLowerCase()}`}
                        className="text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount Field */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <DollarSign size={18} /> Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 cursor-pointer"
              >
                {isSubmitting ? "Processing..." : cardTitle}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
