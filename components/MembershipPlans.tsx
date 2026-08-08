"use client";

import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Star,
  Zap,
  MessageCircle,
} from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "799",
    icon: Zap,
    description: "A simple way to start saving.",
    benefits: [
      "Member pricing",
      "Priority booking",
      "Special member offers",
      "Tournament updates",
    ],
  },
  {
    name: "Silver",
    price: "1,199",
    icon: Star,
    description: "More gaming. More benefits.",
    popular: true,
    benefits: [
      "Everything in Bronze",
      "Better member savings",
      "Priority booking",
      "Exclusive offers",
      "Tournament benefits",
    ],
  },
  {
    name: "Gold",
    price: "2,199",
    icon: Crown,
    description: "For regular gamers.",
    benefits: [
      "Everything in Silver",
      "Premium member benefits",
      "Higher gaming value",
      "Priority tournament access",
      "Special event offers",
    ],
  },
  {
    name: "Elite",
    price: "3,499",
    icon: Crown,
    description: "The ultimate gaming membership.",
    benefits: [
      "Everything in Gold",
      "Maximum member benefits",
      "VIP priority booking",
      "Exclusive Elite offers",
      "Special tournament privileges",
    ],
  },
];

export default function MembershipPlans() {
  const handleMembership = (planName: string) => {
    const message = `
🎮 *ELITE GAMING HUB — MEMBERSHIP ENQUIRY*

I am interested in the *${planName} Membership*.

Please share the membership details, benefits and activation process.
`;

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
  id="membership-plans"
  className="py-24 bg-[#050816]"
>

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Choose Your Plan
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Membership
            <span className="neon-text"> Plans</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Pick the membership that fits your gaming style.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className={`relative glass rounded-3xl p-7 ${
                  plan.popular
                    ? "border-2 border-cyan-400/50"
                    : ""
                }`}
              >

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                    <span className="rounded-full bg-cyan-400 text-black px-5 py-2 text-sm font-bold">
                      MOST POPULAR
                    </span>

                  </div>
                )}

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {plan.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {plan.description}
                </p>

                <div className="mt-7">

                  <span className="text-5xl font-black">
                    ₹{plan.price}
                  </span>

                  <span className="text-gray-500">
                    /month
                  </span>

                </div>

                <div className="space-y-3 mt-8">

                  {plan.benefits.map((benefit) => (

                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >

                      <Check
                        size={18}
                        className="text-green-400 mt-0.5 flex-shrink-0"
                      />

                      <span className="text-gray-300 text-sm">
                        {benefit}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleMembership(plan.name)
                  }
                  className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
                >

                  <MessageCircle size={18} />

                  Enquire Now

                </button>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}