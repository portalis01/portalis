import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/constants/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-forest-green text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-warm-gold text-xs uppercase tracking-[0.3em] block mb-4">
                Get In Touch
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6">
                Contact Us
              </h2>
              <p className="text-white text-sm font-normal leading-relaxed max-w-sm">
                We would love to hear about your project. Reach out to us and let&apos;s create something beautiful together.
              </p>
            </div>

            {/* Details list */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-warm-gold mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-gold">Address</h4>
                  <p className="text-white/95 text-xs font-normal mt-1">
                    {CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-warm-gold mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-gold">Phone</h4>
                  <p className="text-white/95 text-xs font-normal mt-1">
                    {CONTACT.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-warm-gold mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-gold">Email</h4>
                  <p className="text-white/95 text-xs font-normal mt-1">
                    {CONTACT.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-warm-gold mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-gold">Hours</h4>
                  <p className="text-white/95 text-xs font-normal mt-1">
                    {CONTACT.hours.weekday}<br />{CONTACT.hours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Map preview block */}
            <div className="relative w-full h-[180px] border border-warm-gold/20 overflow-hidden">
              <Image
                src="/assets/extracted_img_p20_2_183.jpeg"
                alt="Lunico Interior Detail Location Map Overlay"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-forest-green/20 flex items-center justify-center">
                <div className="bg-forest-green border border-warm-gold p-3 flex items-center gap-2">
                  <MapPin size={14} className="text-warm-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-white">Find Us On Map</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 flex flex-col p-6 md:p-10 lg:p-12 border border-warm-gold/20 bg-teal-green/10">
            <span className="text-warm-gold text-[10px] uppercase tracking-[0.25em] font-semibold mb-6 block">
              Send Us A Message
            </span>
            <h3 className="font-heading text-2xl text-white mb-6">
              Let&apos;s Start Your Dream Project
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
