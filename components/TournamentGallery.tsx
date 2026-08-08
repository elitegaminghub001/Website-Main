"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryArt } from "@/lib/assetData";

const gallery = [
  {
    src: galleryArt[6],
    title: "Tournament Night",
  },
  {
    src: galleryArt[7],
    title: "Competitive Gaming",
  },
  {
    src: galleryArt[8],
    title: "Elite Gaming Hub",
  },
  {
    src: galleryArt[9],
    title: "PS5 Gaming",
  },
  {
    src: galleryArt[10],
    title: "Championship Moments",
  },
  {
    src: galleryArt[11],
    title: "Gaming Community",
  },
];

export default function TournamentGallery() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Tournament Gallery
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Game Day
            <span className="neon-text"> Moments</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Check out the action, competition and unforgettable moments
            from the Elite Gaming Hub community.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          {gallery.map((item, index) => (

            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5"
            >

              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-5">

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}