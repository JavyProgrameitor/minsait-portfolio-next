export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Sobre mí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="about-accordion" defaultChecked />
              <div className="collapse-title text-xl font-extrabold">Perfil</div>
              <div className="collapse-content font-bold space-y-2">
                <p>
                  Perfil junior orientado a <span className="font-extrabold">Front-end</span> y a entornos de desarrollo
                  profesionales (Git, code review, buenas prácticas).
                </p>
                <p>
                  Me interesa especialmente participar en equipos multidisciplinares y proyectos con impacto social y tangible.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="about-accordion" />
              <div className="collapse-title text-xl font-extrabold">Lo que aporto</div>
              <div className="collapse-content font-bold space-y-2">
                <ul className="list-disc pl-6">
                  <li>UI limpia y consistente, con foco en accesibilidad.</li>
                  <li>Capacidad de aprendizaje rápido y documentación.</li>
                  <li>Comunicación clara y trabajo en equipo.</li>
                </ul>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="about-accordion" />
              <div className="collapse-title text-xl font-extrabold">Objetivo en Minsait</div>
              <div className="collapse-content font-bold">
                <p>
                  Crecer en proyectos de transformación digital, rodeado de referentes técnicos, aportando valor desde el Front-end y el Backend
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold">Preferencias en Desarrollo</h3>
              <ul className="mt-2 space-y-2 font-bold">
                <li>✅ Front: HTML, CSS, JavaScript, TypeScript</li>
                <li>✅ Frameworks: Angular, Next.js  + React</li>
                <li>✅ Inglés: B2</li>
                <li>✅ Motivación: aprendizaje + equipo</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline font-extrabold">CFGS DAM/DAW o Grado</span>
                <span className="badge badge-outline font-extrabold">Hasta 4 años</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
