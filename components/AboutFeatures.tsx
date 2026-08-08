"use client";

import { motion } from "framer-motion";
import {
  MonitorPlay,
  Gamepad2,
  Car,
  Trophy,
  Users,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "PS5 Gaming",
    description:
      "Experience popular games on PS5 with friends and other players.",
  },
  {
    icon: Gamepad2,
    title: "PS4 Gaming",
    description:
      "Enjoy affordable multiplayer gaming with our PS4 setup.",
  },
  {
    icon: Car,
    title: "Racing Simulator",
    description:
      "Take the wheel and experience an immersive racing setup.",
  },
  {
    icon: Trophy,
    title: "Gaming Tournaments",
    description:
      "Join competitive tournaments and test your skills.",
  },
  {
    icon: Users,
    title: "Multiplayer Experience",
    description:
      "Bring your friends and enjoy competitive local multiplayer sessions.",
  },
  {
    icon: Clock,
    title: "Flexible Sessions",
    description:
      "Choose the gaming setup and session duration that works for you.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-24 bg-[#070B1B]">
      <div className="container-custom">

        <div className="text-center mb-14">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Built For
            <span className="neon-text"> Gamers</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-3">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        <div className="text-center mt-12">

          <a
            href="/booking"
            className="btn-primary inline-flex"
          >
            Book Your Gaming Session
          </a>

        </div>

      </div>
    </section>
  );
}