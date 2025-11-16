import { FiAward, FiTruck, FiHeadphones, FiShield, FiClock, FiTool } from 'react-icons/fi'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiAward,
      title: 'Rivenditore Ufficiale',
      description: 'Partner certificato Fortinet con accesso a tutti i prodotti e licenze originali.',
    },
    {
      icon: FiTruck,
      title: 'Spedizione Rapida',
      description: 'Spedizione gratuita in Italia per ordini superiori a €500. Consegna in 24-48 ore.',
    },
    {
      icon: FiHeadphones,
      title: 'Supporto Specializzato',
      description: 'Team tecnico italiano disponibile per consulenza pre e post vendita.',
    },
    {
      icon: FiShield,
      title: 'Prodotti Originali',
      description: '100% prodotti originali Fortinet con garanzia ufficiale del produttore.',
    },
    {
      icon: FiClock,
      title: 'Consegna Veloce',
      description: 'Stock disponibile in Italia per consegne rapide in tutto il territorio nazionale.',
    },
    {
      icon: FiTool,
      title: 'Servizi di Installazione',
      description: 'Servizi professionali di installazione, configurazione e formazione disponibili.',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Perché Scegliere FortiStore Italia</h2>
          <p className="section-subtitle">
            Il partner di fiducia per le tue soluzioni di sicurezza Fortinet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-fortinet-red/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-fortinet-red w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-fortinet-dark text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-fortinet-red mb-2">500+</div>
              <div className="text-gray-300">Clienti Attivi</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-fortinet-red mb-2">1000+</div>
              <div className="text-gray-300">Dispositivi Installati</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-fortinet-red mb-2">98%</div>
              <div className="text-gray-300">Clienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-fortinet-red mb-2">24/7</div>
              <div className="text-gray-300">Supporto Disponibile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
