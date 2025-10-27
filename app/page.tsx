"use client"

import { useState } from "react"
import Image from "next/image"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { MarketOverviewSection } from "@/components/market-overview-section"
import { SportsFeaturesSection } from "@/components/sports-features-section"
import { ResponsibleGamingSection } from "@/components/responsible-gaming-section"
import { ExpertGuideSection } from "@/components/expert-guide-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col relative bg-black/60">
      <div className="fixed inset-0 z-0">
        <Image
          src="/portuguese-football-stadium-background-with-red-an.png"
          alt="Fundo de apostas"
          fill
          className="object-cover bg-black/70"
          priority
        />
      </div>

      <div className="relative z-10">
        <HeroSection
          onAgeModalOpen={() => setIsAgeModalOpen(true)}
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
        />

        {/* Betting Sites List */}
        <div id="betting-sites" className="relative">
          <BettingSitesList />
        </div>

        <MarketOverviewSection />
        <SportsFeaturesSection />
        <ResponsibleGamingSection />

        <ExpertGuideSection />
      </div>

      <div className="relative z-10">
        <TopOffersModal />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      </div>
    </main>
  )
}
