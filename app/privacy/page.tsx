import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JangleMonkey",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="font-semibold text-neutral-900 tracking-tight text-lg hover:text-neutral-600 transition-colors"
          >
            JangleMonkey
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-400 mb-10">Last updated: May 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Overview
            </h2>
            <p>
              JangleMonkey (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates JangleMonkey.com and
              its associated apps, including Milestone. This policy describes
              how we collect and use information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Information we collect
            </h2>
            <p>
              We collect information you provide directly — for example, photos
              uploaded through Milestone, or messages sent via email. We do not
              require account creation on the marketing site.
            </p>
            <p className="mt-3">
              We may collect standard usage data such as page views and referrer
              information through analytics tools, used only to understand how
              our products are being used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              How we use your information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide and improve our apps</li>
              <li>Respond to questions or support requests</li>
              <li>Understand usage patterns to inform product decisions</li>
            </ul>
            <p className="mt-3">
              We do not sell personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Data storage
            </h2>
            <p>
              Data is stored using third-party cloud infrastructure. We take
              reasonable steps to protect data but cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:thejanglemonkey@gmail.com"
                className="text-rose-500 hover:text-rose-600"
              >
                thejanglemonkey@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-black/5 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-sm text-neutral-400">© 2026 JangleMonkey.com</p>
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
