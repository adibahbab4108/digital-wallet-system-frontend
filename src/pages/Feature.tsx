import DisplayAboutCards from "@/components/ui/display-feature-cards";
import featureImg from "@/assets/images/features.png";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <>
      <div
        className="container mx-auto flex flex-col md:flex-row min-h-[80vh] mt-10 gap-5 justify-between"
      >
        <div className=" px-5 flex justify-center items-center ">
          <DisplayAboutCards />
        </div>
        <div className="w-full flex justify-center items-center ">
          <motion.img
            src={featureImg}
            alt=""
            className="rounded-xl"
            animate={{ y: [0, -10, 0] }} // moves up and down
            transition={{
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut", // smooth animation
            }}
          />
        </div>
      </div>
    </>
  );
}
