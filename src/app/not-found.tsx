import Link from "next/link";
import { Car, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-24 h-24 rounded-3xl bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] mx-auto shadow-2xl">
          <Car className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-6xl font-black text-[#f26522] tracking-wider block">404</span>
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">Page Not Found</h1>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            Oops! The route you are looking for has taken a detour or does not exist.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
