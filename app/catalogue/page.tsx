import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "Summer Collection 2024",
    description: "Bright and bold designs perfect for the summer season",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60",
    link: "/shop?collection=summer-2024",
  },
  {
    name: "African Heritage Series", 
    description: "Celebrating Ghana's rich cultural heritage through design",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60",
    link: "/shop?collection=african-heritage",
  },
  {
    name: "Luxury Essentials",
    description: "Timeless pieces for the modern professional",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=60",
    link: "/shop?collection=luxury-essentials",
  },
];

const lookbook = [
  {
    title: "Urban Style",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=60",
    description: "Street style inspiration with our latest designs",
  },
  {
    title: "Business Elegance",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
    description: "Professional looks for the modern workplace",
  },
  {
    title: "Evening Glamour",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&auto=format&fit=crop&q=60",
    description: "Stunning pieces for special occasions",
  },
];

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&auto=format&fit=crop&q=60"
            alt="Ghana Luxe Catalogue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="container relative flex h-full items-center">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Our Catalogue
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Discover our latest collections and style inspiration, crafted with elegance and tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">
            Featured Collections
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-background shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="mb-3 text-2xl font-semibold">
                    {collection.name}
                  </h3>
                  <p className="mb-6 text-base text-white/90">
                    {collection.description}
                  </p>
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="w-fit bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <Link href={collection.link}>
                      Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-primary/5" />
        <div className="container relative">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">
            Style Lookbook
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lookbook.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="transform text-base text-white/90 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
