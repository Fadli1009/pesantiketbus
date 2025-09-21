import { useSEO } from "../hooks/useSEO";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/buztics.png";
import Loader from "../components/templates/loader";
import { UserRoundPen } from "lucide-react";
import Layout from "../components/layouts/layout";

function ProfileUser() {
  useSEO({
    title: "Profile User - Buztics",
    description: "Manage your profile and account settings.",
    image: Logo, // ✅ pakai import langsung
    url: "https://buztics.com/profile", // bisa dynamic
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      
    </Layout>
  );
}

export default ProfileUser;
