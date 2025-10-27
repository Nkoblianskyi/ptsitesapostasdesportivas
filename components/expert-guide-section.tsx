import { Award, BarChart3, CheckCircle2, Lightbulb, Search, TrendingUp } from "lucide-react"

export function ExpertGuideSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 max-w-[1150px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Award className="h-5 w-5" />
            <span className="font-semibold">Orientação Especializada</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">O Seu Guia Completo de Apostas</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como escolher as melhores casas de apostas em Portugal com a nossa análise detalhada e imparcial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Análise Rigorosa</h3>
            <p className="text-gray-600 leading-relaxed">
              Testamos pessoalmente cada plataforma, avaliando desde o processo de registo até aos levantamentos,
              garantindo que apenas recomendamos operadores de confiança.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Licenças Verificadas</h3>
            <p className="text-gray-600 leading-relaxed">
              Confirmamos que todas as casas de apostas possuem licenciamento válido do SRIJ, assegurando total
              conformidade com a legislação portuguesa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ofertas Exclusivas</h3>
            <p className="text-gray-600 leading-relaxed">
              Negociamos bónus especiais e promoções vantajosas para os nossos utilizadores, maximizando o valor da sua
              experiência de apostas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Metodologia de Avaliação</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Segurança e Licenciamento:</span>
                  <span className="text-gray-600"> Verificação de certificações e proteção de dados</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Variedade de Mercados:</span>
                  <span className="text-gray-600"> Amplitude de desportos e tipos de apostas disponíveis</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Odds Competitivas:</span>
                  <span className="text-gray-600"> Comparação de cotações entre diferentes operadores</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Experiência do Utilizador:</span>
                  <span className="text-gray-600"> Facilidade de navegação e qualidade da aplicação móvel</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Apoio ao Cliente:</span>
                  <span className="text-gray-600"> Disponibilidade e eficácia do suporte em português</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Como Começar</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Siga estes passos simples para iniciar a sua jornada nas apostas desportivas com segurança:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Compare as Opções</h4>
                  <p className="text-gray-600 text-sm">
                    Consulte o nosso ranking e escolha a casa de apostas que melhor se adequa às suas preferências
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Registe-se com Segurança</h4>
                  <p className="text-gray-600 text-sm">
                    Utilize os nossos links para aceder a bónus exclusivos e complete o registo em minutos
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Defina os Seus Limites</h4>
                  <p className="text-gray-600 text-sm">
                    Configure ferramentas de jogo responsável antes de fazer o primeiro depósito
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Comece a Apostar</h4>
                  <p className="text-gray-600 text-sm">
                    Explore os mercados disponíveis e faça as suas primeiras apostas de forma consciente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
