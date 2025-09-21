import { Card, CardContent } from "@/components/ui/card";
import LoaderIcon from "../../assets/images/loader/buztics.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-200 to-orange-200 px-4 z-50">
      <Card className="w-[200px] h-[200px] shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center justify-center py-8 space-y-4">
          {/* Animasi Loading */}
          <img
            src={LoaderIcon}
            alt="loader-icon"
            className="w-25 h-18 animate-bounce"
          />
          <p className="font-medium text-sm animate-pulse">
            Loading, please wait...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
