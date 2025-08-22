import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 ">
      {/* <!-- Section Header --> */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most common questions about our digital wallet,
          security, and transactions.
        </p>
      </div>

      {/* <!-- Accordion Section --> */}
      <div className="space-y-4">
        <Accordion
          type="single"
          collapsible
          className="divide-y divide-gray-200 border-gray-200 rounded-lg shadow-sm"
          defaultValue="item-1"
        >
          {/* <!-- Item 1 --> */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              What is a digital wallet and how does it work?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                It is a secure platform that allows you to store
                funds, make payments, and transfer money online without using
                physical cash. You can add money to your wallet using bank
                transfers, credit/debit cards, or linked accounts, and use it
                for transactions anytime.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* <!-- Item 2 --> */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              Is my money safe in the digital wallet?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Yes. We use bank-grade encryption and multi-factor
                authentication to ensure the security of your funds and personal
                information. Your money is stored in compliance with financial
                regulations, making it completely safe.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* <!-- Item 3 --> */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              How can I add money to my wallet?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                You can add money via bank transfers, UPI, debit/credit cards,
                or linked accounts. We also support automatic wallet top-ups for
                convenience.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* <!-- Item 4 --> */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              Are there any transaction fees?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Most wallet-to-wallet transfers are free. However, small
                processing fees may apply for bank withdrawals or certain
                payment methods. Check our fee structure in the app for details.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* <!-- Item 5 --> */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              What should I do if I forget my password or PIN?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Use the “Forgot Password” option on the login screen. You’ll
                receive a secure verification link or OTP to reset your
                credentials. For additional security, always enable biometric
                authentication if available.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* <!-- Item 6 --> */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="mx-2 text-lg font-medium text-foreground hover:text-foreground">
              Can I transfer money internationally?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Currently, international transfers are supported only through
                partnered services. We’re working on expanding this feature for
                more countries soon.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
