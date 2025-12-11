import { Shield, Target, Users, TrendingUp, Award, Heart } from "lucide-react"

export const metadata = {
  title: "Sobre Nós | ptsitesapostasdesportivas.com",
  description:
    "Descubra a nossa missão de ajudar apostadores portugueses a encontrar as melhores casas de apostas online com análises detalhadas e imparciais.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border-l-8 border-green-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Sobre Nós</h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              A sua fonte confiável de informação sobre apostas desportivas em Portugal
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">A Nossa Missão</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    O ptsitesapostasdesportivas.com nasceu com um objetivo claro: simplificar a escolha de casas de
                    apostas para jogadores portugueses. Num mercado repleto de opções, sabemos que encontrar uma
                    plataforma segura, confiável e adequada às suas necessidades pode ser desafiante. Por isso,
                    dedicamo-nos a testar, analisar e comparar as principais operadoras licenciadas em Portugal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-red-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Como Avaliamos</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Cada casa de apostas no nosso portal passa por uma análise rigorosa baseada em critérios objetivos.
                    A nossa equipa examina pessoalmente cada aspeto da experiência do utilizador, desde o registo
                    inicial até ao levantamento de ganhos.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Segurança e Licenciamento</h3>
                      <p className="text-gray-600 text-sm">
                        Verificamos licenças SRIJ, protocolos de encriptação e políticas de proteção de dados para
                        garantir a sua segurança.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Bónus e Promoções</h3>
                      <p className="text-gray-600 text-sm">
                        Analisamos ofertas de boas-vindas, requisitos de apostas e promoções regulares para identificar
                        o melhor valor.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Mercados e Odds</h3>
                      <p className="text-gray-600 text-sm">
                        Comparamos a variedade de desportos, tipos de apostas e competitividade das cotações oferecidas.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Métodos de Pagamento</h3>
                      <p className="text-gray-600 text-sm">
                        Testamos depósitos e levantamentos, avaliando rapidez, taxas e disponibilidade de métodos
                        portugueses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-amber-600">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Os Nossos Princípios</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparência Total</h3>
                  <p className="text-gray-700 text-sm">
                    Revelamos sempre a nossa metodologia e relações comerciais. Sem avaliações pagas ou enviesadas.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Informação Atualizada</h3>
                  <p className="text-gray-700 text-sm">
                    Revisamos constantemente as nossas análises para refletir mudanças em bónus, funcionalidades e
                    serviços.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jogo Responsável</h3>
                  <p className="text-gray-700 text-sm">
                    Promovemos apostas conscientes e destacamos ferramentas de autoexclusão e limites de depósito.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Quem Somos</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Somos uma equipa de entusiastas de apostas desportivas, analistas de dados e especialistas em
                    segurança digital com anos de experiência no mercado português. Combinamos conhecimento técnico com
                    paixão pelo desporto para criar análises que realmente ajudam os apostadores a tomar decisões
                    informadas. Cada membro da nossa equipa contribui com perspetivas únicas, desde estratégias de
                    apostas até avaliação de plataformas tecnológicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 border-l-4 border-gray-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Nos Financiamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O ptsitesapostasdesportivas.com é totalmente gratuito para os nossos visitantes. Geramos receita através
                de parcerias de afiliação com casas de apostas licenciadas. Quando se regista numa plataforma através
                dos nossos links, podemos receber uma comissão sem qualquer custo adicional para si.
              </p>
              <p className="text-gray-700 leading-relaxed">
                É importante sublinhar que estas parcerias nunca influenciam as nossas classificações ou recomendações.
                Avaliamos todas as operadoras com os mesmos critérios rigorosos, independentemente de acordos
                comerciais. A nossa reputação depende da confiança dos nossos utilizadores, e levamos essa
                responsabilidade muito a sério.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
