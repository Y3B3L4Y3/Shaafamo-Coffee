"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedButton from "@/components/AnimatedButton";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Location",
    details: ["Sidama, Ethiopia"],
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Phone",
    details: ["+251 931 405 096", "+251 912 680 223"],
    link: "tel:+251931405096",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email",
    details: ["teshalelankamo@gmail.com"],
    link: "mailto:teshalelankamo@gmail.com",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Wholesale Partnership",
  "Sample Request",
  "Farm Visit",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <Hero
        imageSrc="/images/farm-aerial-2.webp"
        title="Contact Us"
        subtitle="Let's start a conversation about exceptional Ethiopian coffee"
        showCTA={false}
        height="medium"
      />

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <ScrollReveal variant="slideLeft">
              <div>
                <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                  Get in Touch
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  Whether you&apos;re interested in wholesale partnerships, sample
                  requests, or just want to learn more about our coffee, we&apos;re
                  here to help.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-full bg-leaf-olive/10 flex items-center justify-center text-leaf-olive flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-coffee-bean mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) =>
                          info.link ? (
                            <a
                              key={detailIndex}
                              href={info.link}
                              className="block text-text-muted hover:text-leaf-olive transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={detailIndex} className="text-text-muted">
                              {detail}
                            </p>
                          )
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-espresso rounded-2xl text-cream">
                  <h4 className="font-serif text-xl font-semibold mb-4">
                    Wholesale Inquiries
                  </h4>
                  <p className="text-cream/80 leading-relaxed mb-4">
                    For roasters and importers interested in establishing a direct
                    trade relationship, we offer:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Green coffee samples",
                      "Detailed lot information",
                      "Flexible shipping options",
                      "Export documentation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-leaf-olive"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-cream/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="slideRight" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-leaf-olive/10 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-leaf-olive"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-coffee-bean mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-text-muted mb-8">
                      Thank you for reaching out. We&apos;ll get back to you as soon
                      as possible.
                    </p>
                    <AnimatedButton
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                      variant="primary"
                    >
                      Send Another Message
                    </AnimatedButton>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl font-bold text-coffee-bean mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-coffee-bean mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-olive focus:border-transparent transition-all bg-cream/50"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-coffee-bean mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-olive focus:border-transparent transition-all bg-cream/50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-coffee-bean mb-2"
                        >
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-olive focus:border-transparent transition-all bg-cream/50"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium text-coffee-bean mb-2"
                        >
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-olive focus:border-transparent transition-all bg-cream/50 appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="">Select an option</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-coffee-bean mb-2"
                        >
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-olive focus:border-transparent transition-all bg-cream/50 resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <AnimatedButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </AnimatedButton>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Our Origin
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6">
                Sidama, Ethiopia
              </h2>
              <p className="text-text-muted text-lg">
                Our farm is located in the heart of Ethiopia&apos;s renowned coffee
                region, where the perfect combination of altitude, soil, and
                climate creates exceptional coffee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl bg-espresso/10">
              {/* Placeholder for map - you could integrate Google Maps or use a static image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-leaf-green/20 to-espresso/20">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cherry-red flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-coffee-bean mb-2">
                    Sidama Coffee Region
                  </h3>
                  <p className="text-text-muted">
                    Southern Ethiopia • 1,800m Altitude
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

