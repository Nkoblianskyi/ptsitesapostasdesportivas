"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1150px] mx-auto flex items-center justify-center h-16 px-4 overflow-hidden border-b-4 border-gradient-to-r from-green-600 to-red-600">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
          <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <Image src="/favicon.ico" alt="Logo" width={46} height={46} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="uppercase text-lg font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-green-700 group-hover:to-red-700 leading-none truncate">
              pt sites apostas desportivas
            </span>
          </div>
        </Link>
      </div>
    </header>
  )
}
