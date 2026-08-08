"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  CalendarDays,
  Users,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

export default function TournamentBanner() {
  return (
    <section
      id="tournament"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#090C18] via-[#111827] to-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="glass overflow-hidden rounded-3xl border border-cyan-500/20"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-10 lg:p-14">

              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">

                <Trophy size={18} />

                Weekly Tournament

              </span>

              <h2 className="mt-6 text-5xl font-black">

                TEKKEN 8

                <span className="block neon-text mt-2">

                  CHAMPIONSHIP

                </span>

              </h2>

              <p className="mt-6 text-gray-300 leading-8">

                Test your skills against the best players in Ahmedabad.
                Every participant gets a minimum of 2 matches.

              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <IndianRupee className="text-cyan-400" />

                  <span>Entry Fee : ₹200</span>

                </div>

                <div className="flex items-center gap-3">

                  <Trophy className="text-yellow-400" />

                  <span>Winner : ₹1000 Cash Prize</span>

                </div>

                <div className="flex items-center gap-3">

                  <Users className="text-pink-400" />

                  <span>Runner-Up : Entry Fee Returned</span>

                </div>

                <div className="flex items-center gap-3">

                  <Users className="text-orange-400" />

                  <span>3rd Place : Entry Fee Returned</span>

                </div>

              </div>

              <button className="btn-primary mt-10 flex items-center gap-2">

                Register Now

                <ArrowRight size={18} />

              </button>

            </div>

            {/* RIGHT */}

            <div className="bg-black/20 p-10 lg:p-14">

              <h3 className="text-3xl font-bold mb-8">

                Tournament Details

              </h3>

              <div className="grid gap-5">

                <div className="glass p-5 flex justify-between">
                  <span>Players</span>
                  <span className="text-cyan-400 font-bold">12</span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>Format</span>
                  <span className="text-cyan-400 font-bold">
                    4 Groups of 3
                  </span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>Group Stage</span>
                  <span className="text-cyan-400 font-bold">
                    Best of 3
                  </span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>Semi Finals</span>
                  <span className="text-cyan-400 font-bold">
                    Best of 5
                  </span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>Grand Final</span>
                  <span className="text-cyan-400 font-bold">
                    Best of 5
                  </span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>Guaranteed Matches</span>
                  <span className="text-green-400 font-bold">
                    Minimum 2
                  </span>
                </div>

                <div className="glass p-5 flex justify-between">
                  <span>
                    <CalendarDays className="inline mr-2" size={18} />
                    Tournament Day
                  </span>

                  <span className="text-yellow-400 font-bold">
                    Every Sunday
                  </span>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}