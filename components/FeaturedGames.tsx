"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { featuredGameArt } from "@/lib/assetData";

const games = [
  {
    title: "Tekken 8",
    image: featuredGameArt.tekken8,
    genre: "Fighting",
  },
  {
    title: "EA Sports FC 26",
    image: featuredGameArt.fc26,
    genre: "Football",
  },
  {
    title: "GTA VI",
    image: featuredGameArt.gta6,
    genre: "Open World",
  },
  {
    title: "Spider-Man 2",
    image: featuredGameArt.spiderman2,
    genre: "Action",
  },
  {
    title: "Gran Turismo 7",
    image: featuredGameArt.gt7,
    genre: "Racing",
  },
  {
    title: "God of War Ragnarök",
    image: featuredGameArt.gow,
    genre: "Adventure",
  },
];

export default function FeaturedGames() {
  return (
    <section className="py-24 bg-[#070B1B]">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[5px]">
            Featured Games
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Play the Latest
            <span className="neon-text"> AAA Titles</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Enjoy the newest PlayStation games with premium gaming
            setups, comfortable seating and immersive gameplay.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {games.map((game, index) => (

            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="glass overflow-hidden group cursor-pointer"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

              </div>

              <div className="p-6">

                <span className="text-cyan-400 text-sm uppercase">

                  {game.genre}

                </span>

                <h3 className="text-2xl font-bold mt-2">

                  {game.title}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}