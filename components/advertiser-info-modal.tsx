"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-5 md:p-6 animate-scale-in border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-2">
            <div className="bg-gradient-to-br from-green-600 to-red-600 p-2 rounded-lg shadow-md">
              <Info className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Informação do Anunciante</h2>
              <p className="text-xs text-gray-500 mt-0.5">Transparência e Confiança</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:bg-gray-100 rounded-lg p-1.5"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="text-sm text-gray-700 space-y-3">
          <div className="bg-amber-50 border-l-4 border-green-600 p-3 rounded-r-lg">
            <p className="font-medium text-gray-900 mb-1.5">Sobre o Nosso Serviço</p>
            <p>
              ptsitesapostasdesportivas.com é um serviço gratuito dedicado a ajudá-lo a encontrar as melhores
              plataformas de apostas desportivas em Portugal.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-red-600 p-3 rounded-r-lg">
            <p className="font-medium text-gray-900 mb-1.5">Modelo de Negócio</p>
            <p>
              Recebemos comissões das marcas em destaque no nosso site, o que pode afetar a sua posição nas nossas
              listagens. Esta parceria permite-nos manter o serviço gratuito para si.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-orange-600 p-3 rounded-r-lg">
            <p className="font-medium text-gray-900 mb-1.5">Compromisso com a Qualidade</p>
            <p>
              Todos os sites apresentados são licenciados por autoridades reguladoras respeitáveis. Esforçamo-nos pela
              máxima precisão, mas recomendamos sempre verificar os termos completos no website do operador.
            </p>
          </div>

          <p className="text-xs text-gray-500 italic pt-1">
            Bónus e ofertas estão sujeitos a alterações. Leia sempre os termos e condições completos antes de aceitar
            qualquer oferta.
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 transition-all duration-300 text-sm py-2 px-5 text-white font-semibold rounded-lg"
          >
            Compreendi
          </Button>
        </div>
      </div>
    </div>
  )
}
