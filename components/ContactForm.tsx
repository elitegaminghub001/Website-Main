"use client";

import { FormEvent, useState } from "react";
import {
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const whatsappMessage = `
🎮 *ELITE GAMING HUB — ENQUIRY*

👤 Name: ${name}
📱 Phone: ${phone}

💬 Message:
${message}

Please get back to me regarding my enquiry.
`;

    window.open(
      `https://wa.me/917567154057?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setSent(true);
  };

  return (
    <section className="pb-24 bg-[#050816]">
      <div className="container-custom">

        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-10">

          {sent ? (
            <div className="text-center py-10">

              <CheckCircle
                size={65}
                className="mx-auto text-green-400"
              />

              <h2 className="text-3xl font-bold mt-6">
                Enquiry Ready!
              </h2>

              <p className="text-gray-400 mt-3">
                Your message has been prepared in WhatsApp.
              </p>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-primary mt-7"
              >
                Send Another Message
              </button>

            </div>
          ) : (
            <>
              <div className="text-center mb-10">

                <h2 className="text-4xl font-bold">
                  Send Us a Message
                </h2>

                <p className="text-gray-400 mt-3">
                  We'll get back to you through WhatsApp.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

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

                <div className="relative">
                  <MessageSquare
                    size={19}
                    className="absolute left-4 top-4 text-cyan-400"
                  />

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl bg-[#111827] border border-white/5 p-4 pl-12 outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                >
                  <Send size={19} />
                  Send Enquiry on WhatsApp
                </button>

              </form>
            </>
          )}

        </div>

      </div>
    </section>
  );
}