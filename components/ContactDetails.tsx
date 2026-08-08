"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";

const details = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Message us for bookings and enquiries.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/917567154057",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Himalaya Falaknuma, Juhapura, Ahmedabad.",
    action: "Get Directions",
    href: "https://maps.app.goo.gl/AQQfPj3vXeEbwBcGA?g_st=ic",
  },
  {
    icon: Clock,
    title: "Gaming Hours",
    text: "Contact us to confirm today's opening hours.",
    action: "Ask on WhatsApp",
    href: "https://wa.me/917567154057",
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Follow Elite Gaming Hub for updates and events.",
    action: "Follow Us",
    href: "https://www.instagram.com/elite.gaming.hub/",
  },
];

export default function ContactDetails() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-7"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <Icon
                    size={27}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mt-3 min-h-[48px]">
                  {item.text}
                </p>

                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-block text-cyan-400 text-sm font-semibold mt-5 hover:text-cyan-300 transition"
                >
                  {item.action} →
                </a>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}