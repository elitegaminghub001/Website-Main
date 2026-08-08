"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  CalendarCheck,
  Tag,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Gamepad2,
    title: "Member Gaming Benefits",
    description:
      "Enjoy the benefits of being an Elite Gaming Hub member whenever you visit.",
  },
  {
    icon: CalendarCheck,
    title: "Priority Booking",
    description:
      "Get priority when reserving your preferred gaming setup and time.",
  },
  {
    icon: Tag,
    title: "Exclusive Offers",
    description:
      "Stay updated with special offers and promotions available to members.",
  },
  {
    icon: Trophy,
    title: "Tournament Access",
    description:
      "Get updates about upcoming tournaments and special gaming events.",
  },
  {
    icon: Users,
    title: "Gaming Community",
    description:
      "Connect with other gamers and become part of the Elite Gaming Hub community.",
  },
  {
    icon: Sparkles,
    title: "Member-Only Perks",
    description:
      "Enjoy additional perks and special benefits introduced for members.",
  },
];

export default function MembershipBenefits() {
  return (
    <section id="membership-plans"
  className="py-24 bg-[#050816]"
>
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Member Advantages
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Become an
            <span className="neon-text"> Elite Member?</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            More than just gaming. Get access to a better experience
            at Elite Gaming Hub.
          </p>

        </div>

        {/* Benefits */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                whileHover={{
                  y: -7,
                }}
                className="glass rounded-3xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {benefit.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8 md:p-10 text-center"
        >

          <h3 className="text-3xl font-bold">
            Ready to Level Up?
          </h3>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Choose your membership plan and contact us on WhatsApp
            to get your membership started.
          </p>

          <a
            href="#membership-plans"
            className="btn-primary inline-flex mt-7"
          >
            View Membership Plans
          </a>

        </motion.div>

      </div>
    </section>
  );
}