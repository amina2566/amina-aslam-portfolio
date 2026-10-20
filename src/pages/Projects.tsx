import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    "All",
    "Business Software",
    "Financial Software",
    "Healthcare Software",
    "Data Processing",
    "Computer Vision",
    "Web Application",
  ];

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.category === activeFilter;

      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.category.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(searchText)
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <FolderKanban size={16} />
              Selected Projects
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software built for{" "}
              <span className="text-cyan-400">real-world problems.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A selection of business applications, financial systems,
              healthcare software, data-processing solutions, computer vision
              applications and modern web projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="border-y border-slate-800/70 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  {/* Project Header */}
                  {/* <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <FolderKanban size={23} />
                      </div>

                      <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="relative mt-6 text-xl font-bold leading-7 text-white">
                      {project.title}
                    </h2>
                  </div> */}



{/* Project Header */}
<div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950">
  {project.images?.length ? (
    <img
      src={project.images[0]}
      alt={`${project.title} preview`}
      loading="lazy"
      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  ) : null}

  <div className="relative p-6">
    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

    <div className="relative flex items-start justify-between gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        <FolderKanban size={23} />
      </div>

      <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-400">
        {project.category}
      </span>
    </div>

    <h2 className="relative mt-6 text-xl font-bold leading-7 text-white">
      {project.title}
    </h2>
  </div>
</div>




                  {/* Project Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Key Features
                      </p>

                      <div className="space-y-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-cyan-400"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Link */}
                    <div className="mt-auto pt-7">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                      >
                        View Project
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-16 text-center">
              <Search
                size={36}
                className="mx-auto mb-4 text-slate-600"
              />

              <h2 className="text-xl font-semibold text-white">
                No projects found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Try another project category or search term.
              </p>

              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                }}
                className="mt-6 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Philosophy */}
      <section className="border-t border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                How I build
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                More than just writing code.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                Good software should solve the actual business problem behind
                the requirement. My approach combines application development,
                database design, business logic and practical user workflows.
              </p>
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
                  title: "Business Focused",
                  text: "Solutions designed around real operational workflows.",
                },
                {
                  title: "Database Driven",
                  text: "Structured SQL Server development with reliable data processing.",
                },
                {
                  title: "Maintainable",
                  text: "Clean architecture and reusable development practices.",
                },
                {
                  title: "Scalable",
                  text: "Systems designed with future improvements in mind.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Let's build something useful
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have a software idea or business requirement?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Let's discuss the problem, define the right solution and turn it
              into practical software.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start a Conversation
              <ExternalLink size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}