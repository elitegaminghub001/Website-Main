"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Instagram,
  Phone,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Pricing", href: "/pricing" },
  { name: "Membership", href: "/membership" },
  { name: "Tournaments", href: "/tournaments" },
];

const usefulLinks = [
  { name: "Booking", href: "/booking" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

const whatsappUrl = "https://wa.me/917567154057";

const instagramUrl =
  "https://www.instagram.com/elite.gaming.hub/";

const mapsUrl =
  "https://maps.app.goo.gl/AQQfPj3vXeEbwBcGA?g_st=ic";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#03050D]">

      <div className="container-custom py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-transparent">
                <Image
                  src="/logo.png"
                  alt="Elite Gaming Hub logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <div className="text-xl font-black uppercase tracking-[0.12em] text-white text-glow" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
                  ELITE
                </div>

                <div className="text-[11px] font-semibold tracking-[0.35em] uppercase bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
                  Gaming Hub
                </div>
              </div>

            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-300">
              Ahmedabad's gaming destination for PS5, PS4,
              racing simulator, multiplayer gaming and
              competitive tournaments.
            </p>

            {/* Social */}

            <div className="mt-6 flex gap-3">

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elite Gaming Hub Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <Instagram size={19} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elite Gaming Hub WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-green-400/30 hover:text-green-400"
              >
                <MessageCircle size={19} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Useful Links */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
              Explore
            </h3>

            <ul className="mt-6 space-y-3">

              {usefulLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
              Visit Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 group"
              >

                <MapPin
                  size={19}
                  className="mt-1 flex-shrink-0 text-cyan-400"
                />

                <span className="text-sm leading-6 text-gray-300 transition group-hover:text-cyan-200">
                  05 Ground Floor,
                  <br />
                  Himalaya Falaknuma,
                  <br />
                  Juhapura, Ahmedabad-380055
                </span>

              </a>

              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-green-300"
              >

                <MessageCircle
                  size={19}
                  className="text-green-400"
                />

                WhatsApp Us

              </a>

              {/* Phone */}

              <a
                href="tel:+917567154057"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-cyan-300"
              >

                <Phone
                  size={19}
                  className="text-cyan-400"
                />

                +91 75671 54057

              </a>

              {/* Hours */}

              <div className="flex gap-3 text-sm text-gray-300">

                <Clock
                  size={19}
                  className="mt-0.5 flex-shrink-0 text-purple-400"
                />

                <span>
                  Contact us for
                  <br />
                  current opening hours
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-7 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Elite Gaming Hub.
            All rights reserved.
          </p>

          <div className="flex gap-5" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>

            <Link
              href="/contact"
              className="uppercase tracking-[0.12em] transition hover:text-cyan-300"
            >
              Contact
            </Link>

            <Link
              href="/location"
              className="uppercase tracking-[0.12em] transition hover:text-cyan-300"
            >
              Find Us
            </Link>

            <Link
              href="/booking"
              className="uppercase tracking-[0.12em] text-cyan-300 transition hover:text-cyan-200"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}