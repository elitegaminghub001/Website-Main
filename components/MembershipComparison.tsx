"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "₹799",
    color: "from-orange-500 to-yellow-500",
    benefits: {
      booking: true,
      extraTime: "5%",
      tournaments: false,
      vip: false,
      events: true,
    },
  },
  {
    name: "Silver",
    price: "₹1199",
    color: "from-gray-400 to-gray-600",
    benefits: {
      booking: true,
      extraTime: "10%",
      tournaments: true,
      vip: false,
      events: true,
    },
  },
  {
    name: "Gold",
    price: "₹2199",
    color: "from-yellow-400 to-orange-500",
    benefits: {
      booking: true,
      extraTime: "15%",
      tournaments: true,
      vip: true,
      events: true,
    },
    featured: true,
  },
  {
    name: "Platinum",
    price: "₹3499",
    color: "from-cyan-400 to-purple-600",
    benefits: {
      booking: true,
      extraTime: "20%",
      tournaments: true,
      vip: true,
      events: true,
    },
  },
];

export default function MembershipComparison() {
  return (
    <section className="py-24 bg-[#070B1B]">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Membership Comparison
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Choose Your
            <span className="neon-text"> Membership</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Compare all membership plans and choose the one that suits you best.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`glass rounded-3xl p-8 relative ${
                plan.featured ? "border-2 border-cyan-400" : ""
              }`}
            >

              {plan.featured && (
                <span className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-2xl font-bold mb-6`}
              >
                {plan.name.charAt(0)}
              </div>

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="text-4xl font-black text-cyan-400 mt-3">
                {plan.price}
              </p>

              <div className="mt-8 space-y-5">

                <Feature
                  title="Priority Booking"
                  value={plan.benefits.booking}
                />

                <Feature
                  title="Extra Gaming Time"
                  value={plan.benefits.extraTime}
                />

                <Feature
                  title="Tournament Benefits"
                  value={plan.benefits.tournaments}
                />

                <Feature
                  title="VIP Access"
                  value={plan.benefits.vip}
                />

                <Feature
                  title="Exclusive Events"
                  value={plan.benefits.events}
                />

              </div>

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

function Feature({
  title,
  value,
}: {
  title: string;
  value: boolean | string;
}) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-3">

      <span className="text-gray-300">
        {title}
      </span>

      {typeof value === "boolean" ? (
        value ? (
          <Check className="text-green-400" />
        ) : (
          <X className="text-red-400" />
        )
      ) : (
        <span className="text-cyan-400 font-bold">
          {value}
        </span>
      )}

    </div>
  );
}