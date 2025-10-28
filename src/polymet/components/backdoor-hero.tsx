import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquareIcon } from "lucide-react";

interface BackdoorHeroProps {
  onSubmit?: (phone: string) => void;
}

export function BackdoorHero({ onSubmit }: BackdoorHeroProps) {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && onSubmit) {
      onSubmit(phone);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" />

          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Optional sub-text */}
        <p className="text-yellow-500/80 text-sm sm:text-base font-medium mb-6 tracking-wide uppercase">
          The city's best tables and experiences, unlocked last-minute
        </p>

        {/* Main Headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Can't get a <span className="text-yellow-500">reservation</span>
          ?
          <br />
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            We can.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-zinc-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          BackDoor is the fastest way to claim last-minute tables at Austin's
          hottest restaurants — even when they're "fully booked."
        </p>
        <p className="text-yellow-500 text-xl sm:text-2xl font-semibold mb-12">
          Get in through the back door.
        </p>

        {/* SMS Capture Form */}
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <MessageSquareIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />

              <Input
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-11 h-14 bg-zinc-900/80 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-yellow-600 focus:ring-yellow-600/20"
              />
            </div>
            <Button
              type="submit"
              className="h-14 px-8 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-600/50"
            >
              Text me when we launch
            </Button>
          </form>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            By clicking "Text me when we launch", I agree to receive SMS text messages from BackDoor about availability notifications, confirmations, and customer-care updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out.
          </p>
          <p className="text-zinc-500 text-xs mt-2">
            View our <a href="/terms" className="text-yellow-500 hover:text-yellow-400 underline">Terms & Conditions</a> and <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
