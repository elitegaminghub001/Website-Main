"use client";

import { useMemo, useState } from "react";
import {
  User,
  Phone,
  Gamepad2,
  Users,
  CalendarDays,
  Clock,
  CheckCircle,
  Send,
  Zap,
} from "lucide-react";

type GameType = "PS5" | "PS4" | "Simulator";
type SimulatorDuration = "20 Minutes" | "30 Minutes" | "1 Hour";

const ps5RegularPrices: Record<string, number> = {
  "1": 120,
  "2": 180,
  "3": 240,
  "4": 300,
};

const ps5HappyPrices: Record<string, number> = {
  "1": 100,
  "2": 150,
  "3": 200,
  "4": 250,
};

const ps4Prices: Record<string, number> = {
  "1": 80,
  "2": 130,
  "3": 180,
  "4": 230,
};

const simulatorPrices: Record<SimulatorDuration, number> = {
  "20 Minutes": 100,
  "30 Minutes": 150,
  "1 Hour": 270,
};

function isHappyHours(time: string) {
  if (!time) return false;

  const [hours, minutes] = time.split(":").map(Number);
  const selectedMinutes = hours * 60 + minutes;

  const start = 13 * 60;
  const end = 17 * 60;

  return selectedMinutes >= start && selectedMinutes < end;
}

