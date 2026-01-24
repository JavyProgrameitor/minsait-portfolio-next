import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-slate-500 p-4 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center rounded-3xl bg-slate-600">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="btn btn-ghost text-3xl font-extrabold text-slate-900">
              Portfolio
            </Link>
          </div>

          <ul className="menu menu-horizontal px-1">
            <li><Link className="text-slate-900 text-xl font-extrabold" href="/folio#about">Sobre mí</Link></li>
            <li><Link className="text-slate-900 text-xl font-extrabold" href="/folio#skills">Habilidades</Link></li>
            <li><Link className="text-slate-900 text-xl font-extrabold" href="/folio#projects">Proyectos</Link></li>
            <li><Link className="text-slate-900 text-xl font-extrabold" href="/folio#contact">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
