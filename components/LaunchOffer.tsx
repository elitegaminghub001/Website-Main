"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Gift,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function LaunchOffer() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#050816] via-[#0B1022] to-[#111827]">

      {/* Background Effects */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] overflow-hidden border border-cyan-500/20"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-10 lg:p-14">

              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-2 text-red-400">

                <Flame size={18} />

                Limited Time Launch Offer

              </div>

              <h2 className="text-5xl font-black mt-8 leading-tight">

                Become One of the

                <span className="block neon-text">

                  First 20 Members

                </span>

              </h2>

              <p className="text-gray-300 mt-6 leading-8">

                Celebrate the launch of Elite Gaming Hub by becoming one of
                our first 20 members and enjoy exclusive member privileges,
                priority access and exciting launch benefits.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <Gift className="text-yellow-400" />

                  <span>Exclusive Launch Benefits</span>

                </div>

                <div className="flex items-center gap-4">

                  <Users className="text-cyan-400" />

                  <span>Only First 20 Members Eligible</span>

                </div>

                <div className="flex items-center gap-4">

                  <Sparkles className="text-pink-400" />

                  <span>Priority Access & Member Rewards</span>

                </div>

              </div>

              <Link
                href="#join"
                className="btn-primary inline-flex items-center gap-2 mt-10"
              >
                Join Today

                <ArrowRight size={18} />

              </Link>

            </div>

            {/* Right */}

            <div className="flex items-center justify-center bg-black/20 p-10">

              <div className="text-center">

                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_40px_rgba(0,229,255,.4)]">

                  <span className="text-6xl font-black">
                    20
                  </span>

                </div>

                <h3 className="text-4xl font-bold mt-8">
                  Members Only
                </h3>

                <p className="text-gray-400 mt-4 max-w-sm">

                  Once all 20 launch memberships are claimed,
                  this special offer will end.

                </p>

                <div className="mt-10 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-5">

                  <h4 className="text-yellow-300 font-bold text-xl">
                    Don't Miss Out!
                  </h4>

                  <p className="text-gray-300 mt-2">

                    Secure your membership today and become part of the
                    Elite Gaming Hub community.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}