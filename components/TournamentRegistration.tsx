"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Gamepad2,
  CheckCircle,
  Users,
  IndianRupee,
} from "lucide-react";

export default function TournamentRegistration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const gamerId = (
      form.elements.namedItem("gamerId") as HTMLInputElement
    ).value;

    const message = `
🎮 *ELITE GAMING HUB*
🏆 *Tekken 8 Tournament Registration*

👤 Player Name: ${name}
📱 Mobile: ${phone}
🎮 Gamer ID: ${gamerId}

💰 Entry Fee: ₹200
👥 Tournament Size: 12 Players

🏆 Winner: ₹1,000
🥈 2nd Place: ₹200 Refund
🥉 3rd Place: ₹200 Refund

Please confirm my tournament registration.
`;

    setSubmitted(true);

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-b from-[#070B1B] to-[#050816]"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Tournament Registration
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Secure Your
            <span className="neon-text"> Spot</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Only 12 players can participate. Register early to secure
            your place in the tournament.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Tournament Info */}

          <div className="glass rounded-3xl p-10">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">

                <Gamepad2
                  size={34}
                  className="text-red-400"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Tekken 8
                </h3>

                <p className="text-gray-400">
                  Weekly Tournament
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <InfoRow
                icon={<IndianRupee />}
                title="Entry Fee"
                value="₹200"
              />

              <InfoRow
                icon={<Users />}
                title="Players"
                value="12 Maximum"
              />

              <InfoRow
                icon={<Gamepad2 />}
                title="Gaming Setups"
                value="4 PS5"
              />

              <InfoRow
                icon={<CheckCircle />}
                title="Tournament Format"
                value="4 Groups × 3 Players"
              />

            </div>

            <div className="mt-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 p-6">

              <h4 className="text-yellow-400 font-bold text-lg">
                Prize Distribution
              </h4>

              <div className="mt-4 space-y-2 text-gray-300">

                <p>🥇 Winner — ₹1,000</p>
                <p>🥈 2nd — ₹200 Entry Refund</p>
                <p>🥉 3rd — ₹200 Entry Refund</p>

              </div>

            </div>

          </div>

          {/* Registration Form */}

          <div className="glass rounded-3xl p-10">

            {submitted ? (

              <div className="min-h-[450px] flex flex-col items-center justify-center text-center">

                <CheckCircle
                  size={70}
                  className="text-green-400"
                />

                <h3 className="text-3xl font-bold mt-6">
                  Registration Started!
                </h3>

                <p className="text-gray-400 mt-4">
                  WhatsApp has been opened with your tournament
                  registration details.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-8"
                >
                  Register Another Player
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Player Name
                  </label>

                  <div className="relative">

                    <User
                      size={20}
                      className="absolute left-4 top-4 text-cyan-400"
                    />

                    <input
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-[#111827] rounded-xl p-4 pl-12 outline-none border border-white/5 focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* Phone */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Mobile Number
                  </label>

                  <div className="relative">

                    <Phone
                      size={20}
                      className="absolute left-4 top-4 text-cyan-400"
                    />

                    <input
                      name="phone"
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="w-full bg-[#111827] rounded-xl p-4 pl-12 outline-none border border-white/5 focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* Gamer ID */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Gamer ID
                  </label>

                  <div className="relative">

                    <Gamepad2
                      size={20}
                      className="absolute left-4 top-4 text-cyan-400"
                    />

                    <input
                      name="gamerId"
                      required
                      placeholder="PSN / Gamer ID"
                      className="w-full bg-[#111827] rounded-xl p-4 pl-12 outline-none border border-white/5 focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* Fee */}

                <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 flex items-center justify-between">

                  <div>

                    <p className="text-gray-400">
                      Tournament Entry
                    </p>

                    <p className="font-bold mt-1">
                      Tekken 8
                    </p>

                  </div>

                  <div className="text-3xl font-black text-cyan-400">
                    ₹200
                  </div>

                </div>

                {/* Terms */}

                <label className="flex items-start gap-3 text-sm text-gray-400">

                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />

                  <span>
                    I agree to follow the tournament rules and understand
                    that registration is subject to slot availability.
                  </span>

                </label>

                {/* Submit */}

                <button
                  type="submit"
                  className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg"
                >

                  <CheckCircle size={21} />

                  Register via WhatsApp

                </button>

                <p className="text-center text-xs text-gray-500">
                  Registration is not confirmed until Elite Gaming Hub
                  confirms your slot.
                </p>

              </form>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

      <div className="flex items-center gap-3">

        <span className="text-cyan-400">
          {icon}
        </span>

        <span className="text-gray-400">
          {title}
        </span>

      </div>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}