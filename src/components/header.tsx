"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#investment", label: "Investment" },
    { href: "#founders", label: "Founders" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#portal", label: "Investor Portal" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="w-12 h-8 bg-primary flex items-center justify-center" style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'}}>
              <span className="text-primary-foreground font-bold text-sm">GMS</span>
            </a>
            <span className="text-foreground font-semibold text-lg tracking-wide">Geo Mineral Science</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">Contact Us</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
