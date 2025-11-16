import Link from 'next/link'
import { FiArrowRight, FiShield, FiCheckCircle } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-fortinet-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-fortinet-red/20 border border-fortinet-red/30 rounded-full px-4 py-2 mb-6">
              <FiShield className="text-fortinet-red" />
              <span className="text-sm font-semibold">Rivenditore Ufficiale Fortinet</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluzioni di Sicurezza{' '}
              <span className="text-fortinet-red">Fortinet</span>{' '}
              per la Tua Azienda
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              FortiGate, FortiWiFi, FortiSwitch, FortiAP. Protezione completa per la tua rete aziendale.
              Spedizione in tutta Italia.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {[
                'Firewall di Nuova Generazione (NGFW)',
                'Protezione dalle Minacce Avanzate',
                'SD-WAN e Gestione Centralizzata',
                'Supporto Tecnico Specializzato in Italiano',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/prodotti" className="btn-primary inline-flex items-center justify-center gap-2">
                Esplora Prodotti
                <FiArrowRight />
              </Link>
              <Link href="/preventivo" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center gap-2">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-fortinet-red mb-1">500+</div>
                  <div className="text-sm text-gray-400">Clienti Soddisfatti</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fortinet-red mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Supporto Tecnico</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fortinet-red mb-1">100%</div>
                  <div className="text-sm text-gray-400">Prodotti Originali</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="bg-fortinet-red/20 p-3 rounded-lg">
                      <FiShield className="text-fortinet-red" size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FortiGate NGFW</h3>
                      <p className="text-gray-300 text-sm">Firewall di ultima generazione</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-transform ml-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FortiWiFi & FortiAP</h3>
                      <p className="text-gray-300 text-sm">Rete wireless sicura</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FortiSwitch</h3>
                      <p className="text-gray-300 text-sm">Switch gestiti sicuri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-fortinet-red/20 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
