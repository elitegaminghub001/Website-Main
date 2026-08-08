"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Gamepad2, Clock } from "lucide-react";
import { heroArt } from "@/lib/assetData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-flex items-center px-4 py-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-violet-200 text-sm shadow-[0_0_18px_rgba(168,85,247,0.15)]">

            🎮 Ahmedabad's Premium Gaming Café

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Play.
            <br />

            <span className="neon-text">

              Compete.

            </span>

            <br />

            Connect.

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">

            Experience next-generation console gaming with
            PS5, PS4, Racing Simulator, weekly tournaments,
            memberships and delicious café snacks.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="btn-primary flex items-center gap-2">

              Book Now

              <ArrowRight size={18} />

            </button>

            <button className="glass px-7 py-4 hover:border-cyan-400 transition">

              View Pricing

            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0, scale:.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="relative"
        >

          <img
            src={heroArt}
            alt="Elite Gaming Hub"
            width={700}
            height={700}
            className="rounded-3xl shadow-[0_0_40px_rgba(0,229,255,.25)]"
          />

          <motion.div
            animate={{ y:[0,-15,0] }}
            transition={{ repeat:Infinity, duration:4 }}
            className="absolute -left-10 top-10 glass p-5"
          >
            <Gamepad2 className="text-cyan-400 mb-2" />
            <h3 className="font-bold">5 PS5 Setups</h3>
          </motion.div>

          <motion.div
            animate={{ y:[0,15,0] }}
            transition={{ repeat:Infinity, duration:5 }}
            className="absolute -right-8 bottom-8 glass p-5"
          >
            <Trophy className="text-yellow-400 mb-2" />
            <h3 className="font-bold">Weekly Tournaments</h3>
          </motion.div>

          <motion.div
            animate={{ x:[0,10,0] }}
            transition={{ repeat:Infinity, duration:3 }}
            className="absolute left-1/2 -bottom-8 -translate-x-1/2 glass p-5"
          >
            <Clock className="text-pink-400 mb-2" />
            <h3 className="font-bold">
              Happy Hours
              <br />
              1 PM – 5 PM
            </h3>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Stats */}

      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 backdrop-blur-md">

        <div className="container-custom py-8 grid grid-cols-2 md:grid-cols-4 text-center">

          <div>
            <h2 className="text-3xl font-bold neon-text">5</h2>
            <p className="text-gray-400">PS5 Setups</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold neon-text">1</h2>
            <p className="text-gray-400">Racing Simulator</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold neon-text">12+</h2>
            <p className="text-gray-400">AAA Games</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold neon-text">7 Days</h2>
            <p className="text-gray-400">Open Every Week</p>
          </div>

        </div>

      </div>

    </section>
  );
}