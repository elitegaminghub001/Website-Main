"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  ExternalLink,
} from "lucide-react";

const mapUrl =
  "https://maps.app.goo.gl/AQQfPj3vXeEbwBcGA?g_st=ic";

export default function LocationMap() {
  return (
    <section className="py-24 bg-[#070B1B]">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Find Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Visit
            <span className="neon-text"> Elite Gaming Hub</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Come over, grab a controller and enjoy an epic gaming
            session with your friends.
          </p>

        </div>

        {/* Map Area */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-3xl glass"
        >

          {/* Map Placeholder */}

          <div className="relative h-[450px] bg-[#111827]">

            <iframe
              src="https://www.google.com/maps?q=Juhapura,Ahmedabad,Gujarat&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
              title="Elite Gaming Hub Location"
            />

            {/* Location Card */}

            <div className="absolute bottom-6 left-6 max-w-sm">

              <div className="rounded-2xl bg-[#050816]/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">

                    <MapPin
                      size={25}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Elite Gaming Hub
                    </h3>

                    <p className="text-gray-400 text-sm mt-2 leading-6">
                      Juhapura, Ahmedabad,
                      Gujarat, India
                    </p>

                  </div>

                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-5 w-full flex items-center justify-center gap-2"
                >

                  <Navigation size={18} />

                  Get Directions

                  <ExternalLink size={15} />

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Address */}

        <div className="mt-8 text-center">

          <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-3">

            <MapPin
              size={18}
              className="text-cyan-400"
            />

            <span className="text-gray-300">
              Elite Gaming Hub • Juhapura • Ahmedabad, Gujarat
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}