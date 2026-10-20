import { Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="text-xl font-bold text-white">
              {/* {portfolioData.name} */}
              <span className="text-cyan-400">AMINA  </span>
              <span className="text-white"> ASLAM</span>
            </div>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              {portfolioData.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a> */}

            {/* <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a> */}

            <a
              href={`mailto:${portfolioData.email}`}
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>

            <button
              onClick={scrollToTop}
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="Back to top"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Amina Aslam - All rights reserved.
        </div>

      </div>
    </footer>
  );
}