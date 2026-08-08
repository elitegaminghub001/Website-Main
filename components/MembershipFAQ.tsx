"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How long is the membership valid?",
    answer:
      "Each membership plan is designed as a monthly membership and is valid for one month from the activation date.",
  },
  {
    question: "Which membership plans are available?",
    answer:
      "Elite Gaming Hub currently offers four membership plans: Bronze ₹799, Silver ₹1,199, Gold ₹2,199 and Elite ₹3,499.",
  },
  {
    question: "Can I upgrade my membership?",
    answer:
      "Yes. Contact Elite Gaming Hub on WhatsApp to check the available upgrade options.",
  },
  {
    question: "Can I use my membership for multiple players?",
    answer:
      "Membership benefits are subject to the rules of the selected plan. Contact us before booking if you want to use a membership for a group session.",
  },
  {
    question: "Does membership guarantee a gaming slot?",
    answer:
      "Membership does not automatically guarantee a particular gaming slot. We recommend booking in advance, especially during busy hours and weekends.",
  },
  {
    question: "Can I use membership benefits during Happy Hours?",
    answer:
      "Happy Hours and membership benefits may have separate terms. Please confirm the applicable rate with Elite Gaming Hub before booking.",
  },
  {
    question: "How do I activate my membership?",
    answer:
      "Select your preferred membership plan and contact us on WhatsApp. Our team will guide you through the activation process.",
  },
  {
    question: "Are membership fees refundable?",
    answer:
      "Refund and cancellation terms depend on the membership policy applicable at the time of purchase. Please confirm the terms before payment.",
  },
];

export default function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 text-cyan-400 uppercase tracking-[4px]">
            <HelpCircle size={18} />
            Membership FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Questions?
            <span className="neon-text"> We've Got Answers.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Find answers to some of the most common questions
            about Elite Gaming Hub memberships.
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

        {/* WhatsApp CTA */}

        <div className="max-w-4xl mx-auto mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8 text-center">

          <h3 className="text-2xl font-bold">
            Still Have Questions?
          </h3>

          <p className="text-gray-400 mt-3">
            Contact Elite Gaming Hub and we'll help you choose
            the right membership.
          </p>

          <a
            href="https://wa.me/917567154057"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mt-6"
          >

            <MessageCircle size={19} />

            Ask on WhatsApp

          </a>

        </div>

      </div>
    </section>
  );
}