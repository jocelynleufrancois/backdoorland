import { submitCustomer } from '@/services/airtable';
import { formatPhoneNumber, isValidPhone, isValidEmail } from '../../utils/validation';
import { useRef } from "react";
import { BackdoorHeader } from "@/polymet/components/backdoor-header";
import { BackdoorHero } from "@/polymet/components/backdoor-hero";
import { BackdoorRestaurants } from "@/polymet/components/backdoor-restaurants";
import { BackdoorHowItWorks } from "@/polymet/components/backdoor-how-it-works";
import { BackdoorSocialProof } from "@/polymet/components/backdoor-social-proof";
import { BackdoorJoinForm } from "@/polymet/components/backdoor-join-form";
import { BackdoorFooter } from "@/polymet/components/backdoor-footer";

console.log('AIRTABLE_API_KEY starts with:', process.env.AIRTABLE_API_KEY?.slice(0, 4));


export function BackdoorLanding() {
  const joinFormRef = useRef<HTMLDivElement>(null);

  const scrollToJoinForm = () => {
    joinFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroSubmit = async (phone: string) => {
    try {
      // Validate phone
      if (!isValidPhone(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }

      // Format and submit
      const formattedPhone = formatPhoneNumber(phone);
      await submitCustomer({
        phone: formattedPhone,
        referralSource: 'Hero SMS',
      });

      alert('Success! You\'re on the waitlist.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  const handleJoinFormSubmit = async (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    try {
      // Validate inputs
      if (!data.name || data.name.trim() === '') {
        alert('Please enter your name');
        return;
      }

      if (!isValidPhone(data.phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }

      if (!isValidEmail(data.email)) {
        alert('Please enter a valid email address');
        return;
      }

      // Format and submit
      const formattedPhone = formatPhoneNumber(data.phone);
      await submitCustomer({
        name: data.name,
        phone: formattedPhone,
        email: data.email,
        referralSource: 'Join Form',
      });

      alert('Success! You\'re on the waitlist.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
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
