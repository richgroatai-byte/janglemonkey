import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — JangleMonkey",
};

export default function Terms() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-neutral-400 mb-10">Last updated: May 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Acceptance
            </h2>
            <p>
              By using JangleMonkey.com or any associated apps (including
              Milestone), you agree to these terms. If you do not agree, please
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Use of services
            </h2>
            <p>You agree to use our apps only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Upload content that violates any applicable law</li>
              <li>Upload content that infringes on others&apos; intellectual property</li>
              <li>Attempt to disrupt or harm our services or infrastructure</li>
              <li>Use our services to harass or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              User content
            </h2>
            <p>
              You retain ownership of content you upload. By uploading content,
              you grant JangleMonkey a limited license to store and display that
              content for the purpose of providing the service.
            </p>
            <p className="mt-3">
              You are responsible for any content you upload. We reserve the
              right to remove content that violates these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Availability
            </h2>
            <p>
              We provide our apps on an &quot;as is&quot; basis. We do not guarantee
              uninterrupted availability and may modify or discontinue services
              at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, JangleMonkey is not liable
              for any indirect, incidental, or consequential damages arising
              from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. Continued use of our
              services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Contact
            </h2>
            <p>
              Questions?{" "}
              <a
                href="mailto:thejanglemonkey@gmail.com"
                className="text-rose-500 hover:text-rose-600"
              >
                thejanglemonkey@gmail.com
              </a>
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
