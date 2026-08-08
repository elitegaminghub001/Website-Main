"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How many players can participate?",
    answer:
      "The Tekken 8 tournament is limited to 12 players. Registration closes once all 12 slots are filled.",
  },
  {
    question: "What is the entry fee?",
    answer:
      "The entry fee is ₹200 per player.",
  },
  {
    question: "How does the tournament format work?",
    answer:
      "The 12 players are divided into 4 groups of 3 players. Each player plays against the other two players in their group. The winner of each group advances to the semifinals.",
  },
  {
    question: "How many matches will each group player play?",
    answer:
      "Each player plays 2 group-stage matches because every player faces the other two players in their group once.",
  },
  {
    question: "How many PS5 setups are available?",
    answer:
      "Elite Gaming Hub has 4 PS5 setups, allowing multiple matches to be played at the same time.",
  },
  {
    question: "What does the winner receive?",
    answer:
      "The tournament winner receives a ₹1,000 cash prize.",
  },
  {
    question: "What do 2nd and 3rd place receive?",
    answer:
      "The 2nd- and 3rd-place players receive a refund of their ₹200 tournament entry fee.",
  },
  {
    question: "Can I register on the day of the tournament?",
    answer:
      "Registration depends on slot availability. We recommend registering in advance because there are only 12 spots.",
  },
  {
    question: "What happens if I cannot attend after registering?",
    answer:
      "Please contact Elite Gaming Hub as early as possible. Any refund or replacement-player decision will be handled according to the tournament rules announced for that event.",
  },
  {
    question: "Where will the tournament take place?",
    answer:
      "The tournament will take place at Elite Gaming Hub in Ahmedabad.",
  },
];

export default function TournamentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 text-cyan-400 uppercase tracking-[4px]">
            <HelpCircle size={18} />
            Tournament FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Tournament
            <span className="neon-text"> Rules & FAQ</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Everything players need to know before registering for the
            Elite Gaming Hub tournament.
          </p>

        </div>

        {/* FAQ */}

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`glass rounded-2xl overflow-hidden transition ${
                  isOpen
                    ? "border border-cyan-400/30"
                    : ""
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between gap-5 p-6 text-left"
                >

                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 text-gray-400 leading-7">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Note */}

        <div className="max-w-4xl mx-auto mt-10 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 p-6 text-center">

          <p className="text-gray-300">
            Tournament rules may be updated for individual events.
            Players will be informed of any event-specific rules before
            the tournament begins.
          </p>

        </div>

      </div>
    </section>
  );
}