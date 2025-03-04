"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/lib/context/cart-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </CartProvider>
  );
}
