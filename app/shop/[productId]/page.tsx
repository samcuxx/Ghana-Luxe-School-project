"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Package, Shield, Truck } from "lucide-react";
import { useCart } from "@/lib/context/cart-context";
import products from "@/data/products.json";

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);
  const { dispatch } = useCart();
  const product = products.products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        <div className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl border shadow-lg">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg border shadow-md"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
                <p className="text-3xl font-semibold text-primary">
                  GH₵ {product.price.toFixed(2)}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(0 reviews)</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4 text-center">
                  <Truck className="mb-2 h-6 w-6 text-primary" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4 text-center">
                  <Shield className="mb-2 h-6 w-6 text-primary" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4 text-center">
                  <Package className="mb-2 h-6 w-6 text-primary" />
                  <span className="text-sm">Secure Package</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Features</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-lg">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Specifications</h3>
                  <div className="rounded-xl bg-muted/30 p-4">
                    <ul className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key} className="flex justify-between text-lg">
                          <span className="font-medium capitalize">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-lg hover:from-primary/90 hover:to-primary"
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product.id })
                  }
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="aspect-square">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
