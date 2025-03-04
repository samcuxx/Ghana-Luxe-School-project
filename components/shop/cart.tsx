"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart, getCartTotal } from "@/lib/context/cart-context";
import products from "@/data/products.json";

export function Cart() {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = state.items.map((item) => {
    const product = products.products.find((p) => p.id === item.id);
    return {
      ...item,
      product,
    };
  });

  const total = getCartTotal(state.items);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
          {state.items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              {state.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                      <Image
                        src={item.product?.images[0] || ""}
                        alt={item.product?.name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product?.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        GH₵ {item.product?.price.toLocaleString()}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: {
                                id: item.id,
                                quantity: Math.max(1, item.quantity - 1),
                              },
                            })
                          }
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: {
                                id: item.id,
                                quantity: item.quantity + 1,
                              },
                            })
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-auto"
                          onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", payload: item.id })
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>GH₵ {total.toLocaleString()}</span>
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
