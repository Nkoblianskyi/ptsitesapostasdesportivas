"use client"
import Image from "next/image"
import { Award, Star } from "lucide-react"

interface HeroSectionProps {
  onAgeModalOpen: () => void
  onAdvertiserModalOpen: () => void
}

export function HeroSection({ onAgeModalOpen, onAdvertiserModalOpen }: HeroSectionProps) {
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
    return `${months[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <section className="relative text-gray-900 overflow-hidden">
      <div className="container mx-auto px-2 md:px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 py-8">
          <div className="mb-4">
            <h1 className="text-lg md:text-xl font-bold mb-2 leading-tight text-gray-900">
              DESCUBRA AS <span className="text-green-600">PRINCIPAIS</span> CASAS DE APOSTAS PORTUGUESAS
            </h1>
            <p className="text-sm md:text-lg text-gray-700 max-w-2xl mx-auto">
              Comparações detalhadas, ofertas vantajosas e guias completos para apostadores em Portugal
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center">
              <div className="bg-green-100 p-1 rounded-md mr-2 border border-green-300 items-center text-center">
                <Image src="/srij.svg" alt="escudo" width={20} height={20} />
              </div>
              <span className="text-[10px] font-medium text-gray-800">Regulado pelo SRIJ</span>
            </div>

            <div className="flex items-center">
              <div className="bg-red-100 p-1 rounded-md mr-2 border border-red-300">
                <Award className="h-4 w-4 text-red-600" />
              </div>
              <span className="text-[10px] font-medium text-gray-800">Ofertas Competitivas</span>
            </div>

            <div className="flex items-center">
              <div className="bg-yellow-100 p-1 rounded-md mr-2 border border-yellow-300">
                <Star className="h-4 w-4 text-yellow-600" />
              </div>
              <span className="text-[10px] font-medium text-gray-800">Avaliações Detalhadas</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-[10px] text-gray-700">
              Jogue com responsabilidade. Aplicam-se termos e condições de apostas.{" "}
              <button
                onClick={onAdvertiserModalOpen}
                className="text-green-600 hover:text-green-700 hover:underline font-medium transition-colors duration-300"
              >
                Info Anunciante
              </button>{" "}
              |{" "}
              <button
                onClick={onAgeModalOpen}
                className="text-green-600 hover:text-green-700 hover:underline font-medium transition-colors duration-300"
              >
                Apenas +18
              </button>
            </p>

            <div className="mt-3 pt-2 border-t border-gray-300">
              <p className="text-[10px] text-gray-600">
                Lista atualizada em <span className="font-semibold text-green-600">{getCurrentDateInPortuguese()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
