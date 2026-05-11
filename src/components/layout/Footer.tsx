import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1622]">
      <div className="container-custom py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-3xl font-semibold">
              J Case Consulting
            </h3>

            <p className="max-w-lg leading-relaxed text-white/70">
              Faith-driven coaching for high-performance living centered
              around leadership, discipline, structure, and legacy.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-6 text-lg gold-text">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-white/70 [&>a]:transition [&>a:hover]:text-[#C89B3C]">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/books">Books</Link>
              <Link href="/apply">Apply</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-lg gold-text">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-white/70 [&>a]:transition [&>a:hover]:text-[#C89B3C]">
              <p>support@jcaseconsultingtx.com</p>

              <a
                href="https://www.instagram.com/justincaseconsulting/"
                target="_blank"
              >
                Instagram
              </a>

              <a
                href="https://x.com/justincasebiz"
                target="_blank"
              >
                X
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61589222990663"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/40">
          © 2026 J Case Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}