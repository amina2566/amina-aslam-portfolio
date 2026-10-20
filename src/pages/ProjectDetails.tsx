import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = portfolioData.projects.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-400">
            <Target size={30} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const projectContent: Record<
    number,
    {
      overview: string;
      problem: string;
      solution: string;
      role: string;
      challenges: string[];
      outcome: string;
    }
  > = {
    1: {
      overview:
        "An enterprise-oriented ERP solution designed to bring multiple organizational operations into a connected software environment. The system focuses on structured workflows, database-driven operations and reporting.",
      problem:
        "Organizations often manage accounts, inventory, HR, production and other operational processes separately. This can create duplicated work, inconsistent data and difficulty in obtaining reliable reports.",
      solution:
        "The system provides integrated modules with centralized database management, business rules, transaction processing and reporting. Different modules can work together while maintaining structured data and user workflows.",
      role:
        "Software development, database development, business logic implementation, reporting and integration of application modules.",
      challenges: [
        "Managing multiple business modules within one application",
        "Designing reliable database relationships",
        "Maintaining consistent business rules",
        "Generating useful operational reports",
      ],
      outcome:
        "A structured business application architecture capable of supporting multiple operational areas through a centralized software solution.",
    },

    2: {
      overview:
        "A database-driven financial management system focused on financial transactions, account processing, reporting, reconciliation and business workflows.",
      problem:
        "Financial systems require accurate transaction processing and reliable reporting. Manual processes can make reconciliation, validation and financial reporting more difficult.",
      solution:
        "The system uses SQL Server, T-SQL, stored procedures and application-level business logic to process financial data and generate structured reports.",
      role:
        "Backend development, SQL Server development, stored procedure development, transaction processing and troubleshooting of financial data workflows.",
      challenges: [
        "Processing large volumes of financial data",
        "Maintaining transaction accuracy",
        "Building complex SQL queries and stored procedures",
        "Supporting reconciliation and reporting workflows",
      ],
      outcome:
        "A database-centric financial application designed to support transaction processing, financial reporting and data validation.",
    },

    3: {
      overview:
        "A desktop-based Hospital Management System designed to organize patient registration, doctors, departments, laboratory tests, schedules and reporting.",
      problem:
        "Healthcare organizations need organized access to patient information, doctor schedules and operational records. Disconnected manual processes can make information difficult to manage.",
      solution:
        "The system provides dedicated modules for patients, doctors, departments, laboratory tests and schedules while maintaining centralized database records.",
      role:
        "Desktop application development, database integration, UI development, business logic and reporting.",
      challenges: [
        "Designing practical healthcare workflows",
        "Maintaining patient and doctor records",
        "Connecting multiple modules with shared data",
        "Creating useful reports for operational use",
      ],
      outcome:
        "A structured hospital management application that brings core hospital workflows into one database-driven system.",
    },

    4: {
      overview:
        "A SQL Server based ATL Status Management System designed to process taxpayer records, maintain status history and update customer records according to the latest available tax status.",
      problem:
        "Large taxpayer datasets require efficient processing, duplicate handling and reliable status history. Manual processing becomes difficult when records must be updated regularly.",
      solution:
        "The system uses SQL Server stored procedures, staging tables, bulk data processing and historical status logic to process ATL records and update related customer information.",
      role:
        "SQL development, stored procedure development, data processing, duplicate handling, debugging and database automation.",
      challenges: [
        "Processing large datasets efficiently",
        "Handling duplicate taxpayer records",
        "Maintaining historical ATL status",
        "Determining the latest applicable status",
        "Validating imported data",
      ],
      outcome:
        "A structured data-processing workflow for managing ATL records and applying the latest status information to related customer data.",
    },

    5: {
      overview:
        "A real-time face recognition application developed using computer vision and machine learning techniques. The system detects faces, creates embeddings and compares them against registered users.",
      problem:
        "Traditional identity verification methods can require manual interaction. A computer vision based system can automate identity detection by comparing captured facial features with registered data.",
      solution:
        "The application combines face detection, face embeddings, similarity comparison and database storage. ArcFace and ONNX Runtime are used for embedding generation while computer vision libraries handle image processing.",
      role:
        "Application development, computer vision integration, face embedding workflow, database integration and recognition logic.",
      challenges: [
        "Reliable face detection",
        "Generating consistent face embeddings",
        "Comparing embeddings using similarity scores",
        "Handling multiple registered users",
        "Improving recognition accuracy",
      ],
      outcome:
        "A real-time recognition workflow capable of detecting and matching registered users using facial feature embeddings.",
    },

    6: {
      overview:
        "Lumina is a modern web-based library management application designed to manage books, members and borrowing transactions with role-based access.",
      problem:
        "Library operations require organized management of books, users and borrowing activity. A web-based system can make these operations accessible through a centralized application.",
      solution:
        "The application uses React and TypeScript for the frontend with Firebase Authentication and Firestore for authentication and database operations. Role-based access separates member and administrative functionality.",
      role:
        "Frontend development, authentication integration, Firestore integration, role-based UI and dashboard development.",
      challenges: [
        "Implementing authentication",
        "Managing role-based access",
        "Connecting React with Firestore",
        "Managing books and borrowing transactions",
        "Designing responsive dashboard interfaces",
      ],
      outcome:
        "A modern library management web application with authentication, role-based functionality and centralized book and transaction management.",
    },
  };

  const content = projectContent[project.id];

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-32 pb-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              {project.category}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {project.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </div>
      </section>




{/* Project Screenshots Gallery */}
{project.images?.length ? (
  <section className="border-b border-slate-800/70 bg-slate-900/20 py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Project Gallery
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Screenshots & Interface
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Explore the application's interface and key screens.
          Select any image to view it in a larger format.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((image, index) => (
          <motion.button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left transition hover:border-cyan-400/50"
            aria-label={`View screenshot ${index + 1} of ${project.title}`}
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="flex items-center justify-between gap-3 p-4">
              <span className="text-sm font-medium text-slate-300">
                Screenshot {index + 1}
              </span>

              <span className="text-xs font-semibold text-cyan-400">
                View Image ↗
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </section>
) : null}

{/* Selected Image Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    onClick={() => setSelectedImage(null)}
    role="dialog"
    aria-modal="true"
    aria-label="Screenshot preview"
  >
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="absolute right-5 top-5 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
      aria-label="Close image preview"
    >
      Close ✕
    </button>

    <img
      src={selectedImage}
      alt={`${project.title} enlarged screenshot`}
      onClick={(event) => event.stopPropagation()}
      className="max-h-[85vh] max-w-full rounded-xl border border-slate-700 object-contain shadow-2xl"
    />
  </div>
)}







      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Layers3 size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Project Overview
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Understanding the project
                  </h2>
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400">
                {content.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Project Category
              </p>

              <p className="mt-3 text-xl font-semibold text-white">
                {project.category}
              </p>

              <div className="my-6 h-px bg-slate-800" />

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Technology Stack
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-950 px-3 py-2 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                <Target size={22} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-orange-300">
                The Problem
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                What needed to be solved?
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                {content.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Lightbulb size={22} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                The Solution
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                How the system solves it
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                {content.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Core Functionality
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Key features
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Important capabilities implemented as part of the project.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-400/30"
              >
                <CheckCircle2
                  size={20}
                  className="text-cyan-400"
                />

                <h3 className="mt-4 font-semibold text-white">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Code2 size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                My Role
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Development responsibilities
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                {content.role}
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                <Wrench size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-purple-300">
                Challenges
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Technical challenges
              </h2>

              <div className="mt-6 space-y-4">
                {content.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                    <p className="leading-7 text-slate-400">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Database size={26} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Outcome
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What the project delivers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              {content.outcome}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-slate-800/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft size={17} />
            All Projects
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss a Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}