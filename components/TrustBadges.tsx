import { FiShield, FiTruck, FiAward, FiCheckCircle } from 'react-icons/fi'

const TrustBadges = () => {
  const badges = [
    {
      icon: FiAward,
      text: 'Partner Certificato Fortinet',
    },
    {
      icon: FiShield,
      text: '100% Prodotti Originali',
    },
    {
      icon: FiTruck,
      text: 'Spedizione Gratuita > €500',
    },
    {
      icon: FiCheckCircle,
      text: 'Garanzia Ufficiale',
    },
  ]

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex items-center justify-center gap-3">
                <Icon className="text-fortinet-red flex-shrink-0" size={24} />
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
