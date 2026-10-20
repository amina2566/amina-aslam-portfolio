import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Professional Software Development",
    period: "Current / Recent Experience",
    type: "Software Development",
    description:
      "Worked on business applications, database-driven systems and enterprise software solutions involving backend development, SQL Server and application workflows.",
    responsibilities: [
      "Developing applications using C# and .NET",
      "Building and maintaining SQL Server databases",
      "Creating stored procedures and complex T-SQL queries",
      "Developing and maintaining business workflows",
      "Working with APIs and database integrations",
      "Troubleshooting application and database issues",
      "Developing reports and data-processing solutions",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET",
      "SQL Server",
      "T-SQL",
      "REST APIs",
    ],
  },
  {
    id: 2,
    role: "Junior Software Developer",
    company: "Enterprise Application Development",
    period: "Previous Experience",
    type: "Desktop & Enterprise Software",
    description:
      "Worked on database-driven desktop and enterprise applications with a focus on business requirements, application development, reporting and database operations.",
    responsibilities: [
      "Developing Windows-based business applications",
      "Working with WinForms and Telerik controls",
      "Implementing application business logic",
      "Working with SQL Server and stored procedures",
      "Developing Crystal Reports and RDLC reports",
      "Debugging and resolving application issues",
      "Supporting existing enterprise applications",
    ],
    technologies: [
      "C#",
      ".NET Framework",
      "WinForms",
      "Telerik",
      "SQL Server",
      "Crystal Reports",
      "RDLC",
    ],
  },
];

const technicalAreas = [
  {
    title: "Backend Development",
    description:
      "Building business logic, APIs and application services using C#, .NET and ASP.NET.",
    icon: Code2,
  },
  {
    title: "Database Development",
    description:
      "Designing queries, stored procedures and data-processing workflows with SQL Server.",
    icon: Database,
  },
  {
    title: "Enterprise Applications",
    description:
      "Developing practical software solutions for business and operational workflows.",
    icon: Layers3,
  },
];

export default function Experience() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <BriefcaseBusiness size={16} />
              Professional Experience
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Experience that combines{" "}
              <span className="text-cyan-400">
                development and problem solving.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              My development experience covers .NET applications, SQL Server,
              enterprise software, database processing, reporting and modern
              web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-slate-800 sm:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-400 sm:flex">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition duration-300 hover:border-cyan-400/30 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                          {experience.type}
                        </span>

                        <h2 className="mt-2 text-2xl font-bold text-white">
                          {experience.role}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {experience.company}
                        </p>
                      </div>

                      <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-400">
                        <CalendarDays size={14} />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Key Responsibilities
                      </h3>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <div
                              key={responsibility}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-1 shrink-0 text-cyan-400"
                              />

                              <span className="text-sm leading-6 text-slate-400">
                                {responsibility}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Technologies
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Technical Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Areas where I add value
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              My experience is centered around building practical software,
              reliable database solutions and maintainable business systems.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {technicalAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Development Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            I focus on solving the problem behind the requirement.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Whether the requirement involves a business application, a
            database process, an API or a web interface, I focus on
            understanding the workflow first and then implementing a solution
            that is reliable, maintainable and practical.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore My Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}