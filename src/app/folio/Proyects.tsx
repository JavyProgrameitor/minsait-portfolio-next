const projects = [
  {
    title: "Portfolio en Next.js (este)",
    desc: "Migración desde Angular, estructura por componentes, UI responsive y commits profesionales.",
    tags: ["Next.js", "TypeScript", "Tailwind", "DaisyUI"],
    link: "#",
  },
  {
    title: "App Front con Angular",
    desc: "Proyecto Angular con componentes, routing y enfoque en mantenibilidad.",
    tags: ["Angular", "TypeScript", "UI"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl font-extrabold">{p.title}</h3>
                <p className="font-bold opacity-80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="badge badge-outline font-extrabold">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a className="btn btn-outline font-extrabold" href={p.link}>
                    Ver repo / demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-bold opacity-70">
          En el siguiente paso te dejo los links reales (GitHub / Vercel) y añadimos capturas.
        </p>
      </div>
    </section>
  );
}
