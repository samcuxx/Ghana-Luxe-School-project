"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import products from "@/data/products.json";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { state, dispatch } = useCart();

  // Calculate cart total
  const cartItems = state.items.map((item) => {
    const product = products.products.find((p) => p.id === item.id);
    return {
      ...item,
      product,
    };
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.product?.price || 0) * item.quantity,
    0
  );
  const shipping = 50; // Fixed shipping cost
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: productId });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: productId, quantity: newQuantity },
      });
    }
  };

  const handleRemoveItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-6 rounded-2xl bg-gradient-to-r from-card/50 to-background p-12 text-center shadow-lg backdrop-blur">
            <div className="rounded-full bg-primary/10 p-6">
              <ShoppingCart className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                Your cart is empty
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Add some items to your cart and they will appear here
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              asChild
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        <h1 className="mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent">
          Shopping Cart
        </h1>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-6 rounded-2xl bg-gradient-to-r from-card/50 to-background p-6 shadow-lg backdrop-blur"
                >
                  <div className="relative h-32 w-32 overflow-hidden rounded-xl border shadow-md">
                    {item.product?.images[0] && (
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name || "Product image"}
                        width={100}
                        height={100}
                        className="h-24 w-24 rounded-md object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {item.product?.name}
                    </h3>
                    <p className="text-primary">
                      GH₵ {item.product?.price.toFixed(2)}
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary/10"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary/10"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 rounded-full text-destructive hover:bg-destructive/10"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">
                      GH₵{" "}
                      {((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Order Summary</h2>
            <div className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="font-medium">
                      {item.product?.name}{" "}
                      <span className="text-primary">x {item.quantity}</span>
                    </span>
                    <span className="font-medium">
                      GH₵{" "}
                      {((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-primary/10 pt-6">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      GH₵ {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping</span>
                    <span className="font-medium">
                      GH₵ {shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-primary/10 pt-4 text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">GH₵ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary/90 text-lg hover:from-primary/90 hover:to-primary"
                asChild
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full text-lg hover:bg-primary/10"
                asChild
              >
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
