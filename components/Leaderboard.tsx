"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Crown,
  TrendingUp,
} from "lucide-react";

const players = [
  {
    rank: 1,
    name: "Player 1",
    played: 3,
    wins: 3,
    losses: 0,
    points: 9,
  },
  {
    rank: 2,
    name: "Player 2",
    played: 3,
    wins: 2,
    losses: 1,
    points: 6,
  },
  {
    rank: 3,
    name: "Player 3",
    played: 3,
    wins: 2,
    losses: 1,
    points: 6,
  },
  {
    rank: 4,
    name: "Player 4",
    played: 3,
    wins: 1,
    losses: 2,
    points: 3,
  },
  {
    rank: 5,
    name: "Player 5",
    played: 3,
    wins: 1,
    losses: 2,
    points: 3,
  },
  {
    rank: 6,
    name: "Player 6",
    played: 3,
    wins: 0,
    losses: 3,
    points: 0,
  },
];

export default function Leaderboard() {
  return (
    <section className="py-24 bg-[#070B1B]">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 text-yellow-400 uppercase tracking-[4px]">
            <TrendingUp size={18} />
            Tournament Rankings
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Live
            <span className="neon-text"> Leaderboard</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Follow the standings and see who is fighting their way
            toward the championship.
          </p>

        </div>

        {/* Top 3 */}

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">

          {players.slice(0, 3).map((player, index) => (

            <motion.div
              key={player.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className={`glass rounded-3xl p-8 text-center ${
                index === 0
                  ? "border-2 border-yellow-400/50"
                  : ""
              }`}
            >

              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">

                {index === 0 ? (
                  <Crown
                    size={32}
                    className="text-yellow-400"
                  />
                ) : index === 1 ? (
                  <Medal
                    size={32}
                    className="text-gray-300"
                  />
                ) : (
                  <Medal
                    size={32}
                    className="text-orange-400"
                  />
                )}

              </div>

              <p className="text-gray-400 mt-5">
                #{player.rank}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {player.name}
              </h3>

              <p className="text-4xl font-black text-cyan-400 mt-4">
                {player.points}
              </p>

              <p className="text-gray-500">
                Points
              </p>

            </motion.div>

          ))}

        </div>

        {/* Full Table */}

        <div className="glass rounded-3xl overflow-hidden">

          {/* Desktop Header */}

          <div className="hidden md:grid grid-cols-6 gap-4 p-5 bg-white/5 text-gray-400 text-sm uppercase tracking-wider">

            <span>Rank</span>
            <span>Player</span>
            <span>Played</span>
            <span>Wins</span>
            <span>Losses</span>
            <span className="text-right">
              Points
            </span>

          </div>

          {players.map((player, index) => (

            <motion.div
              key={player.name}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{
                once: true,
              }}
              className="grid md:grid-cols-6 gap-4 p-5 border-t border-white/5 items-center"
            >

              <div className="flex items-center gap-3">

                <span className="font-bold">
                  #{player.rank}
                </span>

                {player.rank <= 3 && (
                  <Trophy
                    size={16}
                    className="text-yellow-400"
                  />
                )}

              </div>

              <div className="font-semibold">
                {player.name}
              </div>

              <div>
                <span className="md:hidden text-gray-500">
                  Played:{" "}
                </span>
                {player.played}
              </div>

              <div className="text-green-400">
                <span className="md:hidden text-gray-500">
                  Wins:{" "}
                </span>
                {player.wins}
              </div>

              <div className="text-red-400">
                <span className="md:hidden text-gray-500">
                  Losses:{" "}
                </span>
                {player.losses}
              </div>

              <div className="md:text-right text-cyan-400 font-black">
                <span className="md:hidden text-gray-500">
                  Points:{" "}
                </span>
                {player.points}
              </div>

            </motion.div>

          ))}

        </div>

        {/* Scoring System */}

        <div className="mt-10 text-center">

          <p className="text-gray-400">
            Win ={" "}
            <span className="text-green-400 font-bold">
              3 Points
            </span>
            {" • "}
            Loss ={" "}
            <span className="text-red-400 font-bold">
              0 Points
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}