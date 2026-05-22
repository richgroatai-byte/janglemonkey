import Link from "next/link";

const apps = [
  {
    name: "Milestone",
    tagline: "Collect photos from everyone at your event — free",
    description:
      "Share a link before your event. Guests upload photos directly. No app download, no login, no friction.",
    url: "https://milestone-app.janglemonkey.com",
    status: "live" as const,
    category: "Event tech",
  },
  {
    name: "Coming soon",
    tagline: "Another simple tool, in the works",
    description: "Something new is being built. Check back soon.",
    url: null,
    status: "soon" as const,
    category: null,
  },
  {
    name: "Coming soon",
    tagline: "More to come",
    description: "JangleMonkey is just getting started.",
    url: null,
    status: "soon" as const,
    category: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-neutral-900 tracking-tight text-lg">
            JangleMonkey
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="#apps"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Apps
            </a>
            <a
              href="#about"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm bg-rose-500 text-white px-4 py-1.5 rounded-full hover:bg-rose-600 transition-colors font-semibold"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-sm font-semibold text-rose-500 uppercase tracking-widest mb-4">
            Simple tools for real moments
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight text-balance mb-6">
            Web apps that do{" "}
            <span className="text-rose-500">one thing well</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto mb-10 text-balance">
            JangleMonkey builds focused, free-to-use tools that spread on their
            own. No clutter. No bloat. Just something useful.
          </p>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors text-sm"
          >
            See our apps
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </section>

        {/* Apps */}
        <section id="apps" className="max-w-5xl mx-auto px-6 py-20 border-t border-black/5">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
            Our apps
          </h2>
          <p className="text-neutral-500 mb-10">
            Each one built to solve a real problem, fast.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app, i) => (
              <AppCard key={i} app={app} />
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="max-w-5xl mx-auto px-6 py-20 border-t border-black/5"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              About
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              JangleMonkey is a one-person software company. I build simple,
              focused web apps — the kind that solve a specific problem, work
              without friction, and spread because people actually want to share
              them.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The first app is Milestone — a free photo collection tool for
              events. Guests upload photos by following a link. No downloads, no
              accounts, no friction.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              More apps are in the works. The goal is always the same: find the
              simplest version of something useful and build it really well.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="max-w-5xl mx-auto px-6 py-20 border-t border-black/5"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              Get in touch
            </h2>
            <p className="text-neutral-500 mb-6">
              Questions, feedback, or just want to say hello?
            </p>
            <a
              href="mailto:thejanglemonkey@gmail.com"
              className="inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              thejanglemonkey@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© 2026 JangleMonkey.com</p>
          <div className="flex items-center gap-6">
            <Link
              href="https://milestone-app.janglemonkey.com"
              className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Milestone
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

type App = (typeof apps)[number];

function AppCard({ app }: { app: App }) {
  const isLive = app.status === "live";

  const cardContent = (
    <div
      className={`bg-white rounded-2xl ring-1 ring-black/5 shadow-sm p-6 h-full flex flex-col transition-shadow ${
        isLive ? "hover:shadow-md" : "opacity-60"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`font-semibold text-lg ${
            isLive ? "text-neutral-900" : "text-neutral-400"
          }`}
        >
          {app.name}
        </h3>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            isLive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-neutral-100 text-neutral-400"
          }`}
        >
          {isLive ? "Live" : "Soon"}
        </span>
      </div>

      {app.category && (
        <p className="text-xs text-rose-500 font-semibold uppercase tracking-widest mb-2">
          {app.category}
        </p>
      )}

      <p
        className={`text-sm font-semibold mb-2 ${
          isLive ? "text-neutral-700" : "text-neutral-400"
        }`}
      >
        {app.tagline}
      </p>
      <p className="text-sm text-neutral-400 leading-relaxed flex-1">
        {app.description}
      </p>

      {isLive && (
        <div className="mt-5 pt-4 border-t border-black/5">
          <span className="text-sm font-semibold text-rose-500">
            Try it free →
          </span>
        </div>
      )}
    </div>
  );

  if (isLive && app.url) {
    return (
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
