"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to book in advance?",
    answer:
      "Walk-ins are welcome, but we recommend booking in advance during weekends and tournaments to avoid waiting.",
  },
  {
    question: "What are your Happy Hours?",
    answer:
      "Happy Hours are available Monday to Friday from 1:00 PM to 5:00 PM with discounted gaming prices.",
  },
  {
    question: "How do I join tournaments?",
    answer:
      "You can register through our website, WhatsApp, or directly at Elite Gaming Hub before the tournament starts.",
  },
  {
    question: "How many players can play on one PS5?",
    answer:
      "Up to 4 players can enjoy multiplayer games together on a single PS5 setup, depending on the game.",
  },
  {
    question: "Do you serve food and beverages?",
    answer:
      "Yes! We offer coffee, tea, cold coffee, fries, Maggi, chicken nuggets, popcorn, garlic bread, and more.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, parking is available near the café for both two-wheelers and cars.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px]">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked
            <span className="neon-text"> Questions</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know before visiting Elite Gaming Hub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="glass rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}