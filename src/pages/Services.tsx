import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers3,
  Monitor,
  Server,
  Settings2,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: ".NET Development",
    shortDescription:
      "Business applications and backend solutions using C#, .NET and ASP.NET.",
    description:
      "I develop structured and maintainable .NET applications based on business requirements, including backend logic, database integration, APIs and enterprise workflows.",
    icon: Braces,
    technologies: ["C#", ".NET", "ASP.NET Core", "ASP.NET MVC"],
    features: [
      "Business Logic Development",
      "ASP.NET Applications",
      "Enterprise Applications",
      "Database Integration",
      "API Integration",
    ],
  },
  {
    id: 2,
    title: "Web API Development",
    shortDescription:
      "RESTful APIs for web applications, mobile applications and system integrations.",
    description:
      "I build backend APIs that connect frontend applications with business logic and databases, with a focus on structured endpoints and maintainable architecture.",
    icon: Server,
    technologies: ["ASP.NET Core", "Web API", "REST", "C#", "JSON"],
    features: [
      "REST API Development",
      "CRUD APIs",
      "Business Logic APIs",
      "Database Integration",
      "API Testing",
    ],
  },
  {
    id: 3,
    title: "SQL Server & Database Development",
    shortDescription:
      "Reliable database solutions, queries, stored procedures and data-processing workflows.",
    description:
      "I work with SQL Server to design queries, stored procedures, data-processing logic and database workflows for business applications and large datasets.",
    icon: Database,
    technologies: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Database Design",
    ],
    features: [
      "Complex SQL Queries",
      "Stored Procedures",
      "Data Processing",
      "Database Debugging",
      "Query Optimization",
    ],
  },
  {
    id: 4,
    title: "ERP & Business Software",
    shortDescription:
      "Custom software solutions for business operations and organizational workflows.",
    description:
      "I develop practical business applications that can bring operational processes into structured and centralized software systems.",
    icon: Layers3,
    technologies: ["C#", ".NET", "SQL Server", "WinForms", "Reports"],
    features: [
      "Accounts Management",
      "Inventory Management",
      "HRMS",
      "Production Workflows",
      "Reporting",
    ],
  },
  {
    id: 5,
    title: "Desktop Application Development",
    shortDescription:
      "Windows desktop applications using .NET, WinForms and database technologies.",
    description:
      "I develop database-driven Windows applications for organizations that require reliable desktop software and integrated business workflows.",
    icon: Monitor,
    technologies: [
      "C#",
      ".NET Framework",
      "WinForms",
      "Telerik",
      "SQL Server",
    ],
    features: [
      "Windows Applications",
      "Database Integration",
      "Business Forms",
      "Reports",
      "Existing Application Maintenance",
    ],
  },
  {
    id: 6,
    title: "React Frontend Development",
    shortDescription:
      "Modern and responsive web interfaces using React, TypeScript and Tailwind CSS.",
    description:
      "I build modern frontend interfaces that connect with APIs and backend services while maintaining responsive layouts and reusable components.",
    icon: Globe,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Responsive UI",
      "Reusable Components",
      "API Integration",
      "Dashboard Interfaces",
      "Role-Based UI",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business requirement, workflow and actual problem that needs to be solved.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the application structure, database requirements, technology stack and implementation approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the application using clean code, structured business logic and reliable database integration.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "Test the solution, identify issues, improve reliability and refine the final workflow.",
  },
];

export default function Services() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <Settings2 size={16} />
              Services
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software solutions built around{" "}
              <span className="text-cyan-400">your requirements.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              From backend systems and databases to modern web interfaces, I
              develop practical software solutions for real-world business
              needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss Your Requirement
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              What I Can Build
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Development services
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Flexible development support for new applications, existing
              systems, database work and modern web projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-950"
                >
                  {/* Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Included
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <span className="text-sm text-slate-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto pt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-500"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Why Work With Me
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Development with a practical mindset.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                I focus on understanding the actual business requirement before
                choosing the implementation approach. The goal is not simply to
                write code, but to deliver software that is useful, maintainable
                and aligned with the workflow.
              </p>

              <Link
                to="/projects"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                See my previous projects
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  title: "Business Understanding",
                  text: "Focus on the workflow and actual requirement before implementation.",
                },
                {
                  title: "Strong Database Skills",
                  text: "Experience with SQL Server, T-SQL and database-driven systems.",
                },
                {
                  title: "Full-Stack Capability",
                  text: "Backend, database and modern frontend development.",
                },
                {
                  title: "Problem Solving",
                  text: "Debugging and improving existing software and data workflows.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Code2 size={19} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              My Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From requirement to working software.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              A straightforward development process focused on clarity,
              implementation and reliable results.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
              >
                <span className="text-4xl font-bold text-cyan-400/20">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Globe size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Whether you need a new application, database solution, API or
              frontend, let's discuss your requirements.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}