export default function BookingForm() {
  const [gameType, setGameType] = useState<GameType>("PS5");
  const [players, setPlayers] = useState("1");
  const [simulatorDuration, setSimulatorDuration] =
    useState<SimulatorDuration>("1 Hour");

  const [submitted, setSubmitted] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");

  const happyHours = isHappyHours(selectedTime);

  const currentPrice = useMemo(() => {
    if (gameType === "PS5") {
      return happyHours
        ? ps5HappyPrices[players]
        : ps5RegularPrices[players];
    }

    if (gameType === "PS4") {
      return ps4Prices[players];
    }

    return simulatorPrices[simulatorDuration];
  }, [
    gameType,
    players,
    simulatorDuration,
    happyHours,
  ]);

  const handleGameChange = (type: GameType) => {
    setGameType(type);

    if (type === "Simulator") {
      setPlayers("1");
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const date = (
      form.elements.namedItem("date") as HTMLInputElement
    ).value;

    const bookingTime = (
      form.elements.namedItem("time") as HTMLInputElement
    ).value;

    const bookingType =
      gameType === "Simulator"
        ? `${gameType} - ${simulatorDuration}`
        : `${gameType} - ${players} Player${
            players !== "1" ? "s" : ""
          }`;

    const pricingType =
      gameType === "PS5" && happyHours
        ? "Happy Hours (1 PM - 5 PM)"
        : "Regular Pricing";

    const whatsappMessage = `
🎮 *ELITE GAMING HUB — BOOKING REQUEST*

👤 *Name:* ${name}
📱 *Mobile:* ${phone}

🎮 *Setup:* ${bookingType}
📅 *Date:* ${date}
⏰ *Time:* ${bookingTime}

💰 *Price:* ₹${currentPrice}
🏷️ *Pricing:* ${pricingType}

Please confirm availability for this booking.
`;

    setSubmitted(true);

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  if (submitted) {
    return (
      <section className="py-24 bg-[#050816]">
        <div className="container-custom">
          <div className="glass max-w-2xl mx-auto rounded-3xl p-12 text-center">

            <CheckCircle
              size={70}
              className="mx-auto text-green-400"
            />

            <h2 className="text-4xl font-bold mt-7">
              Booking Request Ready!
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Your booking details have been prepared in
              WhatsApp. Send the message to Elite Gaming Hub
              to confirm availability.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn-primary mt-8"
            >
              Make Another Booking
            </button>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="py-24 bg-[#050816]"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LEFT SIDE */}

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Choose Your Setup
            </h2>

            <p className="text-gray-400 mt-2">
              Select your gaming experience.
            </p>

            {/* Game Type */}

            <div className="grid grid-cols-3 gap-3 mt-8">

              {(
                ["PS5", "PS4", "Simulator"] as GameType[]
              ).map((type) => (

                <button
                  key={type}
                  type="button"
                  onClick={() => handleGameChange(type)}
                  className={`rounded-xl p-5 border transition ${
                    gameType === type
                      ? "border-cyan-400 bg-cyan-500/10 text-cyan-400"
                      : "border-white/5 bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >

                  <Gamepad2
                    size={25}
                    className="mx-auto mb-2"
                  />

                  <span className="text-sm font-semibold">
                    {type}
                  </span>

                </button>

              ))}

            </div>

            {/* Players */}

            {gameType !== "Simulator" && (
              <div className="mt-8">

                <label className="block mb-3 text-gray-300">
                  Number of Players
                </label>

                <div className="grid grid-cols-4 gap-3">

                  {["1", "2", "3", "4"].map(
                    (number) => (

                      <button
                        key={number}
                        type="button"
                        onClick={() =>
                          setPlayers(number)
                        }
                        className={`rounded-xl p-4 border transition ${
                          players === number
                            ? "border-cyan-400 bg-cyan-500/10 text-cyan-400"
                            : "border-white/5 bg-white/5 hover:bg-white/10"
                        }`}
                      >

                        <Users
                          size={20}
                          className="mx-auto mb-2"
                        />

                        {number}

                      </button>

                    )
                  )}

                </div>

              </div>
            )}

            {/* Simulator Duration */}

            {gameType === "Simulator" && (
              <div className="mt-8">

                <label className="block mb-3 text-gray-300">
                  Simulator Duration
                </label>

                <div className="space-y-3">

                  {(
                    Object.keys(
                      simulatorPrices
                    ) as SimulatorDuration[]
                  ).map((duration) => (

                    <button
                      key={duration}
                      type="button"
                      onClick={() =>
                        setSimulatorDuration(duration)
                      }
                      className={`w-full flex justify-between items-center rounded-xl p-4 border transition ${
                        simulatorDuration === duration
                          ? "border-cyan-400 bg-cyan-500/10"
                          : "border-white/5 bg-white/5"
                      }`}
                    >

                      <span>
                        {duration}
                      </span>

                      <span className="text-cyan-400 font-bold">
                        ₹{simulatorPrices[duration]}
                      </span>

                    </button>

                  ))}

                </div>

              </div>
            )}

            {/* Current Price */}

            <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">
                    Your Price
                  </p>

                  <div className="text-4xl font-black text-cyan-400 mt-1">
                    ₹{currentPrice}
                  </div>

                </div>

                {gameType === "PS5" &&
                  happyHours && (
                    <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

                      <Zap
                        size={17}
                        className="text-green-400"
                      />

                      <span className="text-green-400 text-sm font-bold">
                        Happy Hours
                      </span>

                    </div>
                  )}

              </div>

              {gameType === "PS5" && (
                <p className="text-gray-500 text-sm mt-3">
                  {happyHours
                    ? "Special rate applied for 1 PM – 5 PM."
                    : "Happy Hours available from 1 PM – 5 PM."}
                </p>
              )}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Booking Details
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >

              {/* Name */}

              <div className="relative">

                <User
                  size={19}
                  className="absolute left-4 top-4 text-cyan-400"
                />

                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-[#111827] border border-white/5 p-4 pl-12 outline-none focus:border-cyan-400"
                />

              </div>

              {/* Phone */}

              <div className="relative">

                <Phone
                  size={19}
                  className="absolute left-4 top-4 text-cyan-400"
                />

                <input
                  name="phone"
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl bg-[#111827] border border-white/5 p-4 pl-12 outline-none focus:border-cyan-400"
                />

              </div>

              {/* Date */}

              <div className="relative">

                <CalendarDays
                  size={19}
                  className="absolute left-4 top-4 text-cyan-400"
                />

                <input
                  name="date"
                  required
                  type="date"
                  className="w-full rounded-xl bg-[#111827] border border-white/5 p-4 pl-12 outline-none focus:border-cyan-400"
                />

              </div>

              {/* Time */}

              <div>

                <div className="relative">

                  <Clock
                    size={19}
                    className="absolute left-4 top-4 text-cyan-400"
                  />

                  <input
                    name="time"
                    required
                    type="time"
                    value={selectedTime}
                    onChange={(e) =>
                      setSelectedTime(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl bg-[#111827] border border-white/5 p-4 pl-12 outline-none focus:border-cyan-400"
                  />

                </div>

                <p className="text-xs text-gray-500 mt-2">
                  PS5 Happy Hours: 1:00 PM – 5:00 PM
                </p>

              </div>

              {/* Summary */}

              <div className="rounded-2xl bg-white/5 p-5">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Setup
                  </span>

                  <span className="font-semibold">
                    {gameType}
                  </span>
                </div>

                {gameType !== "Simulator" ? (
                  <div className="flex justify-between mt-3">

                    <span className="text-gray-400">
                      Players
                    </span>

                    <span className="font-semibold">
                      {players}
                    </span>

                  </div>
                ) : (
                  <div className="flex justify-between mt-3">

                    <span className="text-gray-400">
                      Duration
                    </span>

                    <span className="font-semibold">
                      {simulatorDuration}
                    </span>

                  </div>
                )}

                <div className="flex justify-between mt-3">

                  <span className="text-gray-400">
                    Price
                  </span>

                  <span className="font-bold text-cyan-400">
                    ₹{currentPrice}
                  </span>

                </div>

              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 flex items-center justify-center gap-3"
              >

                <Send size={20} />

                Request Booking on WhatsApp

              </button>

              <p className="text-center text-xs text-gray-500">
                Booking is subject to availability and
                confirmation by Elite Gaming Hub.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}