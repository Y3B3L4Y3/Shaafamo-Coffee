import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";

export const metadata = {
  title: "Our Coffee | Shaafamo Coffee",
  description:
    "Explore our range of premium Ethiopian specialty coffees. From natural to washed process, discover the unique flavors of Sidama.",
};

const products = [
  {
    name: "Natural Process",
    subtitle: "Sun-Dried Whole Cherry",
    description:
      "Our signature natural process coffee. Cherries are dried whole on raised beds for 15-20 days, developing intense fruity sweetness with notes of blueberry, strawberry, and dark chocolate.",
  image: "/images/cherries-drying-1.webp",
    notes: ["Blueberry", "Strawberry", "Dark Chocolate", "Wine"],
    process: "Natural / Dry",
    altitude: "1,800 - 2,000m",
    variety: "Heirloom Ethiopian",
  },
  {
    name: "Washed Process",
    subtitle: "Clean & Bright",
    description:
      "Cherries are depulped and fermented before washing, creating a clean cup with bright acidity. Expect citrus notes, floral aromas, and a tea-like body.",
  image: "/images/parchment-drying.webp",
    notes: ["Citrus", "Jasmine", "Bergamot", "Honey"],
    process: "Washed",
    altitude: "1,800 - 2,000m",
    variety: "Heirloom Ethiopian",
  },
  {
    name: "Honey Process",
    subtitle: "Sweet & Complex",
    description:
      "A hybrid method where some mucilage remains on the bean during drying. The result is a complex cup balancing the fruit of natural with the clarity of washed.",
  image: "/images/cherries-drying-2.webp",
    notes: ["Peach", "Brown Sugar", "Caramel", "Nuts"],
    process: "Honey",
    altitude: "1,800 - 2,000m",
    variety: "Heirloom Ethiopian",
  },
];

const features = [
  {
    title: "Single Origin",
    description: "100% traceable to our family farm in Sidama",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Hand-Picked",
    description: "Only ripe cherries selected at peak sweetness",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    title: "Sun-Dried",
    description: "Traditional raised bed drying for optimal flavor",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Small Batch",
    description: "Carefully processed in limited quantities",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <Hero
        imageSrc="/images/cherries-closeup.webp"
        title="Our Coffee"
        subtitle="Specialty grade Ethiopian coffee, crafted with generations of expertise"
        showCTA={false}
        height="large"
      />

      {/* Features Bar */}
      <section className="py-12 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-3">
                  <div className="text-leaf-olive">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-cream/60 text-xs">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Our Selection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6">
                Specialty Coffee Offerings
              </h2>
              <p className="text-text-muted text-lg">
                Each process brings out unique characteristics of our heirloom
                Ethiopian varieties. Explore and find your perfect cup.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <span className="text-leaf-olive font-medium tracking-wider uppercase text-sm">
                      {product.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-coffee-bean mt-2 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-text-muted text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Tasting Notes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-coffee-bean mb-2">
                        Tasting Notes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.map((note, noteIndex) => (
                          <span
                            key={noteIndex}
                            className="px-3 py-1 bg-leaf-olive/10 text-leaf-olive rounded-full text-sm"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">
                          Process
                        </p>
                        <p className="text-coffee-bean font-medium">{product.process}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">
                          Altitude
                        </p>
                        <p className="text-coffee-bean font-medium">{product.altitude}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">
                          Variety
                        </p>
                        <p className="text-coffee-bean font-medium text-sm">
                          {product.variety}
                        </p>
                      </div>
                    </div>

                    <AnimatedButton href="/contact" variant="primary">
                      Inquire About This Coffee
                    </AnimatedButton>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-20 md:py-32 bg-espresso text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/farm-aerial-1.webp"
            alt="Farm background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <div>
                <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                  For Roasters & Importers
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Wholesale Partnerships
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed mb-4">
                  We work directly with specialty roasters and importers who share
                  our commitment to quality and fair trade practices.
                </p>
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  Our green coffee is available in various lot sizes, with full
                  traceability and documentation. Let&apos;s build a lasting
                  partnership.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Direct trade with full traceability",
                    "Consistent quality across seasons",
                    "Flexible lot sizes available",
                    "Export documentation provided",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-leaf-olive flex-shrink-0"
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
                <AnimatedButton href="/contact" variant="outline">
                  Request Samples
                </AnimatedButton>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/workers-sorting.webp"
                    alt="Quality control process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mb-6">
              Ready to Order?
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
              Contact us to discuss your coffee needs, request samples, or learn
              more about our current offerings and availability.
            </p>
            <AnimatedButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </AnimatedButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

