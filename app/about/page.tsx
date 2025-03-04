import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&auto=format&fit=crop&q=60"
            alt="About Ghana Luxe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="container relative flex h-full items-center">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                About Ghana Luxe
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Your premier destination for luxury designer bags in Ghana,
                where tradition meets contemporary style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-24">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-12 shadow-lg backdrop-blur">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At Ghana Luxe, we&apos;re dedicated to bringing the finest designer
                    bags to Ghana while celebrating our rich cultural heritage. We
                    believe in combining traditional African craftsmanship with
                    contemporary design to create unique, high-quality pieces that
                    tell a story.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our commitment to quality, authenticity, and customer
                    satisfaction drives everything we do. We source the finest
                    materials and work with skilled artisans to create bags that are
                    not just accessories, but pieces of art that reflect the spirit
                    of Ghana.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-24 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 py-24">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-card to-background p-8 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-semibold">Quality</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We never compromise on quality, ensuring each piece meets our
                high standards of craftsmanship and durability.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-card to-background p-8 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-semibold">Authenticity</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every bag we offer is authentic, sourced directly from trusted
                manufacturers and verified for authenticity.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-card to-background p-8 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-semibold">Heritage</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We celebrate Ghana&apos;s rich cultural heritage by incorporating
                traditional elements into our designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="pb-24">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">Our Team</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl bg-gradient-to-br from-card to-background p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative mx-auto mb-6 h-56 w-56 overflow-hidden rounded-full ring-4 ring-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold">Sarah Mensah</h3>
              <p className="text-lg text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="group rounded-xl bg-gradient-to-br from-card to-background p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative mx-auto mb-6 h-56 w-56 overflow-hidden rounded-full ring-4 ring-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold">Kwame Addo</h3>
              <p className="text-lg text-muted-foreground">Creative Director</p>
            </div>
            <div className="group rounded-xl bg-gradient-to-br from-card to-background p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative mx-auto mb-6 h-56 w-56 overflow-hidden rounded-full ring-4 ring-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold">Abena Osei</h3>
              <p className="text-lg text-muted-foreground">Head of Operations</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
