"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Gamepad2,
} from "lucide-react";

export default function LocationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1022] to-[#111827]">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="container-custom relative z-10 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-5 py-2 text-cyan-400">

            <MapPin size={18} />

            Find Elite Gaming Hub

          </span>

          <h1 className="text-6xl lg:text-7xl font-black mt-8">

            Come
            <span className="neon-text"> Game With Us</span>

          </h1>

          <p className="text-gray-300 text-lg leading-8 mt-7 max-w-2xl mx-auto">
            Find Elite Gaming Hub in Ahmedabad and experience
            console gaming, racing simulation and a complete
            gaming atmosphere under one roof.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://maps.app.goo.gl/AQQfPj3vXeEbwBcGA?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Navigation size={19} />
              Get Directions
            </a>

            <a
              href="/booking"
              className="glass rounded-xl px-6 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition"
            >
              <Gamepad2 size={19} />
              Book a Session
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}