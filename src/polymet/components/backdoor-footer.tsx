export function BackdoorFooter() {
  return (
    <footer className="relative bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <p className="text-zinc-400 text-sm font-medium">
            BackDoor © 2025 | Austin, TX | Skip the line everywhere
          </p>

          {/* Legal Disclaimer */}
          <p className="text-zinc-600 text-xs max-w-3xl mx-auto leading-relaxed">
            We're not affiliated with the restaurants listed. BackDoor operates
            independently to facilitate last-minute access opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
