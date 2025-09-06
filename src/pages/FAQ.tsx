import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Shield,
  CreditCard,
  DollarSign,
  Lock,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const faqData = [
  {
    id: "item-1",
    icon: HelpCircle,
    question: "What is a digital wallet and how does it work?",
    answer:
      "It is a secure platform that allows you to store funds, make payments, and transfer money online without using physical cash. You can add money to your wallet using bank transfers, credit/debit cards, or linked accounts, and use it for transactions anytime.",
  },
  {
    id: "item-2",
    icon: Shield,
    question: "Is my money safe in the digital wallet?",
    answer:
      "Yes. We use bank-grade encryption and multi-factor authentication to ensure the security of your funds and personal information. Your money is stored in compliance with financial regulations, making it completely safe.",
  },
  {
    id: "item-3",
    icon: CreditCard,
    question: "How can I add money to my wallet?",
    answer:
      "You can add money via bank transfers, UPI, debit/credit cards, or linked accounts. We also support automatic wallet top-ups for convenience.",
  },
  {
    id: "item-4",
    icon: DollarSign,
    question: "Are there any transaction fees?",
    answer:
      "Most wallet-to-wallet transfers are free. However, small processing fees may apply for bank withdrawals or certain payment methods. Check our fee structure in the app for details.",
  },
  {
    id: "item-5",
    icon: Lock,
    question: "What should I do if I forget my password or PIN?",
    answer:
      'Use the "Forgot Password" option on the login screen. You\'ll receive a secure verification link or OTP to reset your credentials. For additional security, always enable biometric authentication if available.',
  },
  {
    id: "item-6",
    icon: Globe,
    question: "Can I transfer money internationally?",
    answer:
      "Currently, international transfers are supported only through partnered services. We're working on expanding this feature for more countries soon.",
  },
];

export function FAQs() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-wallet-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-wallet-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-glow"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our digital wallet,
            security, and transactions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="item-1"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl overflow-hidden shadow-feature hover:shadow-glow/20 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-wallet-surface/30 transition-all duration-300">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <faq.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-foreground leading-tight">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Our support team is here to help you 24/7. Get in touch for
              personalized assistance.
            </p>
            <Link to={"/contact"}>
              <button className="bg-primary-foreground text-wallet-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                Contact Support
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
