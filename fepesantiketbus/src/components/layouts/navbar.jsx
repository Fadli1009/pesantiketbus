import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router";
import Logo from "../../assets/images/logo/buztics.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md px-5 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={Logo}
          alt="Buztics Logo"
          className="w-32 h-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Profile Dropdown */}
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end" sideOffset={8}>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-gray-500">
                  <a href="#" className="hover:underline">
                    View Profile
                  </a>
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              <Settings className="w-4 h-4 mr-2" />
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
