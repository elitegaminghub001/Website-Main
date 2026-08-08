"use client";

import { useState } from "react";
import { CalendarDays, Clock, Gamepad2, Car } from "lucide-react";

export default function BookingSection() {
  const [gamingType, setGamingType] = useState("PS5");

  return (
    <section
      id="booking"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0B1022]"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Book Your Session
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Reserve Your
            <span className="neon-text"> Gaming Slot</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Choose your gaming setup, select a time, and reserve your seat in seconds.
          </p>

        </div>

        <div className="glass rounded-3xl p-8 max-w-5xl mx-auto">

          <form className="grid md:grid-cols-2 gap-6">

            {/* Gaming Type */}

            <div>

              <label className="block mb-2 font-semibold">
                Gaming Type
              </label>

              <select
                value={gamingType}
                onChange={(e) => setGamingType(e.target.value)}
                className="w-full bg-[#111827] rounded-xl p-4 border border-cyan-500/20"
              >
                <option>PS5</option>
                <option>PS4</option>
                <option>Racing Simulator</option>
              </select>

            </div>

            {/* Players */}

            <div>

              <label className="block mb-2 font-semibold">
                Players
              </label>

              <select className="w-full bg-[#111827] rounded-xl p-4 border border-cyan-500/20">
                <option>1 Player</option>
                <option>2 Players</option>
                <option>3 Players</option>
                <option>4 Players</option>
              </select>

            </div>

            {/* Date */}

            <div>

              <label className="block mb-2 font-semibold">
                Date
              </label>

              <div className="relative">

                <CalendarDays className="absolute left-4 top-4 text-cyan-400" />

                <input
                  type="date"
                  className="w-full bg-[#111827] rounded-xl p-4 pl-12 border border-cyan-500/20"
                />

              </div>

            </div>

            {/* Time */}

            <div>

              <label className="block mb-2 font-semibold">
                Time
              </label>

              <div className="relative">

                <Clock className="absolute left-4 top-4 text-cyan-400" />

                <input
                  type="time"
                  className="w-full bg-[#111827] rounded-xl p-4 pl-12 border border-cyan-500/20"
                />

              </div>

            </div>

            {/* Duration */}

            <div>

              <label className="block mb-2 font-semibold">
                Duration
              </label>

              <select className="w-full bg-[#111827] rounded-xl p-4 border border-cyan-500/20">
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
              </select>

            </div>

            {/* Name */}

            <div>

              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#111827] rounded-xl p-4 border border-cyan-500/20"
              />

            </div>

            {/* Mobile */}

            <div>

              <label className="block mb-2 font-semibold">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="9876543210"
                className="w-full bg-[#111827] rounded-xl p-4 border border-cyan-500/20"
              />

            </div>

            {/* Submit */}

            <div className="md:col-span-2">

              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Book Now
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}