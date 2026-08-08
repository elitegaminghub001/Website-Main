"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  CreditCard,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const plans = [
  { name: "Bronze", price: 799 },
  { name: "Silver", price: 1199 },
  { name: "Gold", price: 2199 },
  { name: "Platinum", price: 3499 },
];

export default function JoinMembership() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement).value;

    const message = `
🎮 *Elite Gaming Hub Membership*

👤 Name: ${name}

📱 Mobile: ${phone}

📧 Email: ${email}

💎 Membership: ${selectedPlan.name}

💰 Price: ₹${selectedPlan.price}

📝 Notes: ${notes}
`;

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="join"
      className="py-24 bg-gradient-to-b from-[#070B1B] to-[#050816]"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Join Membership
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Become an
            <span className="neon-text"> Elite Member</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Fill out the form below and we'll contact you immediately.
          </p>

        </div>

        <div className="max-w-3xl mx-auto glass rounded-3xl p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}

            <div className="relative">

              <User className="absolute left-4 top-4 text-cyan-400" />

              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full bg-[#111827] rounded-xl p-4 pl-12"
              />

            </div>

            {/* Phone */}

            <div className="relative">

              <Phone className="absolute left-4 top-4 text-cyan-400" />

              <input
                name="phone"
                required
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-[#111827] rounded-xl p-4 pl-12"
              />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail className="absolute left-4 top-4 text-cyan-400" />

              <input
                name="email"
                type="email"
                placeholder="Email Address (Optional)"
                className="w-full bg-[#111827] rounded-xl p-4 pl-12"
              />

            </div>

            {/* Membership */}

            <div className="relative">

              <CreditCard className="absolute left-4 top-4 text-cyan-400" />

              <select
                className="w-full bg-[#111827] rounded-xl p-4 pl-12"
                onChange={(e) =>
                  setSelectedPlan(
                    plans.find(
                      (p) => p.name === e.target.value
                    )!
                  )
                }
              >
                {plans.map((plan) => (
                  <option
                    key={plan.name}
                    value={plan.name}
                  >
                    {plan.name} - ₹{plan.price}
                  </option>
                ))}
              </select>

            </div>

            {/* Price */}

            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-6">

              <p className="text-gray-400">
                Membership Price
              </p>

              <h3 className="text-5xl font-black text-cyan-400 mt-2">
                ₹{selectedPlan.price}
              </h3>

            </div>

            {/* Notes */}

            <div className="relative">

              <MessageSquare className="absolute left-4 top-4 text-cyan-400" />

              <textarea
                name="notes"
                rows={5}
                placeholder="Any additional information..."
                className="w-full bg-[#111827] rounded-xl p-4 pl-12"
              />

            </div>

            {/* Terms */}

            <label className="flex items-start gap-3 text-gray-300">

              <input
                required
                type="checkbox"
                className="mt-1"
              />

              <span>
                I agree to the Membership Terms &
                Conditions and understand that the
                membership fee is non-refundable after
                activation.
              </span>

            </label>

            {/* Button */}

            <button
              type="submit"
              className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3"
            >

              <CheckCircle />

              Join via WhatsApp

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}