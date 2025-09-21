import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Logo from "./assets/images/loader/buztics.png";
// import "./App.css";
import { Button } from "@/components/ui/button";
import { useSEO } from "./hooks/useSEO";
import { LucideLayoutList } from "lucide-react";
import Layouts from "./components/layouts/layout";

function App() {
  useSEO({
    title: "Buztics - Easy Bus Ticket BookingBuztics",
    description: "Create your account and book your bus tickets with ease.",
    favicon: "../assets/images/loader/buztics.png", // path dari public
    image: "../assets/images/logo/buztics.png", // untuk share ke WhatsApp/Twitter
    // url: "https://buztics.com/", // bisa dynamic
    url: "http://localhost:5173/", // bisa dynamic
  });

  const [count, setCount] = useState(0);

  return (
    <Layouts>
      hallo
    </Layouts>
  );
}

export default App;
