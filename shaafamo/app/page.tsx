import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedButton from "@/components/AnimatedButton";
import { HorizontalGallery } from "@/components/MasonryGrid";
import Image from "next/image";

const featuredImages = [
  {
    src: "/images/cherries-drying-1.jpg",
    alt: "Red coffee cherries drying in the sun",
    caption: "Sun-dried cherries at our Sidama farm",
  },
  {
    src: "/images/farm-aerial-1.jpg",
    alt: "Aerial view of coffee drying beds",
    caption: "Our traditional raised drying beds",
  },
  {
    src: "/images/farmer-basket.jpg",
    alt: "Farmer with basket of fresh cherries",
    caption: "Hand-picked with generations of expertise",
  },
  {
    src: "/images/workers-sorting.jpg",
    alt: "Workers sorting dried coffee",
    caption: "Quality control at every step",
  },
  {
    src: "/images/parchment-drying.jpg",
    alt: "Parchment coffee drying",
    caption: "Natural sun-drying process",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Hand-Picked",
    description:
      "Only the ripest cherries are selected by our experienced farmers, ensuring exceptional quality from the start.",
    image: "/images/farmer-basket.jpg",
  },
  {
    number: "02",
    title: "Sun-Dried",
    description:
      "Cherries are spread on raised African beds, dried slowly under the Sidama sun for 15-20 days.",
    image: "/images/cherries-drying-2.jpg",
  },
  {
    number: "03",
    title: "Carefully Processed",
    description:
      "Each batch is monitored and turned by hand to ensure even drying and perfect fermentation.",
    image: "/images/workers-sorting.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section with Video Background */}
      <Hero
        videoSrc="/images/hero-video.mp4"
        imageSrc="/images/farm-aerial-1.jpg"
        title="Shaafamo Coffee"
        subtitle="Premium specialty coffee from the highlands of Sidama, Ethiopia. Hand-picked with care, sun-dried to perfection."
      />

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <ScrollReveal variant="slideLeft">
              <div className="max-w-xl">
                <div className="section-divider-olive mb-6" />
                <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                  Our Heritage
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-bean mt-4 mb-6 leading-tight">
                  From the Heart of Ethiopia
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Nestled in the lush highlands of Sidama, our family farm has been
                  cultivating exceptional coffee for generations. The rich volcanic
                  soil, perfect altitude, and time-honored traditions create a coffee
                  experience unlike any other.
                </p>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  Every bean tells a story of dedication, from careful hand-picking
                  at peak ripeness to meticulous sun-drying on traditional raised beds.
                  This is coffee crafted with love and expertise.
                </p>
                <AnimatedButton href="/about" variant="primary">
                  Discover Our Story
                </AnimatedButton>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal variant="slideRight" delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/cherries-closeup.jpg"
                    alt="Close-up of red coffee cherries"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-leaf-olive/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-coffee-bean/10 rounded-full -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-espresso text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-divider mx-auto mb-6" />
              <span className="text-leaf-olive-light font-medium tracking-widest uppercase text-sm">
                Farm to Cup
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Our Process
              </h2>
              <p className="text-cream/70 text-lg">
                From the moment a cherry is picked to when it reaches your cup,
                every step is guided by tradition and expertise.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 font-serif text-5xl font-bold text-leaf-olive/50">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">
                    {step.description}
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
              <div className="section-divider-olive mx-auto mb-6" />
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Our Farm
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-bean mt-4 mb-6">
                Life in Sidama
              </h2>
              <p className="text-text-muted text-lg">
                A glimpse into the beautiful landscapes and dedicated people behind
                every cup of Shaafamo Coffee.
              </p>
            </div>
          </ScrollReveal>

          <HorizontalGallery images={featuredImages} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-coffee-bean text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,800m", label: "Altitude" },
              { number: "100%", label: "Hand-Picked" },
              { number: "15-20", label: "Days Drying" },
              { number: "3+", label: "Generations" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div>
                  <span className="font-serif text-4xl md:text-5xl font-bold">
                    {stat.number}
                  </span>
                  <p className="text-cream/70 mt-2 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="section-divider-brown mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-bean mb-6">
              Ready to Experience <br />
              <span className="text-gradient-olive">Exceptional Coffee?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
              Connect with us to learn more about our specialty coffee offerings,
              wholesale partnerships, or to place an order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Get in Touch
              </AnimatedButton>
              <AnimatedButton href="/products" variant="olive" size="lg">
                View Products
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
