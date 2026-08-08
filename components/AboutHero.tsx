"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Gauge,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1022] to-[#111827]">

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
            <Gamepad2 size={18} />
            About Elite Gaming Hub
          </span>

          <h1 className="text-6xl lg:text-7xl font-black mt-8">
            More Than
            <span className="neon-text"> Just Gaming</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mt-7 max-w-2xl mx-auto">
            A gaming destination built for players who want to
            compete, have fun and create unforgettable gaming
            moments with friends.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
              <Gamepad2
                size={20}
                className="text-cyan-400"
              />
              Console Gaming
            </div>

            <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
              <Gauge
                size={20}
                className="text-purple-400"
              />
              Racing Simulator
            </div>

            <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
              <Trophy
                size={20}
                className="text-yellow-400"
              />
              Tournaments
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}