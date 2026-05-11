import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Globe,
  Play,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "Reach out directly for coaching inquiries, partnerships, or additional information.",
    link: "mailto:support@jcaseconsultingtx.com",
    label: "support@jcaseconsultingtx.com",
  },
  {
    icon: MessageCircle,
    title: "Instagram",
    text: "Follow leadership insights, coaching content, discipline, and growth-focused resources.",
    link: "https://www.instagram.com/justincaseconsulting/",
    label: "@justincaseconsulting",
  },
  {
    icon: Play,
    title: "TikTok",
    text: "Watch leadership, discipline, mindset, and growth-focused content from J Case Consulting.",
    link: "https://www.tiktok.com/@justincaseconsulting",
    label: "@justincaseconsulting",
  },
  {
    icon: Globe,
    title: "Facebook",
    text: "Connect with the J Case Consulting community and leadership-focused content.",
    link: "https://www.facebook.com/profile.php?id=61589222990663",
    label: "Visit Facebook",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#0F1E2E] pt-32 text-white">
      {/* HERO */}
      <section className="pb-24 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Contact
            </p>

            <h1 className="mb-8 text-5xl leading-tight md:text-7xl">
              Let’s Start The Conversation
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              Whether you’re seeking coaching, accountability,
              leadership, or direction, J Case Consulting is built
              to help men create structure, discipline, and
              long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                className="group flex h-full flex-col rounded-[32px] border border-white/10 bg-[#13263A] p-10 transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/40"  
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C89B3C]/10">
                    <Icon
                      size={30}
                      className="text-[#C89B3C]"
                    />
                  </div>

                  <h2 className="mb-4 text-3xl">
                    {card.title}
                  </h2>

                  <p className="mb-8 flex-1 leading-relaxed text-white/75">
                    {card.text}
                  </p>

                  <a
                    href={card.link}
                    target="_blank"
                    className="gold-text break-words text-base leading-relaxed transition duration-300 hover:opacity-80"
                  >
                    {card.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="rounded-[40px] border border-[#C89B3C]/20 bg-gradient-to-br from-[#13263A] to-[#0B1622] p-12 text-center md:p-20">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Ready To Grow?
            </p>

            <h2 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight md:text-7xl">
              Apply For Coaching
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
              Begin building leadership, structure, discipline,
              accountability, and long-term momentum.
            </p>

            <Link
              href="/apply"
              className="rounded-full bg-[#C89B3C] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}