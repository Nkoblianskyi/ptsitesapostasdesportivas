"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  const headerTexts = [
    "Melhor Avaliado", // Best Rated (first card - gold)
    "Melhor Bónus", // Top Bookmaker
    "Mais Popular", // Most Popular
    "Em Tendência", // Trending
    "Escolha Premium", // Premium Choice
    "Recomendado", // Recommended
    "Favorito dos Jogadores", // Players' Favorite
  ]

  const getCurrentDateInPortuguese = () => {
    const now = new Date()
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
    const month = months[now.getMonth()]
    const year = now.getFullYear()
    return `${month} ${year}`
  }

  return (
    <section className="pt-4 pb-8 relative z-10">
      <div className="container mx-auto px-2 relative z-10 max-w-[1150px]">
        <div className="w-full space-y-2">
          {sites.map((site, index) => (
            <Link
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener referrer"
              className={`block rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up overflow-hidden ${
                index === 0 ? "border-2 border-yellow-500 bg-white" : "border-2 border-green-500 bg-white"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {index === 0 && (
                <div className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 py-2 md:py-3 px-4 flex items-center justify-center gap-2">
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">
                    {headerTexts[0]}
                  </span>
                </div>
              )}

              {index > 0 && (
                <div className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 py-2 md:py-3 px-4 flex items-center justify-center gap-2">
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">
                    {headerTexts[index] || headerTexts[1]}
                  </span>
                </div>
              )}

              {/* Desktop Layout */}
              <div className="hidden md:grid">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                  <div className="md:col-span-3 p-3 md:p-6 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-[140px]">
                      <div className="bg-black rounded-lg p-2 md:p-4 shadow-sm mb-2 md:mb-3 w-full h-16 md:h-20 flex items-center justify-center overflow-hidden border border-gray-200">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={48}
                          className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 md:h-5 md:w-5 text-yellow-500 transition-transform duration-300 hover:scale-125"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-bold text-gray-900">{site.rating.toFixed(1)}</span>
                        <span className="text-[10px] md:text-xs text-gray-600">({site.reviews || 2500} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 p-3 md:p-6 flex flex-col justify-center text-center">
                    <div className="mb-2 md:mb-4">
                      <p className="text-[10px] md:text-xs text-green-700 uppercase font-semibold">
                        OFERTA DE BOAS-VINDAS
                      </p>
                      <p className="font-bold text-base md:text-xl text-gray-900">{site.bonus}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 p-3 md:p-6 flex flex-col items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="relative mb-3 md:mb-6">
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm md:text-base py-4 md:py-6"
                          asChild
                        >
                          <span className="flex items-center justify-center">OBTER BÓNUS</span>
                        </Button>
                      </div>
                      <p className="text-[10px] md:text-xs text-center text-gray-600">
                        18+. T&Cs Apply. Jogue com Responsabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col gap-3 p-3">
                <div className="grid grid-cols-2 items-start gap-2 min-h-[100px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="bg-black p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center overflow-hidden border border-gray-200">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={100}
                        height={40}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                    <div className="uppercase font-bold mb-1 text-xs text-green-700">OFERTA DE BOAS-VINDAS</div>
                    <div className="font-bold text-black text-lg leading-tight">{site.bonus}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-gray-300 min-h-[60px]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{site.rating.toFixed(1)}</div>
                    <div className="text-[10px] text-gray-600 font-semibold">Pontuação</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <div className="text-[10px] text-gray-600 font-semibold">({site.reviews})</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 font-semibold shadow animate-glow animate-blink"
                        asChild
                      >
                        <span>Obter Bónus</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center"></div>
      </div>
    </section>
  )
}
