import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "The secret weapon for last-minute nights out.",
    author: "Austin Food Critic",
  },
  {
    quote: "It feels like having a concierge in your pocket.",
    author: "Tech Insider",
  },
];

const brands = [
  { name: "Forbes", width: "w-24" },
  { name: "Austin Eater", width: "w-32" },
  { name: "TechCrunch", width: "w-32" },
];

export function BackdoorSocialProof() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-zinc-900/50 border border-yellow-600/20 rounded-2xl p-8 hover:border-yellow-600/40 transition-all duration-300"
              >
                <QuoteIcon className="w-10 h-10 text-yellow-600/30 mb-4" />

                <p className="text-white text-xl sm:text-2xl font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wide">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div className="text-center">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`${brand.width} h-8 bg-zinc-800/50 rounded flex items-center justify-center border border-zinc-700/50`}
              >
                <span className="text-zinc-400 text-sm font-semibold">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
