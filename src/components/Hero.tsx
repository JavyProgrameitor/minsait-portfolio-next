import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-base-200 text-base-content">
      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row gap-10">
          <Image
            src="/images/Javier.png"
            alt="Javier"
            width={288}
            height={288}
            className="w-56 h-56 lg:w-72 lg:h-72 rounded-full border-4 border-white"
          />

          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-xl font-extrabold">Hola, soy Javier</p>

            <h1 className="text-5xl font-extrabold heading-gradient">
              Desarrollador Front-end Junior
            </h1>

            <p className="text-xl font-bold mt-3">
              Angular · React · TypeScript · HTML · CSS
            </p>

            <p className="mt-4 font-semibold opacity-90">
              Busco incorporarme a un equipo paracrecer en proyectos con impacto, 
              aprendiendo buenas prácticas y aportando una UI clara, accesible y mantenible.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a className="btn btn-neutral text-white rounded-xl font-extrabold" href="#projects">Ver proyectos</a>
              <a className="btn btn-neutral text-white rounded-xl font-extrabold" href="#contact">Contactar</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="badge badge-outline font-extrabold">Inglés B2</span>
              <span className="badge badge-outline font-extrabold">Trabajo en equipo</span>
              <span className="badge badge-outline font-extrabold">Aprendizaje continuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
