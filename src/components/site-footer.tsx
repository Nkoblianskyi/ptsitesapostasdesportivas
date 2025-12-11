import Link from "next/link"
import { Info, AlertTriangle, Trophy } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-white text-gray-800 relative z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-[1150px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gray-200 pb-8">
          {/* Logo and description */}
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="flex items-center group flex-shrink-0 min-w-0">
              <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="uppercase text-xs font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-green-700 group-hover:to-red-700 leading-none truncate">
                  ptsitesapostasdesportivas
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm">
              O seu guia de confiança para as melhores plataformas de apostas em Portugal. Oferecemos análises
              especializadas, bónus exclusivos e comparações detalhadas para melhorar a sua experiência de apostas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-green-600 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-green-600 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-green-600 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-green-600 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming Section */}
          <div className="md:col-span-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900 text-center">Jogo Responsável</h3>
            <div className="space-y-5">
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="bg-gradient-to-r from-green-600 to-red-600 p-2 rounded-full">
                    <span className="text-white font-bold text-sm">18+</span>
                  </div>
                  <span className="font-semibold text-gray-900">Restrição de Idade</span>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Todos os sites de apostas apresentados na nossa plataforma exigem que os utilizadores tenham pelo
                  menos 18 anos de idade. O jogo por menores é estritamente proibido.
                </p>
              </div>

              <p className="text-sm text-gray-600 text-center">
                O jogo deve ser uma forma divertida de entretenimento, não uma forma de ganhar dinheiro. Jogue sempre de
                forma responsável e dentro das suas possibilidades. Se tem preocupações sobre os seus hábitos de jogo,
                procure ajuda de serviços de apoio profissionais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Organizations */}
      <div className="border-t border-gray-200 pt-8 mb-8">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <h4 className="text-gray-900 font-bold mb-6 text-center text-lg">Organizações</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-gray-200"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-gray-200"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-100 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-gray-200"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-gray-200"
            >
              <img
                src="/srij.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-gray-200"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="flex items-start gap-4 text-sm text-gray-600">
            <Info className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p>
              ptsitesapostasdesportivas.com fornece informações apenas para fins de entretenimento. Podemos receber
              compensação dos nossos parceiros quando utiliza os nossos links para os seus sites. Todo o conteúdo
              destina-se a indivíduos com mais de 18 anos localizados em Portugal. O jogo envolve risco e deve ser
              abordado de forma responsável. Se tem preocupações sobre os seus hábitos de jogo, procure ajuda
              profissional.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 ptsitesapostasdesportivas.com. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-xs text-gray-600">O jogo pode ser viciante. Jogue com responsabilidade.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
