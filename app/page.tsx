"use client";

import { useState } from "react";

const facilities = [
  {
    number: "01",
    title: "Modern Classrooms",
    description:
      "Comfortable, well-equipped learning spaces designed to inspire curiosity and creativity.",
    icon: "🏫",
  },
  {
    number: "02",
    title: "Science Laboratories",
    description:
      "Hands-on learning experiences that encourage students to explore, experiment, and discover.",
    icon: "🔬",
  },
  {
    number: "03",
    title: "Sports & Recreation",
    description:
      "Opportunities to develop teamwork, confidence, discipline, and a healthy lifestyle.",
    icon: "⚽",
  },
];

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-xl text-amber-400">
              ✦
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-wide text-blue-950">
                YOUR SCHOOL
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Learn · Grow · Succeed
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="/" className="text-sm font-semibold text-blue-950">
              Home
            </a>
            <a
              href="/about"
              className="text-sm text-slate-600 transition hover:text-blue-950"
            >
              About Us
            </a>
            <a
              href="/academics"
              className="text-sm text-slate-600 transition hover:text-blue-950"
            >
              Academics
            </a>
            <a
              href="/facilities"
              className="text-sm text-slate-600 transition hover:text-blue-950"
            >
              Facilities
            </a>
            <a
              href="/gallery"
              className="text-sm text-slate-600 transition hover:text-blue-950"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-sm text-slate-600 transition hover:text-blue-950"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={() => {
              setSubmitted(false);
              setEnquiryOpen(true);
            }}
            className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-blue-950 transition hover:bg-amber-300 sm:px-6"
          >
            Enquire Now ↗
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-blue-950">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/25" />

        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Shaping bright futures since [YEAR]
            </div>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Where young minds
              <br />
              <span className="text-amber-400">discover their</span>
              <br />
              true potential.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              A place where knowledge meets character, curiosity becomes
              discovery, and every child is encouraged to build a brighter
              tomorrow.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEnquiryOpen(true);
                }}
                className="rounded-lg bg-amber-400 px-7 py-4 font-bold text-blue-950 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Begin Your Journey ↗
              </button>

              <a
                href="/about"
                className="rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Discover Our School
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/20 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">Excellence</p>
                <p className="mt-2 text-sm text-slate-300">
                  In every endeavour
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Character</p>
                <p className="mt-2 text-sm text-slate-300">
                  Beyond academics
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Opportunity</p>
                <p className="mt-2 text-sm text-slate-300">
                  For every learner
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-amber-400 lg:block" />
      </section>

      {/* SCHOOL INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Welcome to our school
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            More than a school.
            <br />
            A foundation for life.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            We believe education is about nurturing the whole child. Our
            approach brings together academic excellence, strong values,
            creativity, and opportunities that help every student grow with
            confidence.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Through a supportive environment and dedicated educators, we
            encourage students to think independently, respect others, and
            prepare for the opportunities of tomorrow.
          </p>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-3 font-bold text-blue-950 transition hover:gap-5"
          >
            Discover our story <span className="text-amber-600">→</span>
          </a>
        </div>

        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-2xl bg-amber-400/30" />

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
            alt="Students learning together in a classroom"
            className="relative h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />

          <div className="absolute -bottom-4 right-5 rounded-xl bg-white px-6 py-4 shadow-xl sm:right-8">
            <p className="font-bold text-blue-950">
              Every child matters.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Every dream deserves a chance.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Our campus
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
                Spaces that inspire growth.
              </h2>
            </div>

            <a
              href="/facilities"
              className="font-bold text-blue-950 transition hover:text-amber-600"
            >
              Explore all facilities →
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {facilities.map((facility) => (
              <article
                key={facility.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{facility.icon}</span>
                  <span className="text-sm font-bold text-amber-600">
                    {facility.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-blue-950">
                  {facility.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {facility.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-amber-400 transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS BANNER */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-blue-950 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Admissions
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Every great journey starts with a first step.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Discover our school and learn more about the admission process
              for your child.
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setEnquiryOpen(true);
            }}
            className="shrink-0 rounded-lg bg-amber-400 px-7 py-4 font-bold text-blue-950 transition hover:bg-amber-300"
          >
            Enquire About Admissions ↗
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-bold tracking-wide">YOUR SCHOOL</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Inspiring young minds through education, values, and
              opportunities for a brighter future.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a href="/about" className="hover:text-amber-400">
                About Us
              </a>
              <a href="/academics" className="hover:text-amber-400">
                Academics
              </a>
              <a href="/facilities" className="hover:text-amber-400">
                Facilities
              </a>
              <a href="/gallery" className="hover:text-amber-400">
                Gallery
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Admissions</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a href="/admissions" className="hover:text-amber-400">
                Admission Information
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEnquiryOpen(true);
                }}
                className="w-fit text-left hover:text-amber-400"
              >
                Enquire Now
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Add your school's address
              <br />
              Phone: Add phone number
              <br />
              Email: Add email address
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Your School. All rights reserved.
        </div>
      </footer>

      {/* ENQUIRY POPUP */}
      {enquiryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setEnquiryOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                  Admissions enquiry
                </p>

                <h2
                  id="enquiry-title"
                  className="mt-3 text-3xl font-bold text-blue-950"
                >
                  {submitted ? "Thank you!" : "Let's get in touch."}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {submitted
                    ? "Your demo enquiry has been completed successfully."
                    : "Tell us a little about your child's admission."}
                </p>
              </div>

              <button
                onClick={() => setEnquiryOpen(false)}
                aria-label="Close enquiry form"
                className="rounded-full px-3 py-1 text-2xl text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="mt-8">
                <div className="rounded-xl bg-green-50 p-5 text-green-800">
                  Your form passed the frontend demo. No information has been
                  sent or stored.
                </div>

                <button
                  onClick={() => setEnquiryOpen(false)}
                  className="mt-6 w-full rounded-lg bg-blue-950 py-4 font-bold text-white hover:bg-blue-900"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                className="mt-7 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label
                    htmlFor="parentName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Parent's name *
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    placeholder="Enter parent's full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-950 focus:ring-2 focus:ring-blue-950/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="studentName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Student's name *
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="Enter student's name"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-950 focus:ring-2 focus:ring-blue-950/10"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                      required
                      pattern="[0-9+\s()-]{8,20}"
                      title="Enter a valid phone number"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-blue-950"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="classApplying"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Class *
                    </label>
                    <select
                      id="classApplying"
                      name="classApplying"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 outline-none focus:border-blue-950"
                    >
                      <option value="" disabled>
                        Select class
                      </option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-400 py-4 font-bold text-blue-950 transition hover:bg-amber-300"
                >
                  Submit Enquiry ↗
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  Demo form only. Your information will not be transmitted.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}