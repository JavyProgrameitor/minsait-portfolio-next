const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { title: "Frameworks", items: ["Angular", "React", "Next.js"] },
  { title: "Calidad", items: ["ESLint", "Accesibilidad (a11y)", "Responsive UI"] },
  { title: "Trabajo", items: ["Git/GitHub", "Husky + commits", "Trabajo en equipo"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-100">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-extrabold">{s.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="badge badge-outline font-extrabold">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center font-bold opacity-80">
          Extra: Base de datos (SQL) y nociones de backend para colaborar mejor con el equipo.
        </div>
      </div>
    </section>
  );
}
