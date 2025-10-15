import { SearchIcon, BellIcon, UtensilsIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: SearchIcon,
    title: "We find the tables everyone wants.",
    description:
      "Our team monitors last-minute cancellations and openings across Austin's trendiest spots.",
  },
  {
    number: "02",
    icon: BellIcon,
    title: "You claim your seat.",
    description:
      "When a table drops, you get a text. Tap to claim and walk right in — no waiting, no begging the host.",
  },
  {
    number: "03",
    icon: UtensilsIcon,
    title: "Dine like an insider.",
    description:
      'Show up under the confirmed name, enjoy your night. The only thing anyone will ask is, "how did you get in?"',
  },
];

export function BackdoorHowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It <span className="text-yellow-500">Works</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Three simple steps to skip the line and dine at the city's hottest
            spots
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-yellow-600/50 to-transparent" />
                )}

                {/* Card */}
                <div className="relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-600/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-yellow-600/50">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-yellow-600/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
