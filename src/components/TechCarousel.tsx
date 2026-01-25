import Image from "next/image";

const logos = [
  { src: "/images/Html5.svg", alt: "HTML5" },
  { src: "/images/Css3.svg", alt: "CSS3" },
  { src: "/images/Js.svg", alt: "JavaScript" },
  { src: "/images/Angular1.png", alt: "Angular" },
  { src: "/images/Next.js.webp", alt: "Next.js" },
  { src: "/images/Python.svg", alt: "Python" },
  { src: "/images/Sql.svg", alt: "SQL" },
  { src: "/images/Java.svg", alt: "Java" },
];

export function TechCarousel() {
  // duplicamos para efecto “infinito”
  const items = [...logos, ...logos];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm p-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h3 className="text-xl font-extrabold text-slate-900">
              Tecnologías con las que trabajo
            </h3>
          </div>

          <div className="marquee mt-6">
            <div className="marquee__track gap-10">
              {items.map((it, idx) => (
                <div
                  key={`${it.alt}-${idx}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    width={96}
                    height={48}
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
