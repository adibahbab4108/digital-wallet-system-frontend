import { Button } from "@/components/ui/button";

export default function AboutCallToAction() {
  return (
    <section className=" text-foreground py-12 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Ready to Go Cashless?</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Sign up now and take control of your financial future with WalletX.
      </p>
      <Button className="text-foreground my-5 cursor-pointer">Get Started</Button>
    </section>
  );
}
