"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  MessageCircle,
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/AQQfPj3vXeEbwBcGA?g_st=ic";

const WHATSAPP_NUMBER = "917567154057";

export default function LocationDetails() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Location Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >

            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
              Our Location
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Visit
              <span className="neon-text"> Elite Gaming Hub</span>
            </h2>

            {/* Address */}

            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center">

                <MapPin
                  size={23}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Address
                </h3>

                <p className="text-gray-400 mt-2 leading-7">
                  05 Ground Floor,
                  <br />
                  Himalaya Falaknuma,
                  <br />
                  Juhapura, Ahmedabad-380055
                </p>

              </div>

            </div>

            {/* Opening Hours */}

            <div className="flex gap-4 mt-7">

              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">

                <Clock
                  size={23}
                  className="text-purple-400"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Opening Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Please contact us for today's
                  opening hours.
                </p>

              </div>

            </div>

            {/* Contact */}

            <div className="flex gap-4 mt-7">

              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center">

                <Phone
                  size={23}
                  className="text-green-400"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Contact Us
                </h3>

                <p className="text-gray-400 mt-2">
                  Contact us on WhatsApp for bookings,
                  enquiries and availability.
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-3 mt-9">

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >

                <Navigation size={18} />

                Get Directions

              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-green-400/30 bg-green-500/10 text-green-400 px-5 py-3 inline-flex items-center gap-2 hover:bg-green-500/20 transition"
              >

                <MessageCircle size={18} />

                WhatsApp

              </a>

            </div>

          </motion.div>

          {/* Google Maps */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden min-h-[500px]"
          >

            <iframe
              src="https://www.google.com/maps?q=Himalaya%20Falaknuma%2C%20Juhapura%2C%20Ahmedabad%2C%20Gujarat%20380055&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "500px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Gaming Hub Location"
            />

          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8 text-center"
        >

          <h3 className="text-3xl font-bold">
            Ready to Play?
          </h3>

          <p className="text-gray-400 mt-3">
            Book your gaming session and come experience
            Elite Gaming Hub.
          </p>

          <a
            href="/booking"
            className="btn-primary inline-flex mt-6"
          >
            Book Your Session
          </a>

        </motion.div>

      </div>
    </section>
  );
}