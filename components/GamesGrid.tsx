"use client";

import { useMemo, useState } from "react";
import { Search, Gamepad2, Trophy, CalendarCheck } from "lucide-react";

type Category =
  | "All"
  | "Fighting"
  | "Sports"
  | "Racing"
  | "Action"
  | "Adventure";

type Game = {
  name: string;
  category: Exclude<Category, "All">;
  platform: "PS5" | "PS4";
  description: string;
};

const games: Game[] = [
  {
    name: "Tekken 8",
    category: "Fighting",
    platform: "PS5",
    description:
      "Take on your friends in intense one-on-one fighting battles.",
  },
  {
    name: "EA Sports FC",
    category: "Sports",
    platform: "PS5",
    description:
      "Build your squad and compete in exciting football matches.",
  },
  {
    name: "Cricket",
    category: "Sports",
    platform: "PS5",
    description:
      "Challenge your friends to a competitive cricket match.",
  },
  {
    name: "GTA V",
    category: "Action",
    platform: "PS5",
    description:
      "Explore an open world packed with action and adventure.",
  },
  {
    name: "Spider-Man 2",
    category: "Adventure",
    platform: "PS5",
    description:
      "Experience an action-packed superhero adventure.",
  },
  {
    name: "Forza Horizon",
    category: "Racing",
    platform: "PS5",
    description:
      "Race through an exciting open-world driving experience.",
  },
  {
    name: "Mortal Kombat",
    category: "Fighting",
    platform: "PS5",
    description:
      "Battle your friends in competitive fighting matches.",
  },
  {
    name: "WWE",
    category: "Sports",
    platform: "PS5",
    description:
      "Step into the ring and compete with your favourite wrestlers.",
  },
  {
    name: "Need for Speed",
    category: "Racing",
    platform: "PS4",
    description:
      "Push your driving skills to the limit in high-speed races.",
  },
  {
    name: "Call of Duty",
    category: "Action",
    platform: "PS5",
    description:
      "Jump into fast-paced competitive action with your friends.",
  },
];

const categories: Category[] = [
  "All",
  "Fighting",
  "Sports",
  "Racing",
  "Action",
  "Adventure",
];

export default function GamesGrid() {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesCategory =
        category === "All" || game.category === category;

      const matchesSearch =
        game.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        game.category
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const bookGame = (game: Game) => {
    const message = `
🎮 *ELITE GAMING HUB — GAME BOOKING*

I want to book:

🎮 Game: ${game.name}
🕹️ Platform: ${game.platform}
📂 Category: ${game.category}

Please let me know the available slots.
`;

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        {/* Search */}

        <div className="max-w-2xl mx-auto relative mb-10">

          <Search
            size={21}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
          />

          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl bg-[#111827] border border-white/5 p-5 pl-14 outline-none focus:border-cyan-400 transition"
          />

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-3 mb-14">

          {categories.map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`px-5 py-3 rounded-xl border transition ${
                category === item
                  ? "border-cyan-400 bg-cyan-500/10 text-cyan-400"
                  : "border-white/5 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Game Count */}

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Available Games
          </h2>

          <span className="text-gray-500 text-sm">
            {filteredGames.length} Games
          </span>

        </div>

        {/* Games */}

        {filteredGames.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredGames.map((game) => (

              <div
                key={`${game.name}-${game.platform}`}
                className="group glass rounded-3xl overflow-hidden hover:border-cyan-400/30 transition duration-300"
              >

                {/* Image Placeholder */}

                <div className="relative h-48 bg-gradient-to-br from-[#111827] to-[#080B17] flex items-center justify-center overflow-hidden">

                  <Gamepad2
                    size={70}
                    className="text-cyan-400/30 group-hover:text-cyan-400/60 group-hover:scale-110 transition duration-300"
                  />

                  <div className="absolute top-4 left-4">

                    <span className="rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-cyan-400">
                      {game.platform}
                    </span>

                  </div>

                  <div className="absolute top-4 right-4">

                    <span className="rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-gray-300">
                      {game.category}
                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {game.name}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-3 min-h-[72px]">
                    {game.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => bookGame(game)}
                    className="btn-primary w-full mt-5 flex items-center justify-center gap-2"
                  >

                    <CalendarCheck size={18} />

                    Book Now

                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <Gamepad2
              size={50}
              className="mx-auto text-gray-600"
            />

            <h3 className="text-2xl font-bold mt-5">
              No Games Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>

          </div>

        )}

        {/* Tournament CTA */}

        <div className="mt-16 rounded-3xl border border-purple-400/20 bg-purple-500/5 p-8 md:p-10 text-center">

          <Trophy
            size={35}
            className="mx-auto text-yellow-400"
          />

          <h3 className="text-3xl font-bold mt-5">
            Ready for Competition?
          </h3>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Watch out for upcoming tournaments at Elite Gaming
            Hub and compete against other players.
          </p>

          <a
            href="/booking"
            className="btn-primary inline-flex mt-7"
          >
            Book a Gaming Session
          </a>

        </div>

      </div>
    </section>
  );
}