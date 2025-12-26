import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import MasonryGrid from "@/components/MasonryGrid";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";

export const metadata = {
  title: "Our Story | Shaafamo Coffee",
  description:
    "Discover the heritage and tradition behind Shaafamo Coffee. From the highlands of Sidama, Ethiopia, our family has crafted exceptional coffee for generations.",
};

const timelineEvents = [
  {
    year: "Heritage",
    title: "Generations of Expertise",
    description:
      "Coffee farming has been part of our family's identity for over three generations. The knowledge of cultivating, picking, and processing coffee has been passed down through the years.",
  },
  {
    year: "Location",
    title: "Sidama Highlands",
    description:
      "Our farm sits at 1,800 meters above sea level in the fertile Sidama region. The volcanic soil, perfect climate, and abundant rainfall create ideal conditions for growing specialty coffee.",
  },
  {
    year: "Process",
    title: "Traditional Methods",
    description:
      "We honor time-tested methods while embracing quality improvements. Our raised African drying beds, hand-sorting, and careful fermentation ensure exceptional cup quality.",
  },
  {
    year: "Future",
    title: "Sustainable Growth",
    description:
      "We're committed to sustainable farming practices that protect our land for future generations while providing fair opportunities for our community.",
  },
];

const galleryImages = [
  {
    src: "/images/cherries-drying-1.jpg",
    alt: "Red coffee cherries drying on raised beds",
    caption: "Natural sun-drying on raised African beds",
  },
  {
    src: "/images/farm-aerial-1.jpg",
    alt: "Aerial view of the coffee farm",
    caption: "Our washing station surrounded by forest",
    span: "wide" as const,
  },
  {
    src: "/images/farmer-basket.jpg",
    alt: "Farmer holding basket of cherries",
    caption: "Hand-picked at peak ripeness",
  },
  {
    src: "/images/cherries-drying-2.jpg",
    alt: "Coffee cherries drying in sunlight",
    caption: "15-20 days of careful drying",
  },
  {
    src: "/images/workers-sorting.jpg",
    alt: "Workers inspecting dried coffee",
    caption: "Quality inspection at every stage",
    span: "wide" as const,
  },
  {
    src: "/images/parchment-drying.jpg",
    alt: "Parchment coffee on drying beds",
    caption: "Washed process parchment drying",
  },
  {
    src: "/images/farm-aerial-2.jpg",
    alt: "Panoramic view of the farm",
    caption: "The beauty of Sidama",
    span: "wide" as const,
  },
  {
    src: "/images/cherries-closeup.jpg",
    alt: "Close-up of coffee cherries",
    caption: "Ripe red cherries ready for picking",
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Passion",
    description: "Every bean is handled with genuine care and love for our craft.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality",
    description: "We never compromise on quality, from seed to cup.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sustainability",
    description: "Protecting our land and community for generations to come.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community",
    description: "Supporting local farmers and fair trade practices.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <Hero
        imageSrc="/images/farm-aerial-2.jpg"
        title="Our Story"
        subtitle="Three generations of coffee excellence from the highlands of Sidama, Ethiopia"
        showCTA={false}
        height="large"
      />

      {/* Story Introduction */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/workers-sorting.jpg"
                    alt="Workers inspecting coffee quality"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-coffee-bean/10 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <div>
                <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                  Who We Are
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6 leading-tight">
                  A Family Legacy of Excellence
                </h2>
                <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                  <p>
                    Shaafamo Coffee is more than a brand—it&apos;s a family heritage rooted
                    in the fertile highlands of Sidama, Ethiopia. For over three
                    generations, our family has dedicated themselves to the art of
                    growing exceptional coffee.
                  </p>
                  <p>
                    Our name, &quot;Shaafamo,&quot; represents our commitment to purity and
                    excellence. We believe that great coffee starts with respect—for
                    the land, for traditional methods, and for the people who make it
                    all possible.
                  </p>
                  <p>
                    Today, we continue this legacy, combining time-honored techniques
                    with modern quality standards to bring you coffee that tells the
                    story of its origin in every sip.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Our Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
                The Shaafamo Story
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-coffee-bean/30" />

            <StaggerContainer className="space-y-12 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <StaggerItem key={index}>
                  <div
                    className={`md:flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 md:text-right">
                      {index % 2 === 0 && (
                        <div className={`bg-espresso-light p-6 rounded-xl ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                          <span className="text-leaf-olive font-serif text-xl font-semibold">
                            {event.year}
                          </span>
                          <h3 className="font-serif text-2xl font-bold mt-2 mb-3">
                            {event.title}
                          </h3>
                          <p className="text-cream/70 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-coffee-bean" />
                    </div>

                    <div className="flex-1">
                      {index % 2 !== 0 && (
                        <div className="bg-espresso-light p-6 rounded-xl md:ml-8">
                          <span className="text-leaf-olive font-serif text-xl font-semibold">
                            {event.year}
                          </span>
                          <h3 className="font-serif text-2xl font-bold mt-2 mb-3">
                            {event.title}
                          </h3>
                          <p className="text-cream/70 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                What Drives Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-coffee-bean/10 flex items-center justify-center mx-auto mb-4 text-leaf-olive group-hover:bg-coffee-bean group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-coffee-bean mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Visual Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6">
                Life at the Farm
              </h2>
              <p className="text-text-muted text-lg">
                Experience the beauty and dedication that goes into every batch
                of Shaafamo Coffee.
              </p>
            </div>
          </ScrollReveal>

          <MasonryGrid images={galleryImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-coffee-bean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Experience Our Coffee
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Ready to taste the difference that generations of expertise make?
              Explore our specialty coffees or get in touch to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/products" variant="outline" size="lg">
                View Products
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                Contact Us
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

