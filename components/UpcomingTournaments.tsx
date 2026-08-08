"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Trophy,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { featuredGameArt } from "@/lib/assetData";

const tournaments = [
  {
    game: "Tekken 8",
    date: "Sunday • 7:00 PM",
    entry: "₹200",
    prize: "₹1,000 Winner",
    slots: "12 Players",
    status: "Open",
    image: featuredGameArt.tekken8,
    color: "from-red-500 to-orange-500",
  },
  {
    game: "EA Sports FC 26",
    date: "Coming Soon",
    entry: "₹200",
    prize: "Cash Prize",
    slots: "16 Players",
    status: "Coming Soon",
    image: featuredGameArt.fc26,
    color: "from-green-500 to-emerald-600",
  },
  {
    game: "Cricket 26",
    date: "Coming Soon",
    entry: "₹200",
    prize: "Cash Prize",
    slots: "16 Players",
    status: "Coming Soon",
    image: featuredGameArt.cricket26,
    color: "from-blue-500 to-cyan-500",
  },
  {
    game: "Gran Turismo 7",
    date: "Coming Soon",
    entry: "₹150",
    prize: "Champion Trophy",
    slots: "20 Players",
    status: "Coming Soon",
    image: featuredGameArt.gt7,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function UpcomingTournaments() {
  return (
    <section className="py-24 bg-[#050816]">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-cyan-400">
            Upcoming Events
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Upcoming
            <span className="neon-text"> Tournaments</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Join exciting competitions every week, compete with the best
            players and win amazing prizes.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {tournaments.map((item, index) => (

            <motion.div
              key={item.game}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden"
            >

              {/* Banner */}

              <div
                className={`h-52 bg-gradient-to-r ${item.color} flex items-center justify-center`}
              >
                <h3 className="text-4xl font-black">
                  {item.game}
                </h3>
              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      item.status === "Open"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>

                  <span className="text-cyan-400 font-bold">
                    {item.entry}
                  </span>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-cyan-400" />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-cyan-400" />
                    <span>{item.slots}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Trophy size={20} className="text-yellow-400" />
                    <span>{item.prize}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-pink-400" />
                    <span>Registration Closing Soon</span>
                  </div>

                </div>

                <Link
                  href="#register"
                  className="btn-primary mt-8 w-full flex items-center justify-center gap-2"
                >
                  Register Now
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}