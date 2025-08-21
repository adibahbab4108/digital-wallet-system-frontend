import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
