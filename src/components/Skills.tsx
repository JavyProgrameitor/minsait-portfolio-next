
const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { title: "Frameworks", items: ["Angular", "React", "Next.js"] },
  { title: "UI", items: ["Tailwind", "DaisyUI", "Responsive UI", "Accesibilidad (a11y)"] },
  { title: "Trabajo en equipo", items: ["Git/GitHub", "Husky + commits", "Code review", "Metodologías ágiles"] },
  { title: "Base técnica", items: ["SQL", "Java (base)", "APIs REST"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-2 text-center">Habilidades</h2>
        <p className="text-center font-semibold text-slate-600 mb-10">
          Enfoque junior, con base sólida y ganas de crecer en proyectos frontend. Siempre aprendiendo y mejorando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="card bg-white/70 backdrop-blur border border-black/5 shadow-xl">
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
      </div>
    </section>
  );
}
