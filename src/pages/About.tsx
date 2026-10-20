import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const strengths = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Experience developing desktop applications, web applications and backend services using modern software development practices.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Strong experience with SQL Server, T-SQL, stored procedures, data processing and database-driven business applications.",
  },
  {
    icon: Layers3,
    title: "Business Applications",
    description:
      "Comfortable translating real business workflows into practical, maintainable and user-friendly software solutions.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Focused on understanding the root cause of technical problems and developing reliable solutions rather than temporary fixes.",
  },
];

const principles = [
  "Understand the business requirement before writing code.",
  "Keep application architecture organized and maintainable.",
  "Write readable, reusable and reliable code.",
  "Design databases carefully and optimize data access.",
  "Validate solutions with real-world scenarios.",
  "Continuously improve technical and problem-solving skills.",
];

export default function About() {
  return (
    <main className="overflow-hidden bg-slate-950 pt-20">

      {/* =====================================================
          PAGE HERO
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
              About Me
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Software Developer focused on
              <span className="text-cyan-400"> practical solutions.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              I am a Software Developer with professional experience in
              developing business applications, database-driven systems,
              backend services and modern web solutions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          ABOUT CONTENT
      ====================================================== */}
      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              {/* Profile visual */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950">

                <div className="absolute h-52 w-52 rounded-full border border-cyan-400/20" />

                <div className="absolute h-40 w-40 rounded-full border border-cyan-400/20" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-4xl font-bold text-cyan-300 shadow-2xl shadow-cyan-500/10">
                  A
                </div>

              </div>

              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Software Developer
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {portfolioData.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Building reliable software solutions with .NET, SQL Server
                  and modern web technologies.
                </p>

                <div className="mt-6 border-t border-slate-800 pt-6">

                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness
                      size={18}
                      className="text-cyan-400"
                    />

                    <div>
                      <p className="text-xs text-slate-500">
                        Professional Focus
                      </p>

                      <p className="text-sm font-medium text-slate-200">
                        Software Engineering
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <Database
                      size={18}
                      className="text-cyan-400"
                    />

                    <div>
                      <p className="text-xs text-slate-500">
                        Core Stack
                      </p>

                      <p className="text-sm font-medium text-slate-200">
                        .NET & SQL Server
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              My Background
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Turning requirements into reliable software.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">

              <p>
                I am a Software Developer with a Bachelor&apos;s degree in
                Computer Science and professional experience working with
                business applications and database-driven systems.
              </p>

              <p>
                My core development experience is centered around C#,
                .NET, ASP.NET Core, SQL Server, T-SQL and REST APIs. I have
                also worked with desktop application technologies such as
                WinForms, Telerik controls and reporting solutions including
                Crystal Reports and RDLC.
              </p>

              <p>
                Alongside backend and database development, I have been
                expanding my experience in modern frontend development using
                React, TypeScript, Vite and Tailwind CSS.
              </p>

              <p>
                I enjoy working on software where technical development and
                business requirements come together. Whether it is an ERP
                workflow, financial system, hospital management application,
                reporting solution or data-processing system, my goal is to
                build software that is useful, maintainable and reliable.
              </p>

            </div>

            {/* Highlight boxes */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-2xl font-bold text-white">.NET</p>
                <p className="mt-1 text-sm text-slate-500">
                  Backend & Application Development
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-2xl font-bold text-white">SQL</p>
                <p className="mt-1 text-sm text-slate-500">
                  Database & Data Processing
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-2xl font-bold text-white">React</p>
                <p className="mt-1 text-sm text-slate-500">
                  Modern Frontend Development
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-2xl font-bold text-white">ERP</p>
                <p className="mt-1 text-sm text-slate-500">
                  Business Application Development
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Academic Background
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              My academic background in Computer Science provided the
              foundation for my software engineering career and technical
              problem-solving approach.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-7 sm:p-9"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <GraduationCap size={28} />
              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Bachelor&apos;s Degree
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  BS Computer Science
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Academic foundation in software engineering, programming,
                  databases, data structures, algorithms, web development and
                  computer systems.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Software Engineering",
                    "Programming",
                    "Database Systems",
                    "Data Structures",
                    "Algorithms",
                    "Web Development",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          STRENGTHS
      ====================================================== */}
      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              What I Bring
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Technical strengths
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              A combination of software development, database expertise and
              practical understanding of business applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT PHILOSOPHY
      ====================================================== */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <Lightbulb size={27} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Development Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
              Good software starts with understanding the problem.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              I believe software development is not only about writing code.
              The real value comes from understanding the requirement,
              designing the right solution and building something that people
              can actually use and maintain.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 sm:p-9">

            <div className="space-y-5">

              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <p className="text-sm leading-7 text-slate-300">
                    {principle}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH ME
      ====================================================== */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why Work With Me
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              More than just writing code.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              I bring a practical approach to software development, with
              attention to business requirements, data, maintainability and
              long-term reliability.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold text-white">
                Business Understanding
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I focus on understanding how a system will actually be used,
                not just how it should look technically.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold text-white">
                Reliable Solutions
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I aim for solutions that are structured, testable,
                maintainable and suitable for real-world use.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold text-white">
                Continuous Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I continuously explore modern technologies while strengthening
                the fundamentals that make software reliable.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-14 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Explore My Work
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            See what I&apos;ve built.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore my projects, technologies and experience across business
            applications, financial systems, healthcare software, databases
            and modern web development.
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