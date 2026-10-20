import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Database,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-slate-950">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-8">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Ready to Build Innovative Software Solutions
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              {portfolioData.title}
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-cyan-400">{portfolioData.name}.</span>
              <br />
              Engineering Scalable Software Solutions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {portfolioData.shortIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "C#",
                ".NET",
                "ASP.NET Core",
                "SQL Server",
                "React",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">

              <Link
                to="/projects"
                className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/Amina_Aslam_Devv.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">

              {/* <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <Github size={19} />
              </a>

              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <Linkedin size={19} />
              </a> */}

              <a
                href={`mailto:${portfolioData.email}`}
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <Mail size={19} />
              </a>

            </div>
          </motion.div>

          {/* Right Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >

            <div className="absolute -inset-6 rounded-3xl bg-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

              {/* Editor Header */}
              <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <span className="ml-4 text-xs text-slate-500">
                  Developer.cs
                </span>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6 font-mono text-sm leading-8">

                <div>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-cyan-300">Developer</span>
                </div>

                <div className="pl-4">
                  {"{"}
                </div>

                <div className="pl-8">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-yellow-300">Name</span>{" "}
                  ={" "}
                  <span className="text-green-300">"Amina Aslam"</span>;
                </div>

                <div className="pl-8">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-yellow-300">Role</span>{" "}
                  ={" "}
                  <span className="text-green-300">
                    "Software Developer"
                  </span>
                  ;
                </div>

                <div className="mt-4 pl-8">
                  <span className="text-purple-400">public string[]</span>{" "}
                  <span className="text-yellow-300">Stack</span>{" "}
                  = {"{"}
                </div>

                <div className="pl-12 text-green-300">
                  ".NET",
                </div>

                <div className="pl-12 text-green-300">
                  "SQL Server",
                </div>

                <div className="pl-12 text-green-300">
                  "React",
                </div>

                <div className="pl-8">
                  {"}"};
                </div>

                <div className="mt-4 pl-8">
                  <span className="text-purple-400">public void</span>{" "}
                  <span className="text-cyan-300">BuildSolutions</span>()
                </div>

                <div className="pl-8">
                  {"{"}
                </div>

                <div className="pl-12 text-slate-400">
                  // Turning ideas into useful software
                </div>

                <div className="pl-8">
                  {"}"}
                </div>

                <div className="pl-4">
                  {"}"}
                </div>

              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-6 hidden rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Development</p>
                  <p className="font-semibold text-white">Clean Code</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 -top-6 hidden rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                  <Database size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Database</p>
                  <p className="font-semibold text-white">SQL Server</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 md:grid-cols-4 lg:px-8">

          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-slate-800 px-6 py-4 text-center md:border-r last:border-r-0"
            >
              <div className="text-3xl font-bold text-white">
                {stat.value}
              </div>

              <div className="mt-1 text-sm text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                What I Do
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Transforming Business Requirements into Scalable Software Solutions
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-400">
                I specialize in understanding business needs, designing efficient solutions, and developing reliable software applications that streamline workflows, improve operational efficiency, and solve real-world business challenges. From requirement analysis and system architecture to development, testing, and deployment, I focus on delivering secure, maintainable, and high-quality software tailored to business goals.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                More about me
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="bg-slate-900/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Featured Work
              </p>

              <h2 className="mt-3 text-4xl font-bold text-white">
                Selected Projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all projects
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Layers3 size={23} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-14 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ready to Work Together?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Build Something Valuable Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a business idea, a software requirement, or an existing system that needs improvement? I’m open to collaborating on custom software development, web applications, business management systems, and database-driven solutions. Let’s discuss your requirements and turn your ideas into reliable, efficient, and scalable software.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}