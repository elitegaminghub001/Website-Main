"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aarav Shah",
    rating: 5,
    review:
      "Best gaming café in Ahmedabad! Premium PS5 setups, comfortable seating and amazing atmosphere.",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    review:
      "The racing simulator is absolutely amazing. Weekly tournaments are very well organized.",
  },
  {
    name: "Harsh Patel",
    rating: 5,
    review:
      "Loved the RGB lighting and premium experience. Definitely coming back with friends.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#070B1B]">
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our
            <span className="neon-text"> Gamers Say</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Join hundreds of gamers enjoying premium gaming at Elite Gaming Hub.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-8 relative"
            >

              <Quote
                className="absolute right-6 top-6 text-cyan-500 opacity-30"
                size={40}
              />

              <div className="flex mb-5">

                {[...Array(review.rating)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-300 leading-7">
                "{review.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <p className="text-cyan-400 text-sm">
                  Verified Customer
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="text-center mt-16">

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary inline-flex items-center"
          >
            Leave a Google Review
          </a>

        </div>

      </div>
    </section>
  );
}