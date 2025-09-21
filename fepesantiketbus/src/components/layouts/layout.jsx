import { History, Home, House, Ticket, User } from "lucide-react";
import Navbar from "./navbar";
import { Link } from "react-router";

const Layouts = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-50 text-gray-800">
      {/* Navbar fixed */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> */}
      <Navbar className="fixed top-0 left-0 w-full z-50 shadow-md bg-white/90 backdrop-blur-sm" />

      {/* Konten */}
      <main className="flex-1 w-full pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

      <div className="fixed bottom-0 bg-white p-8 w-full md:hidden">
        <div className="flex justify-between">
          <Link>
            <House size={30} color="black" />
          </Link>
          <Link>
            <Ticket size={30} color="black" />
          </Link>
          <Link>
            <History size={30} color="black" />
          </Link>
          <Link>
            <User size={30} color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
