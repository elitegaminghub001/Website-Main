"use client";

import Image from "next/image";
import { logoArt } from "@/lib/assetData";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  CalendarCheck,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Pricing", href: "/pricing" },
  { name: "Membership", href: "/membership" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050816]/85 backdrop-blur-xl">

      <div className="container-custom">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >

            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-transparent shadow-none transition group-hover:scale-105 sm:h-16 sm:w-16">
              <Image
                src={logoArt}
                alt="Elite Gaming Hub logo"
                fill
                priority
                sizes="(max-width: 640px) 56px, 64px"
                className="object-contain"
              />
            </div>

            <div className="leading-tight">

              <div className="text-lg font-black tracking-wide bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                ELITE
              </div>

              <div className="text-[11px] font-semibold tracking-[3px] bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                GAMING HUB
              </div>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-1">

            {navItems.map((item) => {

              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition ${
                    active
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}

          </nav>

          {/* Desktop CTA */}

          <Link
            href="/booking"
            className="hidden lg:inline-flex btn-primary items-center gap-2"
          >
            <CalendarCheck size={17} />
            Book Now
          </Link>

          {/* Mobile Button */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
          >

            {mobileOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}

          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/5 py-5">

            <nav className="flex flex-col gap-2">

              {navItems.map((item) => {

                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/booking"
                onClick={closeMenu}
                className="btn-primary mt-3 flex items-center justify-center gap-2"
              >
                <CalendarCheck size={18} />
                Book Now
              </Link>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}
