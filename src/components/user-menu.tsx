import {
  LayoutDashboardIcon,
  LogOutIcon,
  UserRound,
  UserRoundCog,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { Skeleton } from "./ui/skeleton";
import { Link } from "react-router";

export default function UserMenu() {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout(undefined);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isLoading) {
    return <Skeleton className="h-10 w-10 rounded-full" />;
  }

  const user = data?.data;
  const { name = "User", email = "Not available", picture } = user || {};

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto p-0 hover:bg-transparent cursor-pointer"
              aria-label="User Menu"
            >
              <Avatar>
                <AvatarImage
                  src={picture || "./avatar.jpg"}
                  alt={name || "User"}
                />
                <AvatarFallback>
                  <UserRound />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-64" align="end">
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="text-foreground truncate text-sm font-medium">
                {name}
              </span>
              <span className="text-muted-foreground truncate text-xs font-normal">
                {email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex items-center gap-2">
                  <UserRoundCog size={16} className="opacity-60" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <LayoutDashboardIcon size={16} className="opacity-60" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 cursor-pointer flex items-center gap-2"
              disabled={isLoggingOut}
            >
              <LogOutIcon size={16} className="opacity-60" />
              <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <Button variant="outline" className="cursor-pointer">Login</Button>
        </Link>
      )}
    </>
  );
}
