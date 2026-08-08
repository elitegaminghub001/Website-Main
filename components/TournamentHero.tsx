"use client";

import { motion } from "framer-motion";
import { Trophy, Gamepad2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TournamentHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1022] to-[#111827]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
            <Trophy size={18} />
            Weekly Tournaments
          </span>

          <h1 className="text-6xl lg:text-7xl font-black mt-8 leading-tight">
            Compete.
            <span className="block neon-text">
              Win.
            </span>
            Repeat.
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
            Participate in exciting tournaments every week.
            Show your skills, climb the leaderboard and win
            amazing cash prizes.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="#register"
              className="btn-primary flex items-center gap-2"
            >
              Register Now
              <ArrowRight size={18}/>
            </Link>

            <Link
              href="#schedule"
              className="glass px-8 py-4 rounded-xl"
            >
              View Schedule
            </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
        >

          <div className="glass rounded-3xl p-10">

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/5 p-6 text-center">

                <Gamepad2
                  className="mx-auto text-cyan-400"
                  size={42}
                />

                <h3 className="text-3xl font-black mt-4">
                  Tekken 8
                </h3>

              </div>

              <div className="rounded-2xl bg-white/5 p-6 text-center">

                <Users
                  className="mx-auto text-purple-400"
                  size={42}
                />

                <h3 className="text-3xl font-black mt-4">
                  12 Players
                </h3>

              </div>

              <div className="rounded-2xl bg-white/5 p-6 text-center">

                <Trophy
                  className="mx-auto text-yellow-400"
                  size={42}
                />

                <h3 className="text-3xl font-black mt-4">
                  ₹1000
                </h3>

                <p className="text-gray-400">
                  Winner
                </p>

              </div>

              <div className="rounded-2xl bg-white/5 p-6 text-center">

                <span className="text-5xl font-black text-cyan-400">
                  ₹200
                </span>

                <p className="text-gray-400 mt-2">
                  Entry Fee
                </p>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-center">

              <h3 className="text-2xl font-bold">
                Every Sunday
              </h3>

              <p className="text-gray-300 mt-2">
                Weekly competitive tournaments at Elite Gaming Hub.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}