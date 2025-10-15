import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";

interface BackdoorHeaderProps {
  onJoinClick?: () => void;
}

export function BackdoorHeader({ onJoinClick }: BackdoorHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-yellow-500" />

              <h1 className="text-2xl font-bold text-white tracking-tight">
                BackDoor
              </h1>
            </div>
            <p className="text-sm text-yellow-500/90 font-medium mt-0.5">
              Skip the line. Tonight.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onJoinClick}
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/50"
          >
            Join the Waitlist →
          </Button>
        </div>
      </div>
    </header>
  );
}
