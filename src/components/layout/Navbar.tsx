"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Books", href: "/books" },
  { name: "Apply", href: "/apply" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0F1E2E]/80 backdrop-blur-xl">
      <div className="container-custom flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide"
        >
          <span className="text-white">J Case</span>{" "}
          <span className="gold-text">Consulting</span>
        </Link>

        {/* DESKTOP */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition duration-300 ${
                  active
                    ? "text-[#C89B3C]"
                    : "text-white/75 hover:text-[#C89B3C]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/apply"
            className="rounded-full bg-[#C89B3C] px-5 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
     {open && (
  <div className="border-t border-white/10 bg-[#0F1E2E] lg:hidden">
    <div className="container-custom flex flex-col gap-2 py-6">
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-xl px-4 py-3 transition ${
              active
                ? "bg-[#C89B3C]/10 text-[#C89B3C]"
                : "text-white/80 hover:bg-white/5"
            }`}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  </div>
)}
    </nav>
  );
}