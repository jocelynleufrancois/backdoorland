import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserIcon, PhoneIcon, MailIcon } from "lucide-react";

interface JoinFormData {
  name: string;
  phone: string;
  email: string;
}

interface BackdoorJoinFormProps {
  onSubmit?: (data: JoinFormData) => void;
}

export function BackdoorJoinForm({ onSubmit }: BackdoorJoinFormProps) {
  const [formData, setFormData] = useState<JoinFormData>({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && onSubmit) {
      onSubmit(formData);
    }
  };

  const handleChange =
    (field: keyof JoinFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <section className="relative py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Join the <span className="text-yellow-500">Club</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-2">
              We're launching first in Austin.
            </p>
            <p className="text-yellow-500 font-semibold">
              Spots are limited — request early access.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-white text-sm font-medium"
                >
                  Name *
                </Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />

                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    required
                    className="pl-11 h-12 bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-yellow-600 focus:ring-yellow-600/20"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-white text-sm font-medium"
                >
                  Phone Number *{" "}
                  <span className="text-zinc-500 font-normal">(preferred)</span>
                </Label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />

                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    required
                    className="pl-11 h-12 bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-yellow-600 focus:ring-yellow-600/20"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white text-sm font-medium"
                >
                  Email{" "}
                  <span className="text-zinc-500 font-normal">(optional)</span>
                </Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />

                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="pl-11 h-12 bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-yellow-600 focus:ring-yellow-600/20"
                  />
                </div>
              </div>

              {/* SMS Consent */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 mt-6">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  By clicking "Request Invite", I agree to receive SMS text messages from BackDoor about availability notifications, confirmations, and customer-care updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out.
                </p>
                <p className="text-zinc-500 text-xs mt-3">
                  View our <a href="/terms" className="text-yellow-500 hover:text-yellow-400 underline">Terms & Conditions</a> and <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 underline">Privacy Policy</a>
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-600/50 mt-6"
              >
                Request Invite
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
