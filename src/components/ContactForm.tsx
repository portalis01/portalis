"use client";

import { useState } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";

const fieldClass =
  "w-full rounded-md bg-light-cream/60 border border-forest-green/20 text-charcoal-black text-[15px] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-charcoal-black/40 focus:border-forest-green focus:bg-white focus:ring-2 focus:ring-forest-green/10";

const labelClass = "text-[13px] font-semibold text-forest-green";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitType, setSubmitType] = useState<"whatsapp" | "email">("whatsapp");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("success");

    const subject = encodeURIComponent("New Inquiry - Portalis Interiors");
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`;
    const encodedBody = encodeURIComponent(bodyText);

    if (submitType === "whatsapp") {
      // wa.me needs digits only (no +, spaces or dashes)
      const whatsappUrl = `https://wa.me/971555222074?text=${encodedBody}`;
      window.open(whatsappUrl, "_blank");
    } else {
      const mailtoUrl = `mailto:info@portalis.ae?subject=${subject}&body=${encodedBody}`;
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("idle");
    }, 4000);
  };

  const toggleOption = (active: boolean) =>
    `flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold cursor-pointer transition-colors duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-forest-green/40 ${
      active ? "bg-forest-green text-white" : "text-forest-green hover:bg-forest-green/5"
    }`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-warm-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-warm-gold">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Your message <span className="text-warm-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your space: type, location and when you'd like to open."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Send via + Send button on one row (stacked on phones) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <fieldset className="flex items-center gap-3">
          <legend className="sr-only">Send via</legend>
          <span aria-hidden="true" className={labelClass}>Send via</span>
          <div className="inline-flex rounded-full border border-forest-green/20 p-1 bg-light-cream/60">
            <label className={toggleOption(submitType === "whatsapp")}>
              <input
                type="radio"
                name="submitType"
                value="whatsapp"
                checked={submitType === "whatsapp"}
                onChange={() => setSubmitType("whatsapp")}
                className="sr-only"
              />
              <MessageCircle size={14} /> WhatsApp
            </label>
            <label className={toggleOption(submitType === "email")}>
              <input
                type="radio"
                name="submitType"
                value="email"
                checked={submitType === "email"}
                onChange={() => setSubmitType("email")}
                className="sr-only"
              />
              <Mail size={14} /> Email
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="self-start sm:self-auto rounded-full bg-warm-gold hover:bg-forest-green hover:text-white text-forest-green text-[11px] uppercase tracking-[0.18em] font-semibold py-3 px-7 transition-colors duration-300 inline-flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
        >
          <Send size={13} />
          {submitType === "whatsapp" ? "Send on WhatsApp" : "Send by email"}
        </button>
      </div>

      {/* Status messages */}
      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === "success" && (
          <p className="text-forest-green text-sm">
            {submitType === "whatsapp"
              ? "WhatsApp is opening with your message. Press send there to reach us."
              : "Your email app is opening with your message. Press send there to reach us."}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-700 text-sm">
            Please fill in your name, email and message.
          </p>
        )}
      </div>
    </form>
  );
}