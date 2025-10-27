import { Shield, TrendingUp, Users } from "lucide-react"

export function MarketOverviewSection() {
  return (
    <section className="py-12 relative overflow-hidden md:py-2.5 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg z-0 shadow-lg"></div>

        <div className="relative z-10 p-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Apostas Desportivas em Portugal</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore o ecossistema de apostas português e descubra como selecionar operadores confiáveis e licenciados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:border-green-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licenciamento SRIJ</h3>
              <p className="text-gray-700">
                Todos os operadores apresentados detêm autorização oficial do Serviço de Regulação e Inspeção de Jogos,
                assegurando conformidade total com as normas nacionais de jogo online.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eventos Desportivos</h3>
              <p className="text-gray-700">
                Primeira Liga, competições europeias, ligas internacionais e modalidades variadas com cotações atrativas
                para os entusiastas portugueses de apostas desportivas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:border-red-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assistência Nacional</h3>
              <p className="text-gray-700">
                Apoio ao cliente disponível em língua portuguesa, com profissionais que compreendem as particularidades
                e expectativas dos utilizadores nacionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
