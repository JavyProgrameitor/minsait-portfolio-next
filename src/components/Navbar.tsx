import Link from "next/link";

const navItems = [
  { label: "Sobre mí", href: "/folio#about" },
  { label: "Habilidades", href: "/folio#skills" },
  { label: "Proyectos", href: "/folio#projects" },
  { label: "Contacto", href: "/folio#contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="navbar rounded-2xl bg-base-100/80 backdrop-blur border border-base-300 shadow">
          {/* START: Logo + Mobile menu */}
          <div className="navbar-start">
            {/* Hamburguesa (solo móvil) */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl bg-base-100 p-2 shadow border border-base-300"
              >
                {navItems.map((it) => (
                  <li key={it.href}>
                    <Link className="font-bold" href={it.href}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/" className="btn btn-ghost text-xl font-extrabold">
              Portfolio
            </Link>
          </div>

          {/* CENTER: Menu (desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              {navItems.map((it) => (
                <li key={it.href}>
                  <Link href={it.href}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
