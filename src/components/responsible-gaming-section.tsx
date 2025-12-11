import { AlertTriangle, Heart, Phone, Shield } from "lucide-react"

export function ResponsibleGamingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 max-w-[1150px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Jogo Responsável</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proteja o Seu Bem-Estar</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As apostas devem ser uma forma de entretenimento. Mantenha sempre o controlo e jogue de forma responsável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors">
            <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ferramentas de Controlo</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span>Estabeleça limites diários, semanais ou mensais de depósito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span>Configure pausas automáticas durante as suas sessões</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span>Ative períodos de autoexclusão temporária ou permanente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span>Receba notificações sobre o tempo de jogo decorrido</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100 hover:border-amber-300 transition-colors">
            <div className="bg-amber-100 p-3 rounded-xl w-fit mb-6">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sinais de Alerta</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">⚠</span>
                <span>Apostar valores superiores ao planeado inicialmente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">⚠</span>
                <span>Tentar recuperar perdas através de novas apostas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">⚠</span>
                <span>Negligenciar responsabilidades pessoais ou profissionais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">⚠</span>
                <span>Sentir ansiedade ou irritação quando não está a jogar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 shadow-lg border-2 border-red-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-xl">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Precisa de Ajuda?</h3>
              <p className="text-gray-700">
                Se sente que o jogo está a afetar negativamente a sua vida, não hesite em procurar apoio especializado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Linha Vida</h4>
              <p className="text-2xl font-bold text-red-600 mb-2">1414</p>
              <p className="text-sm text-gray-600">Apoio psicológico gratuito, 24 horas por dia</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Linha SOS Jogador</h4>
              <p className="text-2xl font-bold text-red-600 mb-2">213 950 787</p>
              <p className="text-sm text-gray-600">Dias úteis das 10h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
