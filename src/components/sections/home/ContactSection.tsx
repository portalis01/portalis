import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/constants/contact";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Portalis Interiors, ${CONTACT.address}`
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-12 bg-light-cream text-charcoal-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                Get In Touch
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-forest-green mb-6">
                Contact Us
              </h2>
              <p className="text-charcoal-black/85 text-[15px] font-normal leading-relaxed max-w-sm">
                We would love to hear about your project. Reach out to us and let&apos;s create something beautiful together.
              </p>
            </div>

            {/* Details list */}
            <div className="space-y-6 pt-8 border-t border-forest-green/15">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-warm-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-forest-green/70">Address</h4>
                  <p className="text-charcoal-black text-sm font-normal mt-1">
                    {CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-warm-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-forest-green/70">Phone</h4>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="block text-charcoal-black text-sm font-normal mt-1 hover:text-forest-green hover:underline underline-offset-4"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-warm-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-forest-green/70">Email</h4>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="block text-charcoal-black text-sm font-normal mt-1 hover:text-forest-green hover:underline underline-offset-4"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-warm-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-forest-green/70">Hours</h4>
                  <p className="text-charcoal-black text-sm font-normal mt-1">
                    {CONTACT.hours.weekday}<br />{CONTACT.hours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Map preview — opens Google Maps */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full h-[180px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
            >
              <Image
                src="/assets/extracted_img_p20_2_183.jpeg"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <span className="rounded-full bg-white text-forest-green px-5 py-2.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold shadow-sm group-hover:bg-forest-green group-hover:text-white transition-colors duration-300">
                  <MapPin size={14} />
                  Find us on map
                </span>
              </div>
            </a>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 flex flex-col p-6 md:p-10 lg:p-12 bg-white border border-warm-gold/20">
            <span className="text-warm-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 block">
              Send Us A Message
            </span>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}