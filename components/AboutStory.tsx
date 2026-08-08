"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
              Our Story
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Welcome to
              <span className="neon-text">
                {" "}Elite Gaming Hub
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              Elite Gaming Hub is a console gaming destination
              created for gamers in Ahmedabad. Whether you want
              to challenge your friends, relax with a few matches
              or compete in tournaments, our goal is to give you
              a great gaming experience.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              Our setup combines PS5 and PS4 gaming with a racing
              simulator, creating a place where casual players
              and competitive gamers can enjoy gaming together.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              We're building a community around gaming, events,
              tournaments and shared experiences — not just a
              place to sit and play.
            </p>

          </motion.div>

          {/* Feature Cards */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            <div className="glass rounded-3xl p-7">
              <Gamepad2
                size={32}
                className="text-cyan-400"
              />
              <h3 className="text-xl font-bold mt-5">
                Console Gaming
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                Enjoy multiplayer gaming with friends.
              </p>
            </div>

            <div className="glass rounded-3xl p-7">
              <Users
                size={32}
                className="text-purple-400"
              />
              <h3 className="text-xl font-bold mt-5">
                Community
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                Meet fellow gamers and make new friends.
              </p>
            </div>

            <div className="glass rounded-3xl p-7">
              <Trophy
                size={32}
                className="text-yellow-400"
              />
              <h3 className="text-xl font-bold mt-5">
                Tournaments
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                Compete in gaming events and tournaments.
              </p>
            </div>

            <div className="glass rounded-3xl p-7">
              <Sparkles
                size={32}
                className="text-green-400"
              />
              <h3 className="text-xl font-bold mt-5">
                Great Atmosphere
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                A dedicated space built around gaming.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}