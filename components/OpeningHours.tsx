"use client";

import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const openingHours = [
  { day: "Monday", time: "12:00 PM – 11:00 PM" },
  { day: "Tuesday", time: "12:00 PM – 11:00 PM" },
  { day: "Wednesday", time: "12:00 PM – 11:00 PM" },
  { day: "Thursday", time: "12:00 PM – 11:00 PM" },
  { day: "Friday", time: "12:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 11:00 PM" },
];

export default function OpeningHours() {
  return (
    <section
      id="opening-hours"
      className="py-24 bg-[#050816]"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 text-cyan-400 uppercase tracking-[4px]">
            <Clock size={18} />
            Visit Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Opening
            <span className="neon-text"> Hours</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Plan your gaming session and come play with us.
            For tournaments and special events, timings may vary.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Hours Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass rounded-3xl p-8"
          >

            <div className="flex items-center justify-between mb-7">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <CalendarDays
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Weekly Hours
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Regular opening hours
                  </p>

                </div>

              </div>

              {/* Status */}

              <div className="hidden sm:flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2">

                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                <span className="text-green-400 text-sm font-semibold">
                  Open
                </span>

              </div>

            </div>

            <div className="space-y-2">

              {openingHours.map((item) => (

                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl p-4 bg-white/5 hover:bg-white/10 transition"
                >

                  <span className="font-medium">
                    {item.day}
                  </span>

                  <span className="text-gray-400">
                    {item.time}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Booking Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass rounded-3xl p-8 flex flex-col justify-center"
          >

            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">

              <MessageCircle
                size={32}
                className="text-green-400"
              />

            </div>

            <h3 className="text-3xl font-bold mt-7">
              Want to Book a Session?
            </h3>

            <p className="text-gray-400 leading-7 mt-5">
              Message us on WhatsApp to check availability,
              book your PS5 gaming session, ask about tournaments,
              or reserve a simulator slot.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="rounded-xl bg-white/5 p-4 text-center">

                <p className="text-cyan-400 font-bold text-xl">
                  PS5
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Gaming
                </p>

              </div>

              <div className="rounded-xl bg-white/5 p-4 text-center">

                <p className="text-cyan-400 font-bold text-xl">
                  Racing
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Simulator
                </p>

              </div>

            </div>

            <a
              href="https://wa.me/917567154057"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full flex items-center justify-center gap-3"
            >

              <MessageCircle size={20} />

              WhatsApp for Booking

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}