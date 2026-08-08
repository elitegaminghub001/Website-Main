"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutArt } from "@/lib/assetData";
import {
  Gamepad2,
  Trophy,
  Coffee,
  Car,
  Star,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="text-cyan-400" size={28} />,
    title: "5 Premium PS5 Setups",
    desc: "Latest PlayStation 5 consoles with comfortable seating.",
  },
  {
    icon: <Car className="text-yellow-400" size={28} />,
    title: "Racing Simulator",
    desc: "Immersive force-feedback racing experience.",
  },
  {
    icon: <Trophy className="text-pink-400" size={28} />,
    title: "Weekly Tournaments",
    desc: "Compete and win exciting cash prizes every week.",
  },
  {
    icon: <Coffee className="text-orange-400" size={28} />,
    title: "Gaming Café",
    desc: "Snacks, coffee and refreshments while you play.",
  },
  {
    icon: <Wifi className="text-green-400" size={28} />,
    title: "High Speed Internet",
    desc: "Fast and stable connection for online gaming.",
  },
  {
    icon: <Star className="text-cyan-400" size={28} />,
    title: "Premium Experience",
    desc: "Modern RGB lighting and luxury gaming environment.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-[#050816]">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutArt}
              alt="Elite Gaming Hub"
              width={700}
              height={700}
              className="rounded-3xl shadow-[0_0_40px_rgba(0,229,255,.25)]"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 uppercase tracking-[4px]">
              About Us
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Ahmedabad's Most
              <span className="neon-text">
                {" "}Premium Gaming Café
              </span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Elite Gaming Hub is designed for gamers who want more than
              just a place to play. Experience premium PS5 gaming,
              thrilling tournaments, an immersive racing simulator,
              comfortable seating and delicious café snacks — all under
              one roof.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-5"
                >
                  {item.icon}

                  <h3 className="font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}