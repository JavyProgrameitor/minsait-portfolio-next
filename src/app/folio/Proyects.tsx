const projects = [
  {
    title: "APPINFOEX – Digitalización servicio de incendios",
    desc: "Aplicación en Next.js orientada a digitalización/operativa. Despliegue en Vercel.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    repo: "https://github.com/JavyProgrameitor/APPINFOEX",
    demo: "https://appinfoex.vercel.app/",
  },
  {
    title: "ClonSpotify – UI + consumo de API",
    desc: "Clon de Spotify con Tailwind. Interacción con API para subir y escuchar canciones.",
    tags: ["HTML", "JavaScript", "Tailwind", "API"],
    repo: "https://github.com/JavyProgrameitor/ClonSpotify",
    demo: "https://clon-spotify-jet.vercel.app",
  },
  {
    title: "React-Form – Formulario en React + TS",
    desc: "Proyecto React + TypeScript (Vite). Base para formularios y validación en apps corporativas.",
    tags: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/JavyProgrameitor/React-Form",
    demo: "https://react-form-vercel.vercel.app",
  },
  {
    title: "API-React-Film – App React con API",
    desc: "Aplicación en React consumiendo una API (Vite).",
    tags: ["React", "JavaScript", "API", "Vite"],
    repo: "https://github.com/JavyProgrameitor/API-React-Film",
    demo: "https://api-react-film.vercel.app",
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
                <div className="mt-6 flex gap-2">
                  <a className="btn btn-outline font-extrabold" href={p.repo}>
                    Repo
                  </a>
                  <a className="btn btn-outline font-extrabold" href={p.demo}>
                    Demo
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
