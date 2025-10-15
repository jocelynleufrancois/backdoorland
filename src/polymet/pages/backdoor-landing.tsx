import { useRef } from "react";
import { BackdoorHeader } from "@/polymet/components/backdoor-header";
import { BackdoorHero } from "@/polymet/components/backdoor-hero";
import { BackdoorRestaurants } from "@/polymet/components/backdoor-restaurants";
import { BackdoorHowItWorks } from "@/polymet/components/backdoor-how-it-works";
import { BackdoorSocialProof } from "@/polymet/components/backdoor-social-proof";
import { BackdoorJoinForm } from "@/polymet/components/backdoor-join-form";
import { BackdoorFooter } from "@/polymet/components/backdoor-footer";

export function BackdoorLanding() {
  const joinFormRef = useRef<HTMLDivElement>(null);

  const scrollToJoinForm = () => {
    joinFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroSubmit = (phone: string) => {
    console.log("Hero SMS submitted:", phone);
    // Handle SMS submission
  };

  const handleJoinFormSubmit = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    console.log("Join form submitted:", data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black">
      <BackdoorHeader onJoinClick={scrollToJoinForm} />

      <BackdoorHero onSubmit={handleHeroSubmit} />

      <BackdoorRestaurants />

      <BackdoorHowItWorks />

      <BackdoorSocialProof />

      <div ref={joinFormRef}>
        <BackdoorJoinForm onSubmit={handleJoinFormSubmit} />
      </div>
      <BackdoorFooter />
    </div>
  );
}
