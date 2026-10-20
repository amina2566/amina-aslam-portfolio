import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Database,
  Laptop,
  Layers3,
  Server,
  Wrench,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Building reliable APIs and application logic",
    icon: Server,
    skills: portfolioData.skills.backend,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Creating modern and responsive interfaces",
    icon: Laptop,
    skills: portfolioData.skills.frontend,
  },
  {
    id: "database",
    title: "Database & SQL",
    subtitle: "Designing and working with data-driven systems",
    icon: Database,
    skills: portfolioData.skills.database,
  },
  {
    id: "desktop",
    title: "Desktop Development",
    subtitle: "Business applications and reporting solutions",
    icon: Layers3,
    skills: portfolioData.skills.desktop,
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Development and productivity tools",
    icon: Wrench,
    skills: portfolioData.skills.tools,
  },
  {
    id: "architecture",
    title: "Architecture & Concepts",
    subtitle: "Engineering principles and development practices",
    icon: Braces,
    skills: portfolioData.skills.concepts,
  },
];

const coreStack = [
  {
    name: "C#",
    description: "Primary programming language for application development.",
  },
  {
    name: ".NET",
    description: "Backend and enterprise application development.",
  },
  {
    name: "ASP.NET Core",
    description: "REST APIs and modern web backend solutions.",
  },
  {
    name: "SQL Server",
    description: "Database design, T-SQL and data processing.",
  },
  {
    name: "React",
    description: "Modern frontend and component-based interfaces.",
  },
  {
    name: "REST APIs",
    description: "Integration between frontend and backend systems.",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend");

  const active = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <main className="overflow-hidden bg-slate-950 pt-20">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technical Skills
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Technologies I use to
              <span className="text-cyan-400"> build software.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              My technical experience spans backend development, modern
              frontend applications, SQL Server, desktop software, APIs,
              reporting and software architecture.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CORE STACK
      ====================================================== */}
      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Core Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Technologies at the center of my development work.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {coreStack.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Code2 size={21} />
                  </div>

                  <span className="text-xs font-medium text-slate-600">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          SKILL MATRIX
      ====================================================== */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Skill Matrix
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              My technical toolkit
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Explore the technologies, tools and engineering concepts I work
              with across different areas of software development.
            </p>

          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[300px_1fr]">

            {/* Category Navigation */}
            <div className="space-y-2">

              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition duration-200 ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition ${
                        isActive
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-400 group-hover:text-cyan-400"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">

                      <p
                        className={`text-sm font-semibold ${
                          isActive
                            ? "text-cyan-300"
                            : "text-slate-300"
                        }`}
                      >
                        {category.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {category.skills.length} technologies
                      </p>

                    </div>

                  </button>
                );
              })}

            </div>

            {/* Active Skills */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9"
            >

              {active && (
                <>
                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <active.icon size={27} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {active.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {active.subtitle}
                      </p>
                    </div>

                  </div>

                  <div className="mt-9 grid gap-3 sm:grid-cols-2">

                    {active.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 transition hover:border-cyan-400/30"
                      >

                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-cyan-400"
                        />

                        <span className="text-sm font-medium text-slate-200">
                          {skill}
                        </span>

                      </motion.div>
                    ))}

                  </div>
                </>
              )}

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT AREAS
      ====================================================== */}
      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Development Areas
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                Where my skills come together.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                My strongest work comes from combining application
                development, database engineering and business understanding.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm font-semibold text-cyan-400">
                  01
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Enterprise Applications
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Business applications designed around real operational
                  workflows and database-driven processes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm font-semibold text-cyan-400">
                  02
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  API Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  RESTful backend services for connecting applications,
                  databases and modern frontend clients.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm font-semibold text-cyan-400">
                  03
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Database Systems
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  SQL Server development, stored procedures, data processing,
                  validation and reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm font-semibold text-cyan-400">
                  04
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Full-Stack Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Combining .NET backend technologies with React and modern
                  frontend development.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ====================================================== */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Engineering Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              I focus on the fundamentals that make software reliable.
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-bold text-white">
                Clean & Maintainable
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Structured code, clear responsibilities and maintainable
                application architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-bold text-white">
                Data-Driven
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Careful database design and efficient data access are central
                to the applications I develop.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-bold text-white">
                Problem-Oriented
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I focus on understanding the root problem and delivering a
                solution that works in the actual business environment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-14 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Explore My Work
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            See these technologies in action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore the projects where I have applied these technologies to
            build business applications, database systems and modern software
            solutions.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}