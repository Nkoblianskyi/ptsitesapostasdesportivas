"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-5 md:p-6 animate-scale-in border-4 border-red-500">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-2">
            <div className="bg-gradient-to-br from-green-600 to-red-600 p-2 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-base">18+</span>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Restrição de Idade</h2>
              <p className="text-xs text-red-600 mt-0.5 font-medium">Apenas para maiores de 18 anos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:bg-red-50 rounded-lg p-1.5"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="text-sm text-gray-700 space-y-3">
          <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 mb-1.5">Confirmação de Idade</p>
                <p>
                  Este website é destinado exclusivamente a indivíduos com 18 anos ou mais. Ao utilizar o nosso site,
                  confirma que cumpre este requisito legal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-orange-600 p-3 rounded-r-lg">
            <p className="font-medium text-gray-900 mb-1.5">Jogo Responsável</p>
            <p>
              As apostas devem ser encaradas apenas como entretenimento. Nunca aposte dinheiro que não pode perder e
              estabeleça sempre limites para si próprio.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-r-lg">
            <p className="font-medium text-gray-900 mb-1.5">Precisa de Ajuda?</p>
            <p>
              Se tem problemas com jogos de azar, procure ajuda profissional. Em Portugal, pode contactar o SICAD
              (Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências) ou outros serviços de apoio
              especializados.
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <p className="text-xs text-gray-600">
              Linha de Apoio SICAD: <span className="font-semibold text-gray-900">+351 211 119 000</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 transition-all duration-300 text-sm py-2 px-5 text-white font-semibold rounded-lg"
          >
            Compreendo e Aceito
          </Button>
        </div>
      </div>
    </div>
  )
}
