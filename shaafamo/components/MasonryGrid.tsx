"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  span?: "normal" | "wide" | "tall";
}

interface MasonryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function MasonryGrid({ images, columns = 3 }: MasonryGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const columnClasses = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className={`${columnClasses[columns]} gap-4 space-y-4`}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-xl bg-cream-dark">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={image.span === "tall" ? 800 : image.span === "wide" ? 400 : 600}
                  className="w-full h-auto object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption && (
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-cream text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-cream hover:text-leaf-green transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// Horizontal Scroll Gallery Alternative
interface HorizontalGalleryProps {
  images: GalleryImage[];
}

export function HorizontalGallery({ images }: HorizontalGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 snap-center first:pl-4 last:pr-4"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] overflow-hidden rounded-xl group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

