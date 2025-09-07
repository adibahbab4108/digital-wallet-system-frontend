import AboutCallToAction from "@/components/modules/about/AboutCallToAction";
import AboutCover from "@/components/modules/about/AboutCover";
import Mission from "@/components/modules/about/Mission";
import Vision from "@/components/modules/about/Vision";

export default function About() {
  return (
    <div className="">
      <AboutCover />
      <Mission />
      <Vision />
      <AboutCallToAction />
    </div>
  );
}
