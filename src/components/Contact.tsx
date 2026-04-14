export function Contact() {
  const email = "javierprogrameitor@gmail.com";

  const links = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}?subject=Contacto%20Portfolio%20Indra%2FMinsait`,
      badge: "Directo",
    },
    {
      label: "GitHub (1)",
      value: "javierprogrameitor",
      href: "https://github.com/javierprogrameitor",
      badge: "Repos",
    },
    {
      label: "GitHub (2)",
      value: "JavyProgrameitor",
      href: "https://github.com/JavyProgrameitor",
      badge: "Repos",
    },
    {
      label: "Demo destacada",
      value: "APPINFOEX (Vercel)",
      href: "https://appinfoex.vercel.app/",
      badge: "Live",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Contacto
          </h2>
          <p className="mt-3 text-base font-semibold text-slate-600">
            Abierto a oportunidades Junior Front-end. Respondo rápido por email.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card principal */}
          <div className="text-center card lg:col-span-1 bg-white/70 backdrop-blur border border-black/5 shadow-xl">
            <div className="card-body">
              

              <div className="mt-2 space-y-2 text-sm font-semibold text-slate-700">
                <h3 className="text-xl font-extrabold mb-5">Datos</h3>
                <p><span className="font-extrabold">Ubicación:</span> España</p>
                <p><span className="font-extrabold">Inglés:</span> B2</p>
                <p><span className="font-extrabold">Modalidad:</span> flexible</p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  className="btn btn-neutral text-white font-extrabold rounded-xl"
                  href={`mailto:${email}?subject=Contacto%20Portfolio%20Indra%2FMinsait`}
                >
                  Escribir Email
                </a>

                <a className="btn btn-neutral text-white  font-extrabold rounded-xl" href="/folio#projects">
                  Ver proyectos
                </a>
              </div>
            </div>
          </div>

          {/* Links bonitos */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border border-black/5 bg-white/60 backdrop-blur p-5 shadow-sm transition hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-extrabold text-slate-500">
                      {l.label}
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900 break-all">
                      {l.value}
                    </div>
                  </div>

                  <span className="badge badge-outline font-extrabold">
                    {l.badge}
                  </span>
                </div>

                <div className="mt-4 text-sm font-semibold text-slate-600 group-hover:text-slate-800">
                  Abrir →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
