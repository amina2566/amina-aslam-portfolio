import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
// import { portfolioData } from "../data/portfolioData";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-tight text-white"
        >
          {/* {portfolioData.name} */}
          {/* AMINA ASLAM */}
          <span className="text-cyan-400">AMINA  </span>
          <span className="text-white"> ASLAM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CV Button */}
        <a
          href="/Amina_Aslam_Devv.pdf"
          download
          className="hidden items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20 lg:flex"
        >
          <Download size={16} />
          Download CV
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 p-2 text-slate-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium ${
                    active
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href="/Amina_Aslam_Devv.pdf"
              download
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950"
            >
              <Download size={16} />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}