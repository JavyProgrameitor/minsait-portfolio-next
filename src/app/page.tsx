import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/FondoPortfolio.jpeg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            PORTFOLIO
          </h1>

          <p className="mt-4 text-xl font-bold text-white/90">
            Javier · Junior Front-end 
          </p>
            <p className="mt-4 text-xl font-bold text-white/90">
            Next / Angular / React / TypeScript / CSS
          </p>

          <p className="mt-3 font-semibold text-white/80">
            Motivación, trabajo en equipo y aprendizaje continuo.
          </p>

          <Link
            href="/folio"
            className="mt-10 inline-flex w-72 items-center justify-center rounded-xl bg-white px-6 py-4 text-2xl font-extrabold text-black shadow-lg transition hover:scale-[1.02] active:scale-[0.99]"
          >
            Start
          </Link>
        </div>
      </div>
    </main>
  );
}
