"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Cart } from "@/components/shop/cart";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top announcement bar */}
      <div className="hidden h-12 items-center justify-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 text-sm font-medium text-foreground/80 md:flex">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Free shipping on orders over GH₵500 • Easy returns
        </span>
      </div>

      {/* Main header */}
      <div className="bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="container mx-auto">
          <div className="flex h-20 items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild className="mr-4 md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-blue-100 dark:hover:bg-blue-900/20">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-900/10 dark:to-purple-900/10"
                >
                  <SheetHeader>
                    <SheetTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Ghana Luxe
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-8 flex flex-col space-y-5">
                    <Link
                      href="/shop"
                      className="text-lg font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Shop
                    </Link>
                    <Link
                      href="/catalogue"
                      className="text-lg font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Catalogue
                    </Link>
                    <Link
                      href="/size-guide"
                      className="text-lg font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Size Guide
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Contact
                    </Link>
                    <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800"></div>
                    <Link
                      href="/faq"
                      className="text-sm text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/shipping"
                      className="text-sm text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Shipping
                    </Link>
                    <Link
                      href="/returns"
                      className="text-sm text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    >
                      Returns
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center space-x-2">
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ghana Luxe
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                href="/shop"
                className="text-sm font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              >
                Shop
              </Link>
              <Link
                href="/catalogue"
                className="text-sm font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              >
                Catalogue
              </Link>
              <Link
                href="/size-guide"
                className="text-sm font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              >
                Size Guide
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              >
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="ml-auto flex items-center space-x-4">
              <form className="hidden lg:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search products..."
                    className="h-10 w-[300px] rounded-full border bg-background/50 pl-10 pr-4 text-sm transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:bg-background"
                  />
                </div>
              </form>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-blue-100 dark:hover:bg-blue-900/20"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-blue-100 dark:hover:bg-blue-900/20"
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
