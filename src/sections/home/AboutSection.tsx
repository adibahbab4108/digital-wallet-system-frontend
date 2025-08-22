import DisplayAboutCards from "@/components/ui/display-feature-cards";

export default function AboutSection() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row min-h-[80vh] ">
        <div className="mt-10 px-5 border">
          <DisplayAboutCards  />
        </div>
        <div className=" w-full">Right</div>
      </div>
    </>
  );
}
