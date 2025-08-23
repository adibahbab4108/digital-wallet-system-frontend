import HeroSection from "@/sections/home/HeroSection";
import Pricing from "./Pricing";
import Feature from "./Feature";
import { FAQs } from "./FAQ";
import Mission from "@/components/modules/about/Mission";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature/>
      <Mission/>
      <Pricing />
      <FAQs/>
    </>
  );
}
