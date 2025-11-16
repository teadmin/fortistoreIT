import Link from 'next/link'
import { FiShield, FiWifi, FiGrid, FiRadio, FiBarChart2, FiMail } from 'react-icons/fi'

const Categories = () => {
  const categories = [
    {
      name: 'FortiGate',
      slug: 'fortigate',
      description: 'Firewall NGFW di nuova generazione',
      icon: FiShield,
      color: 'text-fortinet-red',
      bgColor: 'bg-red-50',
      count: '15+ modelli',
    },
    {
      name: 'FortiWiFi',
      slug: 'fortiwifi',
      description: 'Firewall con WiFi integrato',
      icon: FiWifi,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      count: '8 modelli',
    },
    {
      name: 'FortiSwitch',
      slug: 'fortiswitch',
      description: 'Switch gestiti Layer 2/3',
      icon: FiGrid,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      count: '10+ modelli',
    },
    {
      name: 'FortiAP',
      slug: 'fortiap',
      description: 'Access Point WiFi 6',
      icon: FiRadio,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      count: '12 modelli',
    },
    {
      name: 'Management',
      slug: 'management',
      description: 'FortiAnalyzer, FortiManager',
      icon: FiBarChart2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      count: '6 soluzioni',
    },
    {
      name: 'Email & Web Security',
      slug: 'security',
      description: 'FortiMail, FortiWeb',
      icon: FiMail,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      count: '4 prodotti',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fortinet-red hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className={`${category.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                <Icon className={`${category.color} w-8 h-8`} />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2 group-hover:text-fortinet-red transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{category.count}</span>
                  <span className="text-fortinet-red text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Esplora →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
