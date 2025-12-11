import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "ptsitesapostasdesportivas - Sites de Apostas em Portugal 2025",
  description:
    "Descubra os melhores sites de apostas desportivas em Portugal. Bónus exclusivos, análises especializadas e comparações detalhadas para uma experiência de apostas superior.",
  generator: "v0.app",
  keywords: "apostas desportivas, sites de apostas Portugal, bónus apostas, casas de apostas portuguesas",
  openGraph: {
    title: "ptsitesapostasdesportivas - Sites de Apostas Portugal",
    description: "Os melhores sites de apostas desportivas em Portugal com bónus exclusivos",
    url: "https://ptsitesapostasdesportivas.com",
    siteName: "ptsitesapostasdesportivas",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
