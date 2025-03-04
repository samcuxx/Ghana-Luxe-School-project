"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import products from "@/data/products.json";

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(products.products.map((p) => p.category)),
  ];

  const filteredProducts = products.products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      {/* Hero Section */}
      <div className="relative mb-16 bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Discover Our Collection
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Handcrafted luxury bags that blend traditional Ghanaian design with modern elegance
          </p>
        </div>
      </div>

      <div className="container px-4">
        {/* Filters Section */}
        <div className="mb-12 rounded-xl bg-gradient-to-r from-card/50 to-background p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">Browse Products</h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-card to-card/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-6 space-y-3 p-2">
                <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-primary">
                    GH₵ {product.price.toLocaleString()}
                  </p>
                  <Button variant="ghost" size="sm" className="opacity-0 transition-opacity group-hover:opacity-100">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
