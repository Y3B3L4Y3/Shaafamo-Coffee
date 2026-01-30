import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MasonryGrid from "@/components/MasonryGrid";
import { HorizontalGallery } from "@/components/MasonryGrid";
import Image from "next/image";

export const metadata = {
  title: "Gallery | Shaafamo Coffee",
  description:
    "Explore the beauty of our coffee farm in Sidama, Ethiopia. See the journey from cherry to cup through our photo gallery.",
};

const heroImages = [
    {
      src: "/images/farm-aerial-1.webp",
    alt: "Aerial view of Shaafamo coffee farm",
    caption: "Our washing station in Sidama",
  },
    {
      src: "/images/cherries-closeup.webp",
    alt: "Close-up of ripe coffee cherries",
    caption: "Ripe cherries ready for harvest",
  },
    {
      src: "/images/farm-aerial-2.webp",
    alt: "Panoramic view of the Ethiopian highlands",
    caption: "The lush Sidama landscape",
  },
];

const galleryCategories = [
  {
    title: "The Harvest",
    description: "Hand-picked at peak ripeness",
    images: [
      {
          src: "/images/farmer-basket.webp",
        alt: "Farmer with freshly picked cherries",
        caption: "Hand-picked with care",
      },
      {
          src: "/images/cherries-closeup.webp",
        alt: "Vibrant red coffee cherries",
        caption: "Peak ripeness",
      },
      {
          src: "/images/cherries-drying-1.webp",
        alt: "Cherries spread for drying",
        caption: "Natural process begins",
      },
    ],
  },
  {
    title: "The Process",
    description: "Traditional sun-drying on raised beds",
    images: [
      {
          src: "/images/cherries-drying-2.webp",
        alt: "Cherries drying under Ethiopian sun",
        caption: "15-20 days of careful drying",
      },
      {
          src: "/images/workers-sorting.webp",
        alt: "Workers inspecting coffee quality",
        caption: "Quality at every step",
      },
      {
          src: "/images/parchment-drying.webp",
        alt: "Washed parchment coffee drying",
        caption: "Washed process parchment",
      },
    ],
  },
  {
    title: "Our Farm",
    description: "Nestled in the Sidama highlands",
    images: [
      {
          src: "/images/farm-aerial-1.webp",
        alt: "Aerial view of the washing station",
        caption: "Our processing facility",
      },
      {
          src: "/images/farm-aerial-2.webp",
        alt: "The surrounding Ethiopian forest",
        caption: "1,800m altitude",
      },
      {
          src: "/images/drying-beds-wide.webp",
        alt: "Rows of raised drying beds",
        caption: "Traditional raised beds",
      },
    ],
  },
];

const allGalleryImages = [
   { src: "/images/cherries-closeup.webp", alt: "Coffee cherries close-up", caption: "Ripe red cherries" },
   { src: "/images/farmer-basket.webp", alt: "Farmer with harvest", caption: "Hand-picked perfection" },
   { src: "/images/cherries-drying-1.webp", alt: "Cherries drying", caption: "Natural sun-drying", span: "tall" as const },
   { src: "/images/farm-aerial-1.webp", alt: "Farm aerial view", caption: "Our Sidama farm", span: "wide" as const },
   { src: "/images/workers-sorting.webp", alt: "Quality inspection", caption: "Expert quality control", span: "wide" as const },
   { src: "/images/cherries-drying-2.webp", alt: "Drying process", caption: "Traditional methods" },
   { src: "/images/parchment-drying.webp", alt: "Parchment coffee", caption: "Washed process" },
   { src: "/images/farm-aerial-2.webp", alt: "Ethiopian highlands", caption: "Sidama landscape", span: "wide" as const },
   { src: "/images/parchment-closeup.webp", alt: "Dried parchment detail", caption: "Ready for export" },
   { src: "/images/drying-beds-wide.webp", alt: "Drying beds panorama", caption: "Raised African beds", span: "tall" as const },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
            <Image
              src="/images/farm-aerial-2.webp"
            alt="Ethiopian coffee landscape"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <div className="section-divider mx-auto mb-6" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              A visual journey through our coffee farm in Sidama, Ethiopia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Featured
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mt-2">
                Highlights from the Farm
              </h2>
            </div>
          </ScrollReveal>
          <HorizontalGallery images={heroImages} />
        </div>
      </section>

      {/* Category Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="section-divider mx-auto mb-4" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee-bean">
                  {category.title}
                </h2>
                <p className="text-text-muted mt-2">{category.description}</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {category.images.map((image, imageIndex) => (
                <ScrollReveal key={imageIndex} delay={imageIndex * 0.1}>
                  <div className="group relative aspect-[4/5] rounded-xl overflow-hidden card-elegant bg-white">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Full Masonry Gallery */}
      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-leaf-olive font-medium tracking-widest uppercase text-sm">
                Complete Collection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee-bean mt-2 mb-4">
                All Photos
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Explore our complete gallery showcasing the beauty and craftsmanship
                behind every cup of Shaafamo Coffee.
              </p>
            </div>
          </ScrollReveal>

          <MasonryGrid images={allGalleryImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-espresso text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Experience Our Coffee
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              These images tell the story of dedication and craftsmanship.
              Ready to taste the difference?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-coffee-bean font-medium rounded-full btn-gold transition-all hover:bg-gold-light"
            >
              Get in Touch
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

