"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import products from "@/data/products.json";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&auto=format&fit=crop&q=80",
    title: "Discover Our Premium Collection",
    description:
      "Handcrafted luxury bags that blend traditional Ghanaian design with modern elegance.",
    cta: "Shop Now",
    link: "/shop",
    overlay:
      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1200&auto=format&fit=crop&q=80",
    title: "Limited Edition Pieces",
    description:
      "Exclusive designs that tell stories of Ghanaian heritage and craftsmanship.",
    cta: "View Collection",
    link: "/catalogue",
    overlay:
      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200&auto=format&fit=crop&q=80",
    title: "Sustainable Luxury",
    description:
      "Eco-friendly materials meet timeless design in our sustainable collection.",
    cta: "Learn More",
    link: "/about",
    overlay:
      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
  },
];

export default function Home() {
  const featuredProducts = products.products.slice(0, 3);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section with Carousel */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide relative h-full">
                <div
                  className="absolute inset-0 z-10"
                  style={{ background: slide.overlay }}
                />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                        {slide.description}
                      </p>
                      <Link href={slide.link}>
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className={`embla__button embla__button--prev ${
            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className={`embla__button embla__button--next ${
            !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="embla__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="group flex items-center space-x-4 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                Premium Quality
              </h3>
              <p className="text-sm text-muted-foreground">
                Finest materials & craftsmanship
              </p>
            </div>
          </div>
          <div className="group flex items-center space-x-4 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                Latest Trends
              </h3>
              <p className="text-sm text-muted-foreground">
                Stay ahead of fashion
              </p>
            </div>
          </div>
          <div className="group flex items-center space-x-4 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                Fast Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Quick & reliable shipping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <Button variant="ghost" asChild className="group">
            <Link href="/shop">
              View All{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group relative overflow-hidden rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="aspect-square overflow-hidden rounded-md">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2 p-4">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <p className="font-semibold text-primary">
                  GH₵ {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <Button variant="ghost" asChild className="group">
            <Link href="/catalogue">
              View All{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Tote Bags", "Crossbody Bags", "Shoulder Bags"].map((category) => (
            <Link
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`https://images.unsplash.com/photo-${
                  category === "Tote Bags"
                    ? "1584917865442-de89df76afd3"
                    : category === "Crossbody Bags"
                    ? "1591561954557-26941169b49e"
                    : "1590874103328-eac38a683ce7"
                }?w=800&auto=format&fit=crop&q=60`}
                alt={category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
