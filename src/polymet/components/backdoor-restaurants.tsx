import { SparklesIcon } from "lucide-react";

const restaurants = [
  "Uchi",
  "Uchiko",
  "Sammie's Italian",
  "Aba",
  "Clark's Oyster Bar",
  "Suerte",
  "Odd Duck",
  "Emmer & Rye",
  "Sushi Bar ATX",
  "Hestia",
];

export function BackdoorRestaurants() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <SparklesIcon className="w-5 h-5 text-yellow-500" />

            <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
              Last-Minute Access To
            </p>
            <SparklesIcon className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Austin's <span className="text-yellow-500">Hottest</span> Tables
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Get last-minute reservations at the restaurants everyone's talking
            about
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-yellow-600/50 hover:bg-zinc-900/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/10"
              >
                <div className="text-center">
                  <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                    {restaurant}
                  </p>
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            ))}
          </div>

          {/* Bottom CTA Text */}
          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm">
              And many more exclusive spots added weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
