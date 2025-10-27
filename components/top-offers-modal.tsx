"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star, Gift, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in p-3">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl animate-scale-in border-2 border-red-500">
        <div className="bg-gradient-to-r from-green-600 via-red-600 to-red-700 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div>
              <h2 className="text-base md:text-lg font-bold">OFERTA PREMIUM</h2>
              <p className="text-xs text-white/90">Exclusiva para Novos Jogadores</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-all duration-300 bg-white/20 hover:bg-white/30 rounded-full p-1.5"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4">
          <div className="text-center mb-3">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 px-3 py-1 text-xs font-semibold animate-pulse">
              <TrendingUp className="h-3 w-3 mr-1 inline" />
              OFERTA POR TEMPO LIMITADO
            </Badge>
          </div>

          <Link
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-lg"
          >
            <Card className="border-2 border-green-500 bg-white shadow-lg">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="bg-black p-3 rounded-xl shadow-md mb-3 flex items-center justify-center w-48 h-32 border-2 border-gray-100">
                  <Image
                    src={topSite.logo || "/placeholder.svg"}
                    alt={topSite.name}
                    width={160}
                    height={100}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="flex items-center justify-center mb-2 bg-amber-50 px-3 py-1.5 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-yellow-500" fill="currentColor" />
                  ))}
                  <span className="font-bold text-base text-gray-900 ml-2">{topSite.rating.toFixed(1)}</span>
                </div>

                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-300 mb-2 text-xs font-semibold px-2.5 py-0.5"
                >
                  OFERTA DE BOAS-VINDAS
                </Badge>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg mb-3 w-full border border-red-200">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">{topSite.bonus}</h3>
                </div>

                <div className="w-full">
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm py-5 font-bold rounded-lg"
                    asChild
                  >
                    <span className="flex items-center justify-center gap-2">
                      
                      RECLAMAR BÓNUS AGORA
                    </span>
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-2 leading-relaxed">
                    18+. Termos e Condições Aplicam-se. Jogue com Responsabilidade.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
