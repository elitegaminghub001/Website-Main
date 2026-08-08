"use client";

import { motion } from "framer-motion";
import { Crown, Star, Gem, Trophy } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "₹799",
    icon: <Star size={34} />,
    color: "from-orange-500 to-yellow-500",
    benefits: [
      "Priority Booking",
      "Member Events",
      "Exclusive Offers",
      "5% Extra Gaming Time",
    ],
  },
  {
    name: "Silver",
    price: "₹1199",
    icon: <Gem size={34} />,
    color: "from-gray-400 to-gray-600",
    benefits: [
      "Priority Booking",
      "Member Events",
      "10% Extra Gaming Time",
      "Free Tournament Entry (Selected)",
    ],
  },
  {
    name: "Gold",
    price: "₹2199",
    icon: <Trophy size={34} />,
    color: "from-yellow-400 to-orange-500",
    benefits: [
      "Priority Booking",
      "15% Extra Gaming Time",
      "Tournament Discounts",
      "Exclusive Rewards",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "₹3499",
    icon: <Crown size={34} />,
    color: "from-cyan-400 to-purple-600",
    benefits: [
      "Unlimited Priority",
      "20% Extra Gaming Time",
      "VIP Events",
      "Special Merchandise Offers",
    ],
  },
];

export default function MembershipPreview() {
  return (
    <section
      id="membership"
      className="py-24 bg-[#050816]"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Membership Plans
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Become an
            <span className="neon-text"> Elite Member</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Save more, play longer and enjoy exclusive benefits with our
            membership plans.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`glass rounded-3xl p-8 relative ${
                plan.featured ? "border-2 border-cyan-400" : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}
              >
                {plan.icon}
              </div>

              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="text-4xl font-black text-cyan-400 mt-4">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.benefits.map((item) => (
                  <li key={item}>✔ {item}</li>
                ))}
              </ul>

              <button className="btn-primary w-full mt-8">
                Join Now
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}