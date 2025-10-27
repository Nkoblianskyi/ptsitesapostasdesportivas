export function SportsFeaturesSection() {
  return (
    <section className="py-12 relative overflow-hidden md:py-2.5 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg z-0 shadow-lg"></div>

        <div className="relative z-10 p-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Recursos para Apostas Online</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça as principais ferramentas e opções disponíveis nas plataformas de apostas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apostas em Tempo Real</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-green-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Jogos ao Vivo</h4>
                    <p className="text-gray-600 text-sm">Cotações atualizadas durante eventos desportivos</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-green-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Basquetebol</h4>
                    <p className="text-gray-600 text-sm">Competições NBA, Euroliga e ligas nacionais</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-green-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Ténis</h4>
                    <p className="text-gray-600 text-sm">Torneios Grand Slam e circuitos ATP/WTA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modalidades de Aposta</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-red-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Apostas Individuais</h4>
                    <p className="text-gray-600 text-sm">Vencedor, marcadores, estatísticas</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-red-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Apostas Múltiplas</h4>
                    <p className="text-gray-600 text-sm">Várias seleções para cotações elevadas</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/70 rounded-lg border border-red-200">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Mercados Especiais</h4>
                    <p className="text-gray-600 text-sm">Marcador inicial, cartões, alterações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
