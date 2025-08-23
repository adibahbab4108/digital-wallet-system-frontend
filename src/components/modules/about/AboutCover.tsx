export default function AboutCover() {
  return (
    <section className="relative bg-primary text-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          About <span className="text-yellow-300">WalletX</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-200">
          Your trusted digital wallet solution for secure, fast, and seamless
          transactions worldwide.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
