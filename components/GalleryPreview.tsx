"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryArt } from "@/lib/assetData";

const images = galleryArt.slice(0, 6);

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0B1022]"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[5px]">
            Gallery
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Experience
            <span className="neon-text"> Elite Gaming Hub</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Take a look inside Ahmedabad's premium gaming café featuring
            PS5 gaming, racing simulator, RGB lighting and esports vibes.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.1 }}
              viewport={{ once:true }}
              whileHover={{ scale:1.04 }}
              className="relative overflow-hidden rounded-3xl glass group h-80"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">

                <h3 className="text-xl font-bold">
                  Elite Gaming Hub
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-16">

          <button className="btn-primary inline-flex items-center gap-2">

            View Full Gallery

            <ArrowRight size={18} />

          </button>

        </div>

      </div>
    </section>
  );
}