import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
              <MessageSquare size={16} />
              Get In Touch
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-cyan-400">useful.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Have a software idea, development requirement or existing system
              that needs improvement? Let&apos;s discuss it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="border-y border-slate-800/70 bg-slate-900/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Let&apos;s talk about your project.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Whether you need a new application, database solution, API,
              desktop software or frontend development, you can reach out using
              the details below.
            </p>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-400/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Mail size={21} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Email
                </p>

                <p className="mt-1 truncate text-sm font-medium text-slate-300">
                  {portfolioData.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-3 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-slate-300">
                  {portfolioData.location}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Connect With Me
              </p>

              <div className="mt-4 flex gap-3">
                {/* <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Github size={20} />
                </a>

                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Linkedin size={20} />
                </a> */}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

                <span className="text-sm font-semibold text-emerald-300">
                  Open to opportunities
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Available for software development opportunities,
                collaborations and selected freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 sm:p-8"
          >
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Send a Message
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Tell me about your requirement
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill out the form and share a brief description of what you
                need.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Message form submitted
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    The form is currently in demo mode. Connect an email
                    service or backend API to receive real messages.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="dotnet">.NET Development</option>
                  <option value="api">Web API Development</option>
                  <option value="database">
                    SQL Server / Database Development
                  </option>
                  <option value="erp">ERP / Business Software</option>
                  <option value="desktop">
                    Desktop Application
                  </option>
                  <option value="react">React Frontend</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me briefly about your project or requirement..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Prefer to explore first?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Take a look at my projects and technical skills before getting in
              touch.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                View Projects
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/skills"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Skills
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}