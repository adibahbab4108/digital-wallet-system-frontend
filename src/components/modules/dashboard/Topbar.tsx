import { UserRound, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

interface ITopbar {
  name: string;
  role: string;
  picture?: string;
}

export default function Topbar({ name, role, picture }: ITopbar) {
  const [showScrollSidebar, setShowScrollSidebar] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 70) setShowScrollSidebar(true);
      else setShowScrollSidebar(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-background border-b border-border shadow-sm px-3 py-3 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center">
        {showScrollSidebar && <SidebarTrigger className="mx-2 fixed z-50" />}
        <div>
          <h1 className="text-foreground text-2xl font-semibold">
            Hi, {name}!
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage and review your wallet
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-muted">
          {/* DarkMode Toggle */}
          <ModeToggle />
        </button>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={picture || "./avatar.jpg"} alt={name} />
              <AvatarFallback>
                <UserRound />
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col text-left">
              <span className="font-medium">{name}</span>
              <span className="text-muted-foreground text-sm">
                {role.toLowerCase()}
              </span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
