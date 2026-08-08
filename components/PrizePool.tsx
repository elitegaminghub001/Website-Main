"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Crown,
  IndianRupee,
  Sparkles,
} from "lucide-react";

const prizes = [
  {
    position: "1st Place",
    title: "Tournament Champion",
    amount: "₹1,000",
    icon: <Crown size={42} />,
    description: "Take home the winner's cash prize and become the Elite Gaming Hub champion.",
    featured: true,
  },
  {
    position: "2nd Place",
    title: "Runner-Up",
    amount: "₹200 Refund",
    icon: <Medal size={42} />,
    description: "Your ₹200 tournament entry fee will be returned.",
    featured: false,
  },
  {
    position: "3rd Place",
    title: "Third Place",
    amount: "₹200 Refund",
    icon: <Medal size={42} />,
    description: "Your ₹200 tournament entry fee will be returned.",
    featured: false,
  },
];

export default function PrizePool() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#050816]">

      {/* Background Effects */}

      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 text-yellow-400 uppercase tracking-[4px]">
            <Sparkles size={18} />
            Tournament Rewards
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Play for the
            <span className="neon-text"> Prize</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every match matters. Fight your way to the final and compete
            for the tournament championship.
          </p>

        </div>

        {/* Total Prize Highlight */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-14"
        >

          <div className="glass rounded-3xl p-10 text-center border border-yellow-400/20">

            <Trophy
              size={58}
              className="mx-auto text-yellow-400"
            />

            <p className="text-gray-400 mt-5 uppercase tracking-widest">
              Winner's Prize
            </p>

            <div className="flex justify-center items-center gap-2 mt-2">

              <IndianRupee
                size={38}
                className="text-yellow-400"
              />

              <span className="text-6xl font-black text-yellow-400">
                1,000
              </span>

            </div>

            <p className="text-gray-400 mt-4">
              Plus ₹200 entry-fee refunds for 2nd and 3rd place.
            </p>

          </div>

        </motion.div>

        {/* Prize Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {prizes.map((prize, index) => (

            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`glass rounded-3xl p-8 text-center ${
                prize.featured
                  ? "border-2 border-yellow-400/50"
                  : ""
              }`}
            >

              <div
                className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${
                  prize.featured
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-cyan-500/10 text-cyan-400"
                }`}
              >
                {prize.icon}
              </div>

              <p className="text-gray-400 mt-6">
                {prize.position}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {prize.title}
              </h3>

              <div className="text-4xl font-black text-cyan-400 mt-5">
                {prize.amount}
              </div>

              <p className="text-gray-400 mt-5 leading-7">
                {prize.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Entry Fee */}

        <div className="mt-14 text-center">

          <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-6 py-3">

            <IndianRupee
              size={20}
              className="text-cyan-400"
            />

            <span className="text-gray-300">
              Entry Fee:
            </span>

            <strong className="text-cyan-400">
              ₹200 per player
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}