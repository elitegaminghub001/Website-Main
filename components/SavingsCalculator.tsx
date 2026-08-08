"use client";

import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Trophy } from "lucide-react";

const membershipPlans = [
  {
    name: "None",
    multiplier: 1,
    bonus: 0,
  },
  {
    name: "Bronze",
    multiplier: 0.95,
    bonus: 5,
  },
  {
    name: "Silver",
    multiplier: 0.9,
    bonus: 10,
  },
  {
    name: "Gold",
    multiplier: 0.85,
    bonus: 15,
  },
  {
    name: "Platinum",
    multiplier: 0.8,
    bonus: 20,
  },
];

const rates = {
  PS5: 120,
  PS4: 80,
  Simulator: 270,
};

export default function SavingsCalculator() {
  const [gamingType, setGamingType] =
    useState<keyof typeof rates>("PS5");

  const [hours, setHours] = useState(20);

  const [membership, setMembership] = useState("Gold");

  const result = useMemo(() => {
    const rate = rates[gamingType];

    const regular = rate * hours;

    const plan =
      membershipPlans.find((p) => p.name === membership)!;

    const member = regular * plan.multiplier;

    const savings = regular - member;

    const bonusHours = (hours * plan.bonus) / 100;

    return {
      regular,
      member,
      savings,
      bonusHours,
    };
  }, [gamingType, hours, membership]);

  return (
    <section className="py-24 bg-[#050816]">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Savings Calculator
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Calculate Your
            <span className="neon-text"> Savings</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Find out how much you can save every month with an Elite Membership.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="glass rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">

              <Calculator className="text-cyan-400" />

              Your Gaming

            </h3>

            <div className="space-y-6">

              <div>

                <label className="block mb-2">
                  Gaming Type
                </label>

                <select
                  value={gamingType}
                  onChange={(e) =>
                    setGamingType(
                      e.target.value as keyof typeof rates
                    )
                  }
                  className="w-full rounded-xl bg-[#111827] p-4"
                >
                  <option>PS5</option>
                  <option>PS4</option>
                  <option>Simulator</option>
                </select>

              </div>

              <div>

                <label className="block mb-2">
                  Hours Per Month
                </label>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={hours}
                  onChange={(e) =>
                    setHours(Number(e.target.value))
                  }
                  className="w-full"
                />

                <div className="mt-2 text-cyan-400 font-bold">
                  {hours} Hours
                </div>

              </div>

              <div>

                <label className="block mb-2">
                  Membership
                </label>

                <select
                  value={membership}
                  onChange={(e) =>
                    setMembership(e.target.value)
                  }
                  className="w-full rounded-xl bg-[#111827] p-4"
                >
                  {membershipPlans.map((plan) => (
                    <option key={plan.name}>
                      {plan.name}
                    </option>
                  ))}
                </select>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="glass rounded-3xl p-8 flex flex-col justify-center">

            <div className="space-y-6">

              <ResultCard
                title="Regular Cost"
                value={`₹${result.regular.toFixed(0)}`}
              />

              <ResultCard
                title="Member Cost"
                value={`₹${result.member.toFixed(0)}`}
              />

              <ResultCard
                title="Monthly Savings"
                value={`₹${result.savings.toFixed(0)}`}
                highlight
              />

              <ResultCard
                title="Bonus Gaming Time"
                value={`${result.bonusHours.toFixed(1)} Hours`}
              />

            </div>

            <button className="btn-primary mt-10">

              Become a Member

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function ResultCard({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 flex justify-between items-center ${
        highlight
          ? "bg-cyan-500/10 border border-cyan-400"
          : "bg-white/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <IndianRupee className="text-cyan-400" />
        <span>{title}</span>
      </div>

      <span
        className={`font-bold text-2xl ${
          highlight ? "text-cyan-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}