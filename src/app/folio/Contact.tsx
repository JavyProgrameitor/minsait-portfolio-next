export function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-100">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-extrabold">Datos</h3>
              <p className="font-bold"><span className="font-extrabold">Ubicación:</span> España</p>
              <p className="font-bold"><span className="font-extrabold">Disponibilidad:</span> flexible</p>
              <p className="font-bold"><span className="font-extrabold">Inglés:</span> B2</p>

              <div className="mt-4 space-y-2">
                <a className="link font-extrabold" target="_blank" href="https://github.com/javierprogrameitor">
                  GitHub: javierprogrameitor
                </a>
                <a className="link font-extrabold" target="_blank" href="https://www.linkedin.com/">
                  LinkedIn: perfil
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-extrabold">Mensaje</h3>
              <p className="font-bold opacity-80">
                Si quieres, en el siguiente paso conectamos este formulario a un servicio (Formspree / Resend) para que funcione de verdad.
              </p>

              <form className="mt-4 space-y-4">
                <input className="input input-bordered w-full font-bold" placeholder="Nombre" />
                <input className="input input-bordered w-full font-bold" placeholder="Email" type="email" />
                <textarea className="textarea textarea-bordered w-full font-bold" placeholder="Mensaje" rows={4} />
                <button type="button" className="btn btn-active font-extrabold">
                  Enviar (demo)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
