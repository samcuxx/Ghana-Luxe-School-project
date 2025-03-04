import { Ruler, ShoppingBag, Briefcase, Backpack } from "lucide-react";

const sizeCategories = [
  {
    title: "Mini Bags",
    icon: ShoppingBag,
    description: "Perfect for essentials and evening outings",
    sizes: [
      {
        name: "Mini Crossbody", 
        dimensions: "15cm x 10cm x 5cm",
        capacity: "Fits phone, keys, cards",
        use: "Evening events, minimal carry",
      },
      {
        name: "Small Clutch",
        dimensions: "20cm x 12cm x 3cm", 
        capacity: "Fits phone, wallet, lipstick",
        use: "Formal events, dinner outings",
      },
    ],
  },
  {
    title: "Medium Bags",
    icon: ShoppingBag,
    description: "Ideal for everyday use and shopping",
    sizes: [
      {
        name: "Medium Tote",
        dimensions: "35cm x 25cm x 15cm",
        capacity: "Fits A4 documents, water bottle",
        use: "Work, shopping, day trips",
      },
      {
        name: "Shoulder Bag",
        dimensions: "30cm x 20cm x 10cm",
        capacity: "Fits tablet, wallet, essentials", 
        use: "Daily commute, casual outings",
      },
    ],
  },
  {
    title: "Large Bags",
    icon: Briefcase,
    description: "Spacious options for work and travel",
    sizes: [
      {
        name: "Large Tote",
        dimensions: "45cm x 35cm x 20cm",
        capacity: "Fits laptop, files, gym clothes",
        use: "Work, weekend trips",
      },
      {
        name: "Weekender Bag",
        dimensions: "50cm x 30cm x 25cm",
        capacity: "Fits 2-3 days of clothing",
        use: "Short trips, gym bag",
      },
    ],
  },
  {
    title: "Travel Bags",
    icon: Backpack,
    description: "Designed for longer trips and maximum capacity",
    sizes: [
      {
        name: "Large Duffel",
        dimensions: "60cm x 35cm x 30cm",
        capacity: "Fits 5-7 days of clothing",
        use: "Week-long trips, sports equipment",
      },
      {
        name: "Travel Backpack",
        dimensions: "55cm x 35cm x 25cm",
        capacity: "Fits 3-5 days of clothing",
        use: "Adventure travel, hiking",
      },
    ],
  },
];

const sizeTips = [
  {
    title: "Measure Your Items",
    content:
      "Before purchasing, measure the items you plan to carry regularly to ensure they fit comfortably.",
  },
  {
    title: "Consider Usage",
    content:
      "Think about how you'll use the bag - for work, travel, or casual outings - to determine the right size.",
  },
  {
    title: "Check Dimensions",
    content:
      "Pay attention to both external and internal dimensions, especially for structured bags.",
  },
  {
    title: "Weight Distribution",
    content:
      "Larger bags can carry more but consider the weight you're comfortable carrying.",
  },
];

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-purple-50/10 to-blue-50/10 dark:from-background dark:via-purple-950/10 dark:to-blue-950/10">
      <div className="container py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-purple-400 dark:to-blue-400">
            Size Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find the perfect bag size for your needs. Our comprehensive guide
            helps you choose the right dimensions for your lifestyle.
          </p>
        </div>

        {/* Size Categories */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2">
          {sizeCategories.map((category) => (
            <div 
              key={category.title} 
              className="overflow-hidden rounded-2xl border bg-card p-8 shadow-lg transition-all hover:shadow-xl dark:border-gray-800"
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-3 dark:from-purple-600 dark:to-blue-600">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <p className="mb-8 text-muted-foreground">{category.description}</p>
              <div className="space-y-6">
                {category.sizes.map((size) => (
                  <div
                    key={size.name}
                    className="rounded-xl bg-gradient-to-r from-purple-50/50 to-blue-50/50 p-6 transition-all hover:from-purple-100/50 hover:to-blue-100/50 dark:from-purple-950/50 dark:to-blue-950/50 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50"
                  >
                    <h3 className="mb-3 text-xl font-semibold">
                      {size.name}
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <Ruler className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span>{size.dimensions}</span>
                      </div>
                      <p className="flex items-center space-x-3">
                        <span className="font-medium">Capacity:</span> {size.capacity}
                      </p>
                      <p className="flex items-center space-x-3">
                        <span className="font-medium">Best for:</span> {size.use}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Size Tips */}
        <div className="mb-20">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Tips for Choosing the Right Size
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sizeTips.map((tip) => (
              <div 
                key={tip.title}
                className="rounded-xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-800"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Size Comparison */}
        <div className="mb-20 overflow-hidden rounded-2xl border bg-card p-8 shadow-lg dark:border-gray-800">
          <h2 className="mb-8 text-3xl font-bold">
            Visual Size Comparison
          </h2>
          <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-950/50 dark:to-blue-950/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg text-muted-foreground">
                Size comparison visualization coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold">Need Help Choosing?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our customer service team can help you find the perfect bag size for
            your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
