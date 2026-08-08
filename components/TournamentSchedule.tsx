"use client";

import { motion } from "framer-motion";
import {
  Users,
  Gamepad2,
  Trophy,
  ArrowRight,
} from "lucide-react";

const groups = [
  {
    name: "Group A",
    players: ["Player 1", "Player 2", "Player 3"],
    matches: [
      "Player 1 vs Player 2",
      "Player 2 vs Player 3",
      "Player 1 vs Player 3",
    ],
  },
  {
    name: "Group B",
    players: ["Player 4", "Player 5", "Player 6"],
    matches: [
      "Player 4 vs Player 5",
      "Player 5 vs Player 6",
      "Player 4 vs Player 6",
    ],
  },
  {
    name: "Group C",
    players: ["Player 7", "Player 8", "Player 9"],
    matches: [
      "Player 7 vs Player 8",
      "Player 8 vs Player 9",
      "Player 7 vs Player 9",
    ],
  },
  {
    name: "Group D",
    players: ["Player 10", "Player 11", "Player 12"],
    matches: [
      "Player 10 vs Player 11",
      "Player 11 vs Player 12",
      "Player 10 vs Player 12",
    ],
  },
];

export default function TournamentSchedule() {
  return (
    <section
      id="schedule"
      className="py-24 bg-[#070B1B]"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Tournament Format
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Match
            <span className="neon-text"> Schedule</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            12 players are divided into 4 groups of 3.
            Every player plays against the other two players in their group.
            The group winner advances to the semifinals.
          </p>

        </div>

        {/* Tournament Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

          <Stat
            icon={<Users />}
            value="12"
            label="Players"
          />

          <Stat
            icon={<Gamepad2 />}
            value="4"
            label="PS5 Setups"
          />

          <Stat
            icon={<Trophy />}
            value="₹1,000"
            label="Winner Prize"
          />

          <Stat
            icon={<ArrowRight />}
            value="4"
            label="Semifinalists"
          />

        </div>

        {/* Groups */}

        <div className="grid lg:grid-cols-2 gap-8">

          {groups.map((group, index) => (

            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >

              <div className="flex justify-between items-center mb-8">

                <h3 className="text-3xl font-bold">
                  {group.name}
                </h3>

                <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                  3 Players
                </span>

              </div>

              {/* Players */}

              <div className="grid grid-cols-3 gap-3 mb-8">

                {group.players.map((player) => (

                  <div
                    key={player}
                    className="rounded-xl bg-white/5 p-4 text-center"
                  >
                    <Users
                      size={20}
                      className="mx-auto text-cyan-400 mb-2"
                    />

                    <span className="text-sm">
                      {player}
                    </span>

                  </div>

                ))}

              </div>

              {/* Matches */}

              <h4 className="text-lg font-bold mb-4">
                Group Matches
              </h4>

              <div className="space-y-3">

                {group.matches.map((match, matchIndex) => (

                  <div
                    key={match}
                    className="flex items-center justify-between rounded-xl bg-black/20 border border-white/5 p-4"
                  >

                    <span className="text-gray-300">
                      {match}
                    </span>

                    <span className="text-xs text-cyan-400">
                      Match {matchIndex + 1}
                    </span>

                  </div>

                ))}

              </div>

              <div className="mt-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-4 text-center">

                <span className="text-yellow-300 font-semibold">
                  Group Winner → Semifinal
                </span>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Semifinals */}

        <div className="mt-16">

          <div className="text-center mb-10">

            <h3 className="text-4xl font-bold">
              🏆 Semifinals
            </h3>

            <p className="text-gray-400 mt-3">
              The 4 group winners advance to the semifinals.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <MatchCard
              title="Semifinal 1"
              player1="Winner Group A"
              player2="Winner Group B"
            />

            <MatchCard
              title="Semifinal 2"
              player1="Winner Group C"
              player2="Winner Group D"
            />

          </div>

        </div>

        {/* Final */}

        <div className="mt-16 max-w-2xl mx-auto">

          <MatchCard
            title="🏆 Grand Final"
            player1="Winner Semifinal 1"
            player2="Winner Semifinal 2"
            final
          />

        </div>

        {/* Prize */}

        <div className="mt-16 glass rounded-3xl p-8 text-center">

          <Trophy
            className="mx-auto text-yellow-400"
            size={48}
          />

          <h3 className="text-3xl font-bold mt-5">
            Prize Distribution
          </h3>

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <Prize
              position="🥇 1st Place"
              amount="₹1,000"
            />

            <Prize
              position="🥈 2nd Place"
              amount="₹200 Refund"
            />

            <Prize
              position="🥉 3rd Place"
              amount="₹200 Refund"
            />

          </div>

          <p className="text-gray-400 mt-6 text-sm">
            Entry fee: ₹200 per player.
          </p>

        </div>

      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 text-center">

      <div className="text-cyan-400 flex justify-center mb-3">
        {icon}
      </div>

      <div className="text-3xl font-black">
        {value}
      </div>

      <div className="text-gray-400 text-sm mt-1">
        {label}
      </div>

    </div>
  );
}

function MatchCard({
  title,
  player1,
  player2,
  final = false,
}: {
  title: string;
  player1: string;
  player2: string;
  final?: boolean;
}) {
  return (
    <div
      className={`glass rounded-3xl p-8 ${
        final ? "border-2 border-yellow-400/50" : ""
      }`}
    >

      <h4 className="text-xl font-bold text-center mb-6">
        {title}
      </h4>

      <div className="flex items-center justify-between gap-4">

        <div className="flex-1 rounded-xl bg-white/5 p-4 text-center">
          {player1}
        </div>

        <span className="text-cyan-400 font-bold">
          VS
        </span>

        <div className="flex-1 rounded-xl bg-white/5 p-4 text-center">
          {player2}
        </div>

      </div>

    </div>
  );
}

function Prize({
  position,
  amount,
}: {
  position: string;
  amount: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6">

      <div className="text-xl font-bold">
        {position}
      </div>

      <div className="text-3xl font-black text-cyan-400 mt-2">
        {amount}
      </div>

    </div>
  );
}