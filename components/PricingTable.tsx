"use client";

import { motion } from "framer-motion";
import { Gamepad2, Car, Clock } from "lucide-react";

const sections = [
  {
    title: "PS5 Gaming",
    icon: <Gamepad2 size={30} />,
    color: "from-cyan-500 to-blue-600",
    prices: [
      ["1 Player", "₹120/hr"],
      ["2 Players", "₹180/hr"],
      ["3 Players", "₹240/hr"],
      ["4 Players", "₹300/hr"],
    ],
  },
  {
    title: "Happy Hours (1 PM - 5 PM)",
    icon: <Clock size={30} />,
    color: "from-pink-500 to-purple-600",
    prices: [
      ["1 Player", "₹100/hr"],
      ["2 Players", "₹150/hr"],
      ["3 Players", "₹200/hr"],
      ["4 Players", "₹250/hr"],
    ],
  },
  {
    title: "PS4 Gaming",
    icon: <Gamepad2 size={30} />,
    color: "from-orange-500 to-red-600",
    prices: [
      ["1 Player", "₹80/hr"],
      ["2 Players", "₹130/hr"],
      ["3 Players", "₹180/hr"],
      ["4 Players", "₹230/hr"],
    ],
  },
  {
    title: "Racing Simulator",
    icon: <Car size={30} />,
    color: "from-yellow-500 to-orange-500",
    prices: [
      ["20 Minutes", "₹100"],
      ["30 Minutes", "₹150"],
      ["1 Hour", "₹270"],
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="pb-24">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-8">

          {sections.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}
              >
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold mb-8">
                {item.title}
              </h2>

              <div className="space-y-4">

                {item.prices.map((price) => (

                  <div
                    key={price[0]}
                    className="flex justify-between border-b border-white/10 pb-3"
                  >
                    <span>{price[0]}</span>

                    <span className="text-cyan-400 font-bold">
                      {price[1]}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}