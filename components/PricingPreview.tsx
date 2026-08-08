"use client";

import { motion } from "framer-motion";
import { Gamepad2, Clock3, Car, ArrowRight } from "lucide-react";

const pricing = [
  {
    title: "PS5 Gaming",
    icon: <Gamepad2 size={36} />,
    color: "from-cyan-500 to-blue-600",
    plans: [
      "1 Player - ₹120/hr",
      "2 Players - ₹180/hr",
      "3 Players - ₹240/hr",
      "4 Players - ₹300/hr",
    ],
  },
  {
    title: "Happy Hours",
    icon: <Clock3 size={36} />,
    color: "from-pink-500 to-purple-600",
    plans: [
      "1 PM – 5 PM",
      "1 Player - ₹100/hr",
      "2 Players - ₹150/hr",
      "3 Players - ₹200/hr",
      "4 Players - ₹250/hr",
    ],
    badge: "Best Value",
  },
  {
    title: "Racing Simulator",
    icon: <Car size={36} />,
    color: "from-yellow-500 to-orange-600",
    plans: [
      "20 Minutes - ₹100",
      "30 Minutes - ₹150",
      "60 Minutes - ₹270",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0B1022]"
    >
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Pricing
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Affordable <span className="neon-text">Gaming</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Premium gaming experience at budget-friendly prices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {pricing.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              className="glass relative p-8 overflow-hidden"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}
              >
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mb-6">
                {item.title}
              </h3>

              <ul className="space-y-3 text-gray-300">
                {item.plans.map((plan) => (
                  <li key={plan}>✔ {plan}</li>
                ))}
              </ul>

              <button className="btn-primary mt-8 flex items-center gap-2">
                Book Now
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-16">
          <button className="glass px-8 py-4 hover:border-cyan-400 transition-all">
            View Complete Price List
          </button>
        </div>
      </div>
    </section>
  );
}