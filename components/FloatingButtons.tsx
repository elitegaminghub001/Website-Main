"use client";

import { MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "917567154057";

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      {/* Desktop / Tablet */}

      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">

        {/* WhatsApp */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Elite Gaming Hub on WhatsApp"
          className="group flex items-center gap-3 rounded-full border border-green-400/20 bg-[#07140F]/95 px-4 py-3 text-green-400 shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-green-500/10"
        >
          <MessageCircle size={21} />

          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[150px] group-hover:opacity-100">
            WhatsApp Us
          </span>
        </a>

        {/* Booking */}

        <Link
          href="/booking"
          aria-label="Book a gaming session"
          className="group flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#07121A]/95 px-4 py-3 text-cyan-400 shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-cyan-500/10"
        >
          <CalendarCheck size={21} />

          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[130px] group-hover:opacity-100">
            Book Now
          </span>
        </Link>

      </div>

      {/* Mobile */}

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 sm:hidden">

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-green-400/20 bg-[#07140F]/95 py-3.5 text-sm font-bold text-green-400 shadow-xl backdrop-blur-xl"
        >
          <MessageCircle size={19} />
          WhatsApp
        </a>

        <Link
          href="/booking"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-sm font-bold text-black shadow-xl"
        >
          <CalendarCheck size={19} />
          Book Now
        </Link>

      </div>
    </>
  );
}