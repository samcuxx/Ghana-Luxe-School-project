import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background/80 via-background/60 to-background/95">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Ghana Luxe
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your premier destination for luxury designer bags in Ghana. Discover elegance, quality and style.
            </p>
            <div className="flex items-center space-x-6 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-base font-semibold bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-base font-semibold bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-base font-semibold bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ghana Luxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
